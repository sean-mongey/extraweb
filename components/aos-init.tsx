'use client';

import { useEffect } from 'react';

export function AOSInit() {
  useEffect(() => {
    // Initialize AOS on client side only
    if (typeof window !== 'undefined') {
      Promise.all([
        import('aos/dist/aos.css'),
        import('aos')
      ]).then(([, AOSModule]) => {
        const AOS = AOSModule.default;
        if (!AOS.initialized) {
          AOS.init({
            duration: 300,
            easing: 'ease-in-out',
            offset: 20,
            once: false,
          });
        }
        // Refresh AOS after a short delay to ensure DOM is ready
        setTimeout(() => AOS.refresh(), 100);
        setTimeout(() => AOS.refresh(), 300);
        setTimeout(() => AOS.refresh(), 500);
      }).catch(() => {
        // Silently fail if AOS can't load
      });
    }
  }, []);

  return null;
}

