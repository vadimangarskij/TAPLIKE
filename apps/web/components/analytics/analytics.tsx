'use client';

import { useEffect } from 'react';

export function Analytics() {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV === 'production') {
      // Placeholder for analytics integration
      // Example: Google Analytics, Plausible, etc.
      console.log('Analytics loaded');
    }
  }, []);

  return null;
}