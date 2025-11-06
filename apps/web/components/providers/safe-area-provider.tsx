'use client';

import * as React from 'react';
import { SafeAreaProvider as SafeAreaProviderContext } from 'react-native-safe-area-context';

interface SafeAreaProviderProps {
  children: React.ReactNode;
}

export function SafeAreaProvider({ children }: SafeAreaProviderProps) {
  // For web, we'll use CSS env() variables for safe areas
  // This is a simplified version that provides the context
  return (
    <div className="safe-area-inset-top safe-area-inset-bottom safe-area-inset-left safe-area-inset-right">
      {children}
    </div>
  );
}