'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  duration?: number;
}

const clipPaths = {
  left: { hidden: 'inset(0 100% 0 0)', visible: 'inset(0 0% 0 0)' },
  right: { hidden: 'inset(0 0 0 100%)', visible: 'inset(0 0 0 0%)' },
  top: { hidden: 'inset(0 0 100% 0)', visible: 'inset(0 0 0% 0)' },
  bottom: { hidden: 'inset(100% 0 0 0)', visible: 'inset(0% 0 0 0)' },
};

export default function ImageReveal({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  duration = 1.2,
}: ImageRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const clip = clipPaths[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { clipPath: clip.hidden },
        visible: { clipPath: clip.visible },
      }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
