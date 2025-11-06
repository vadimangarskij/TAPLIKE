'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-media-query';

interface RouteGuardProps {
  children: React.ReactNode;
}

export function RouteGuard({ children }: RouteGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [override, setOverride] = useState(false);
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    setIsClient(true);
    
    // Check for override flag in localStorage
    const storedOverride = localStorage.getItem('desktop-override');
    if (storedOverride === 'true') {
      setOverride(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const isMobileDevice = isMobile || isTablet;
    const isLandingPage = pathname === '/landing';
    
    // Redirect to landing page on desktop unless overridden
    if (!isMobileDevice && !isLandingPage && !override) {
      router.push('/landing');
    }
    
    // Redirect mobile users away from landing page
    if (isMobileDevice && isLandingPage) {
      router.push('/home');
    }
  }, [isClient, isMobile, isTablet, pathname, router, override]);

  const handleOverride = () => {
    setOverride(true);
    localStorage.setItem('desktop-override', 'true');
    router.push('/home');
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show landing page for desktop users
  if (!isMobile && !isTablet && pathname === '/landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              CampusMatch
            </h1>
            <p className="text-gray-600 mb-6">
              Connect with students around your campus
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>Mobile Experience Required</strong>
              </p>
              <p className="text-sm text-amber-700 mt-1">
                CampusMatch is designed for mobile devices. Please use your phone or tablet for the best experience.
              </p>
            </div>
            
            <button
              onClick={handleOverride}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Continue on Desktop (Preview Mode)
            </button>
            
            <p className="text-xs text-gray-500">
              Some features may not work optimally on desktop
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}