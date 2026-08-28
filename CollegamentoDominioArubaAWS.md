# Collegamento Dominio Aruba - AWS Amplify

## Il Contesto: Qual è esattamente il problema?

Quando si cerca di collegare un dominio gestito da un provider tradizionale (come Aruba, Register, ecc.) a servizi cloud moderni come AWS (Amplify, CloudFront, Load Balancer), ci si scontra con una limitazione tecnica fondamentale legata ai protocolli DNS e agli IP dinamici.

1. **La natura di AWS:** I servizi come Amplify o CloudFront non forniscono un indirizzo IP statico (es. `192.168.1.1`). Forniscono invece un nome a dominio (es. `dxxxxx.cloudfront.net`). Per collegarli, è necessario usare record DNS basati su nome, come i **CNAME**.
2. **Il limite del protocollo DNS:** Le regole globali del DNS vietano severamente di inserire un record CNAME sul **dominio radice** (chiamato anche "Apex domain" o "Naked domain", es. `cliente.it` senza il `www`). Il CNAME è permesso solo sui sottodomini (es. `www.cliente.it`).
3. **Il limite di Aruba:** Per aggirare questo limite del protocollo DNS, i provider DNS più avanzati (come AWS Route 53 o Cloudflare) hanno inventato dei record speciali chiamati **ALIAS** o **ANAME** (o CNAME Flattening). Questi record "fingono" di essere record A (quindi permessi sulla radice), ma dietro le quinte risolvono dinamicamente i domini come CloudFront. Aruba e i provider tradizionali **non supportano** questi record speciali.

### La conseguenza pratica (Cosa succede di solito)
Se tenti di collegare direttamente `cliente.it` ad Amplify lasciando i DNS su Aruba:
- `www.cliente.it` ↓ CNAME Amplify ✅ (Funziona)
- `cliente.it` ↓ Non puoi usare un CNAME, Aruba non ha l'ALIAS, e AWS non ti dà un IP statico da mettere nel record A ❌ (Si rompe)

AWS stessa, nella sua documentazione ufficiale, raccomanda che se il provider DNS non supporta i record ALIAS/ANAME per la radice, l'unica vera soluzione architetturale è **migrare l'intera gestione dei DNS su Amazon Route 53**.
Questo spiega perché, con i clienti precedenti, la migrazione a Route 53 era sembrata una scelta non solo sensata, ma tecnicamente obbligata.

---

## La Soluzione Alternativa (Senza Route 53)

La differenza con quello che stiamo proponendo in questa guida è fondamentale: questa volta **non proviamo** a collegare `ciserani.it` direttamente ad Amplify tramite DNS.

Facciamo intervenire un servizio di terze parti (il server web di Aruba stesso):
`ciserani.it` → HTTP redirect Aruba → `https://www.ciserani.it` → DNS CNAME → Amplify

Sono due cose completamente diverse.
Aruba supporta ufficialmente il redirect del dominio verso un altro URL e, quando lo attivi, installa anche il certificato SSL necessario sul dominio del redirect. 
Questa soluzione evita proprio il problema che avevi avuto con l'altro cliente.

## La configurazione da fare

Su **Aruba**:
- **DNS MX / TXT / PEC** → NON TOCCARE
- **www CNAME** → `xxxxx.cloudfront.net` *(valore dato da Amplify)*
- **_acm... CNAME** → `xxxxx.acm-validations.aws` *(valore dato da Amplify per SSL)*
- **ciserani.it** → Gestione Redirect Aruba → `https://www.ciserani.it`

Su **Amplify**:
- **www.ciserani.it** → collegato al branch `main`
Fine.

### ⚠️ Attenzione al Record A
C'è una cosa importante da NON fare: **non modificare il record A dell'apex (`ciserani.it`) manualmente**. 
Aruba dice esplicitamente che quando attivi il Redirect modifica automaticamente la configurazione DNS e che, se successivamente modifichi il record A del dominio, il Redirect può smettere di funzionare.

Quindi il riepilogo è:
- `www` CNAME → Amplify ✅
- ACM CNAME → AWS ✅
- MX/TXT/PEC → intatti ✅
- Redirect root → www ✅
- **Record A su `@` → NON TOCCARLO** ❌

### Perché con l'altro cliente funzionava solo www?
Probabilmente avevi fatto:
- `www` → CNAME Amplify ✅
- `root` → Amplify ❌
...e non avevi messo davanti il servizio Redirect di Aruba.

