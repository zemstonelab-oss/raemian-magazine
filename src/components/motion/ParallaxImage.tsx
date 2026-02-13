'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
  slowZoom?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = '',
  overlay = true,
  overlayColor = 'bg-black/40',
  slowZoom = false,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        {slowZoom ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          >
            <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority />
          </motion.div>
        ) : (
          <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority />
        )}
      </motion.div>
      {overlay && <div className={`absolute inset-0 ${overlayColor}`} />}
    </div>
  );
}
