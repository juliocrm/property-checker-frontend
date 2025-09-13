import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 600;

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= DESKTOP_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
}