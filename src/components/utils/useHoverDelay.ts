import { useCallback, useRef } from 'react';

/**
 * Custom hook for implementing hover delay functionality
 * Prevents flickering when mouse moves quickly across elements
 * 
 * @param callback - Function to execute after delay
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

    // Set new timeout for the callback
    timeoutRef.current = setTimeout(() => {
      callback();
      timeoutRef.current = null;
    }, delay);
  }, [callback, delay]);

  const onMouseLeave = useCallback(() => {
    // Clear timeout when mouse leaves
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Cleanup function to clear timeout on unmount
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return {
    onMouseEnter,
    onMouseLeave,
    cleanup
  };
};
