'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import RaemianLogo from '@/components/RaemianLogo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/projects', label: 'Projects' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isDarkHero = isHome || pathname.startsWith('/projects');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isDarkHero ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <RaemianLogo
              size={0.55}
              color={scrolled || !isDarkHero ? 'default' : 'white'}
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  scrolled || !isDarkHero
                    ? 'text-gray-600 hover:text-teal'
                    : 'text-white/80 hover:text-white'
                }`}
                style={!scrolled && isDarkHero ? { textShadow: '0 1px 10px rgba(0,0,0,0.7)' } : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span className={`block w-6 h-px transition-all duration-300 ${scrolled || !isDarkHero ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${scrolled || !isDarkHero ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${scrolled || !isDarkHero ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl font-light tracking-[0.2em] text-gray-800 hover:text-teal transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