In quel caso Route 53 era effettivamente la soluzione naturale (Route53 ALIAS → Amplify).

Adesso invece stiamo facendo un piccolo compromesso: l'URL canonico del sito sarà `www.ciserani.it`.
Chi scrive `ciserani.it` riceve un redirect (301) verso `www.ciserani.it`. Visivamente per il cliente cambia solo che compare il `www` nella barra in alto.

*Nota finale: Se poi Aruba, per il particolare pacchetto di `ciserani.it`, non dovesse permetterti di attivare il Redirect (o se sovrascrivesse il www in modo non controllabile), allora Route 53 torna ad essere il piano B definitivo.*

---

## Protocollo di Verifica e Go-Live (Produzione)

Poiché stiamo operando su un dominio in produzione (dove email, PEC e SEO sono critici), la teoria non basta. Bisogna seguire un protocollo rigoroso per evitare disservizi (loop di reindirizzamento o interruzione della posta).

### 1. Pre-check Obbligatori (Su Aruba)
- **Identifica il piano:** Verifica nel pannello se il cliente ha un "Hosting Aruba" (che fa il redirect dell'apex in automatico) o solo "Gestione DNS e Redirect".
- **Backup DNS:** Esporta l'intera zona DNS (TXT/CSV) e fai uno screenshot di tutti i record (`A`, `CNAME`, `MX`, `TXT`, `CAA`, ecc.).
- **Verifica Email:** Testa l'invio e la ricezione di un'email prima di fare qualsiasi modifica.

### 2. Configurazione Sicura su Amplify
- Inserisci il dominio in Amplify scegliendo **Manual configuration**.
- **Mappatura:** Elimina il dominio radice (apex) e lascia **SOLO** `www.ciserani.it` puntato al branch `main`. *Questo previene che Amplify resti bloccato aspettando la validazione dell'apex.*
- Copia il CNAME di validazione ACM e il CNAME CloudFront di destinazione.

### 3. Validazione Certificato (Fase 1)
- Su Aruba, aggiungi **solo** il CNAME di validazione ACM (`_qualcosa` -> `_qualcosa.acm-validations.aws.`).
- *Attenzione:* Inserisci solo la parte prima del dominio se Aruba lo aggiunge in automatico nel campo host.
- Attendi che Amplify confermi la validazione (può volerci qualche decina di minuti).

### 4. Cutover Web (Fase 2)
- Rimuovi eventuali vecchi record `A` o `CNAME` per l'host `www` che entrerebbero in conflitto.
- Aggiungi il nuovo record **CNAME** per `www` verso `xxxx.cloudfront.net`.
- **NON TOCCARE** i record dell'apex (`@`), in particolare `A`, `NS`, `MX`, `TXT`, `PEC`.

### 5. Attivazione Redirect (Fase 3 - Solo se necessario)
- Prova ad aprire `https://www.ciserani.it`. Se funziona ed è in HTTPS, il sito è online.
- Ora prova `ciserani.it`. Se redireziona in automatico a `www` (grazie al piano Hosting Aruba), **fermati qui. Hai finito.**
- Se non carica nulla, attiva la **Gestione Redirect** su Aruba da `ciserani.it` verso `https://www.ciserani.it`.
- *Verifica Critica:* Controlla che attivando il Redirect, Aruba non abbia cancellato o sovrascritto il CNAME di `www` che avevi appena creato!

### 6. Comandi di Verifica (Terminale macOS/Linux)
Verifica la corretta propagazione senza farti ingannare dalla cache del browser:
```bash
dig +short NS ciserani.it
dig +short CNAME www.ciserani.it
dig +short MX ciserani.it
curl -sSIL --max-redirs 5 http://ciserani.it/
curl -sSIL --max-redirs 5 https://ciserani.it/
curl -sSIL --max-redirs 5 https://www.ciserani.it/
```

### 7. Piano di Rollback (Emergenza)
Se qualcosa va storto o il redirect di Aruba crea problemi insormontabili:
1. Ripristina i vecchi record dell'host `www` esattamente dallo screenshot di backup.
2. Disattiva la "Gestione Redirect" se è stata la causa del problema.
3. **Non manomettere** `MX` e `TXT` durante il rollback web.
4. Una volta ripristinata la situazione, valuta la migrazione completa dei Name Server su AWS Route 53 come soluzione definitiva.
