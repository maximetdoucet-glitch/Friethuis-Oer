'use client';

import { useEffect, useRef, ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: 1 | 2 | 3 | 4 | 5;
  threshold?: number;
  /**
   * When true the WRAPPER itself is invisible and only the
   * reveal-* child elements get animated (good for sections
   * with split left/right columns)
   */
  propagate?: boolean;
  stagger?: boolean;
}

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up:    'reveal-up',
  left:  'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export default function ScrollReveal({
  children,
  className = '',
  variant = 'up',
  delay,
  threshold = 0.10,
  propagate = false,
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (propagate) {
            // Propagate is-visible to all nested reveal-* elements
            const targets = el.querySelectorAll<HTMLElement>(
              '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'
            );
            targets.forEach((t, i) => {
              // Small per-element delay so nested items cascade
              setTimeout(() => t.classList.add('is-visible'), i * 60);
            });
          } else {
            el.classList.add('is-visible');
          }
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, propagate]);

  if (stagger) {
    return (
      <div
        ref={ref}
        className={`stagger-children ${delay ? `reveal-delay-${delay}` : ''} ${className}`}
      >
        {children}
      </div>
    );
  }

  const variantClass = propagate ? '' : VARIANT_CLASS[variant];
  const delayClass   = delay ? `reveal-delay-${delay}` : '';

  return (
    <div ref={ref} className={`${variantClass} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
