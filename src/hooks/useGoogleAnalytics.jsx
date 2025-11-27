import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const useGoogleAnalytics = (measurementId) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA if not already loaded
    if (!window.gtag) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `;
      document.head.appendChild(script2);
    }
  }, [measurementId]);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId]);
};
