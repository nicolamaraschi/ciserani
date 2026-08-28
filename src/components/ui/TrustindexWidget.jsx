import React, { useEffect, useRef } from 'react';

const TrustindexWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Evita di caricare lo script più volte se il componente viene ri-renderizzato
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = "https://cdn.trustindex.io/loader.js?893c6fe800ea25542586747db19";
      script.defer = true;
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center overflow-hidden">
      {/* Il widget di Trustindex verrà caricato qui dentro dallo script */}
    </div>
  );
};

export default TrustindexWidget;
