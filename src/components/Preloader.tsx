'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const fallback = setTimeout(() => setIsLoading(false), 3500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Logo bars — teal / light gray / teal */}
          <div className="flex gap-[5px] mb-2">
            <motion.div
              className="w-[18px] h-[56px] rounded-[2px] bg-[#2a9d8f]"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              style={{ originY: 1 }}
            />
            <motion.div
              className="w-[18px] h-[56px] rounded-[2px] bg-[#c0c7c1]"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              style={{ originY: 1 }}
            />
            <motion.div
              className="w-[18px] h-[56px] rounded-[2px] bg-[#2a9d8f]"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              style={{ originY: 1 }}
            />
          </div>

          {/* RAEMIAN text */}
          <motion.p
            className="font-display text-[13px] tracking-[4px] text-[#2d4a47] font-semibold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            RAEMIAN
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-8 w-20 h-[1px] bg-gray-200 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.div
              className="h-full bg-[#2a9d8f]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.0, delay: 1.1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
