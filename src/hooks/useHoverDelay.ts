import { useCallback, useRef } from 'react';

/**
 * Custom hook for debouncing hover events to prevent flickering
 * @param callback - Function to call after the delay
 * @param delay - Delay in milliseconds (default: 150ms)
 * @returns Object with onMouseEnter and onMouseLeave handlers
 */
export const useHoverDelay = (
  callback: () => void,
  delay: number = 150
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onMouseEnter = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  const onMouseLeave = useCallback(() => {
    // Clear timeout when mouse leaves
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return {
    onMouseEnter,
    onMouseLeave,
    cleanup
  };
};
