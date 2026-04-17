'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra classes to add to the wrapper div */
  className?: string;
  /** Delay in seconds */
  delay?: number;
  /** Animation variant */
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade';
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  /** Once or every time? */
  once?: boolean;
}

const variants = {
  up: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  right: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
} as const;

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
