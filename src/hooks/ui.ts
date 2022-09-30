import { useRef, useCallback } from 'react';

/**
 * Returns a ref for an element which when visible requires
 * a callback to be run.
 */
export const useVisibility = (
  onVisible: () => void,
  shouldAbort: () => boolean,
) => {
  const observer = useRef<IntersectionObserver>();
  const visibilityRef = useCallback((node: HTMLElement) => {
    if (shouldAbort()) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) onVisible();
    });
    if (node) observer.current.observe(node);
  }, [onVisible, shouldAbort]);

  return visibilityRef;
};
