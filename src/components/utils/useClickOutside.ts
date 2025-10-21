import { useEffect, useRef } from 'react';

/**
 * Custom hook for detecting clicks outside of a referenced element
 * @param handler - Function to call when click outside is detected
 * @param enabled - Whether the hook should be active (default: true)
 * @returns ref - Ref to attach to the element you want to detect clicks outside of
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  handler: () => void,
  enabled: boolean = true
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler, enabled]);

  return ref;
};
