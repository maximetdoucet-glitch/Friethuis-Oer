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
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)', skewY: 2 },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', skewY: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40, filter: 'blur(10px)', skewX: 2 },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', skewX: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40, filter: 'blur(10px)', skewX: -2 },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', skewX: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)', y: 20 },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 },
  },
  fade: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
} as const;

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier for snappy visible feel
        type: 'spring',
        damping: 25,
        stiffness: 120,
      }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
