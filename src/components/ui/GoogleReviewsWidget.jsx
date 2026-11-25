import { useEffect, useRef } from 'react';

const GoogleReviewsWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <div className="sk-ww-google-reviews" data-embed-id="25731965" />
    </div>
  );
};

export default GoogleReviewsWidget;
