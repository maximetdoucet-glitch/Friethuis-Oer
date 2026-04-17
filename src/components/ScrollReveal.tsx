'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra classes to add to the wrapper div */
  className?: string;
  /** Delay variant: 1 | 2 | 3 | 4 | 5 */
  delay?: 1 | 2 | 3 | 4 | 5;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  /** Animation variant */
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade';
}

export default function ScrollReveal({
  children,
  className = '',
  delay,
  threshold = 0.12,
  variant = 'up',
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
  const variantClass = `reveal-${variant}`;

  return (
    <div ref={ref} className={`${variantClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
