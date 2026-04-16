'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra classes to add to the wrapper div */
  className?: string;
  /** Delay variant: 1 | 2 | 3 (adds 0.1 / 0.2 / 0.3s extra delay) */
  delay?: 1 | 2 | 3;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect(); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal-section ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
