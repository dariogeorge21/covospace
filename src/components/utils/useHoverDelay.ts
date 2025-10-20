import { useCallback, useRef } from 'react';

/**
 * Custom hook for implementing hover delay functionality
 * Supports both enter and leave delays for navigation patterns
 *
 * @param onEnter - Function to execute after enter delay
 * @param onLeave - Function to execute after leave delay (optional)
 * @param enterDelay - Delay in milliseconds for mouse enter (default: 500ms)
 * @param leaveDelay - Delay in milliseconds for mouse leave (default: 100ms)
 * @returns Object with onMouseEnter and onMouseLeave handlers
 */
export const useHoverDelay = (
  onEnter: () => void,
  onLeave?: () => void,
  enterDelay: number = 500,
  leaveDelay: number = 100
) => {
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onMouseEnter = useCallback(() => {
    // Clear any existing leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    // Clear any existing enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }

    // Set new timeout for the enter callback
    enterTimeoutRef.current = setTimeout(() => {
      onEnter();
      enterTimeoutRef.current = null;
    }, enterDelay);
  }, [onEnter, enterDelay]);

  const onMouseLeave = useCallback(() => {
    // Clear enter timeout when mouse leaves
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }

    // Set leave timeout if callback provided
    if (onLeave) {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }

      leaveTimeoutRef.current = setTimeout(() => {
        onLeave();
        leaveTimeoutRef.current = null;
      }, leaveDelay);
    }
  }, [onLeave, leaveDelay]);

  // Cleanup function to clear timeouts on unmount
  const cleanup = useCallback(() => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  }, []);

  return {
    onMouseEnter,
    onMouseLeave,
    cleanup
  };
};
