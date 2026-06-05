// Speed Insights integration for vanilla JavaScript
// This code injects Vercel Speed Insights into the page

export const speedInsightsJsContent = /* javascript */ `
(function() {
  // Initialize Speed Insights queue
  window.si = window.si || function(...args) {
    (window.siq = window.siq || []).push(args);
  };

  // Inject the Speed Insights script
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  script.setAttribute('data-sdkn', '@vercel/speed-insights');
  script.setAttribute('data-sdkv', '2.0.0');
  
  // Only load in production (when deployed on Vercel)
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    document.head.appendChild(script);
  }
})();
`;
