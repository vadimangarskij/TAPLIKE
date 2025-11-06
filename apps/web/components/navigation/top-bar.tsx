'use client';

import { ReactNode } from 'react';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: ReactNode;
  className?: string;
}

export function TopBar({
  title,
  showBack = false,
  onBack,
  rightAction,
  className = '',
}: TopBarProps) {
  return (
    <div className={`sticky top-0 z-40 bg-white border-b border-gray-200 safe-area-inset-top ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center flex-1">
            {showBack && (
              <button
                onClick={onBack}
                className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {title && (
              <h1 className="text-lg font-semibold text-gray-900 truncate">
                {title}
              </h1>
            )}
          </div>
          
          {rightAction && (
            <div className="flex items-center">
              {rightAction}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}