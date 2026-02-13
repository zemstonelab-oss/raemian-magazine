'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface LineUpProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  delay?: number;
}

/**
 * LineUp text animation — each line slides up from below with staggered timing.
 */
export default function LineUp({
  children,
  className = '',
  as = 'div',
  delay = 0.2,
}: LineUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // Extract lines from children — if array passed directly, each element is a line
  const lines = Array.isArray(children) ? children : extractLines(children);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: delay,
      },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[as] as any;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {lines.map((line, i) => (
        <motion.span key={i} variants={lineVariant} className="block overflow-hidden">
          <span className="block">{line}</span>
        </motion.span>
      ))}
    </MotionTag>
  );
}

function extractLines(children: React.ReactNode): React.ReactNode[] {
  if (typeof children === 'string') {
    return children.split('\n').filter(Boolean);
  }

  // Handle JSX with <br/> — flatten into lines
  if (Array.isArray(children)) {
    const lines: React.ReactNode[] = [];
    let currentLine: React.ReactNode[] = [];

    children.forEach((child) => {
      if (child && typeof child === 'object' && 'type' in child && child.type === 'br') {
        if (currentLine.length > 0) {
          lines.push(currentLine.length === 1 ? currentLine[0] : <>{...currentLine}</>);
          currentLine = [];
        }
      } else {
        currentLine.push(child);
      }
    });
    if (currentLine.length > 0) {
      lines.push(currentLine.length === 1 ? currentLine[0] : <>{...currentLine}</>);
    }
    return lines.length > 0 ? lines : [children];
  }

  return [children];
}
