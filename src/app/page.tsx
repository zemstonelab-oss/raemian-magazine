'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  animate as motionAnimate,
} from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

type Phase = 'loading' | 'revealing' | 'complete';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('loading');
  const featured = articles.find((a) => a.featured) || articles[0];
  const latest = articles.slice(0, 4);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // === Panel width: 100% → 50% ===
  const panelWidth = useMotionValue(100);
  const panelWidthPct = useTransform(panelWidth, (v) => `${v}%`);

  // === Scroll-based (after complete) ===
  const leftY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageWidth = useTransform(scrollYProgress, [0, 0.5], ['50%', '100%']);

  // Phase 1 → 2: loading → revealing
  useEffect(() => {
    const startReveal = () => setTimeout(() => setPhase('revealing'), 2400);
    if (document.readyState === 'complete') {
      startReveal();
    } else {
      window.addEventListener('load', startReveal);
      const fallback = setTimeout(() => setPhase('revealing'), 4000);
      return () => {
        window.removeEventListener('load', startReveal);
        clearTimeout(fallback);
      };
    }
  }, []);

  // Phase 2: panel shrinks 100% → 50%
  useEffect(() => {
    if (phase !== 'revealing') return;
    const ctrl = motionAnimate(panelWidth, 50, {
      duration: 1.2,
      ease: [0.4, 0, 0.15, 1],
      delay: 0.1,
    });
    const t = setTimeout(() => setPhase('complete'), 1800);
    return () => {
      ctrl.stop();
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Lock scroll during loading/revealing
  useEffect(() => {
    document.body.style.overflow = phase === 'complete' ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  const isComplete = phase === 'complete';
  const isLoading = phase === 'loading';

  // Logo dimensions (matching RaemianLogo size=1.2)
  const S = 1.2;
  const barW = 18 * S;
  const barH = 56 * S;
  const barGap = 6 * S;
  const barR = 2 * S;
  const txtSize = 13 * S;
  const txtSpacing = 4 * S;
  const txtMt = 8 * S;

  return (
    <>
      {/* ── Hero - Split Layout ── */}
      <div ref={heroRef} className="h-[200vh] relative">
        <section className="sticky top-0 h-screen overflow-hidden">
          {/* Left Panel = Loading screen → Left panel (하나의 요소) */}
          <motion.div
            style={{
              y: isComplete ? leftY : 0,
              opacity: isComplete ? leftOpacity : 1,
              width: isComplete ? '50%' : panelWidthPct,
              zIndex: isComplete ? 10 : 60,
            }}
            className="absolute top-0 left-0 h-full bg-white flex items-center justify-center max-md:!w-full"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Animated logo bars */}
              <div className="flex flex-col items-center">
                <div style={{ display: 'flex', gap: barGap }}>
                  {[
                    { bg: '#2a9d8f', d: 0.2 },
                    { bg: '#c0c7c1', d: 0.35 },
                    { bg: '#2a9d8f', d: 0.5 },
                  ].map((bar, i) => (
                    <motion.div
                      key={i}
                      style={{
                        width: barW,
                        height: barH,
                        borderRadius: barR,
                        backgroundColor: bar.bg,
                        originY: 1,
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: bar.d, ease: 'easeOut' }}
                    />
                  ))}
                </div>
                <motion.p
                  className="font-display font-semibold uppercase"
                  style={{ color: '#2d4a47', fontSize: txtSize, letterSpacing: txtSpacing, marginTop: txtMt }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  RAEMIAN
                </motion.p>
              </div>

              {/* Loading bar (로딩 중에만) */}
              {isLoading && (
                <motion.div
                  className="w-20 h-[1px] bg-gray-200 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                >
                  <motion.div
                    className="h-full bg-[#2a9d8f]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 1.6, ease: 'easeInOut' }}
                  />
                </motion.div>
              )}

              {/* Tagline - 패널 도착 후 페이드인 */}
              <motion.span
                className="text-sm italic text-gray-400"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 1 : 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Beyond Expectations
              </motion.span>
            </div>
          </motion.div>

          {/* Right Panel - Aerial Image (항상 뒤에 있음, 패널이 줄면서 드러남) */}
          <motion.div
            style={{ width: imageWidth }}
            className="absolute right-0 top-0 h-full max-md:!w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/apgujeong/DJI_0795-aerial.jpg"
              alt="래미안 항공뷰"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Scroll indicator */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { duration: 0.6 }, y: { repeat: Infinity, duration: 2 } }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="w-px h-12 bg-gradient-to-b from-gray-400/60 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-teal mb-3">Latest Stories</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-16">최신 매거진</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latest.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>

      {/* Brand Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#fafafa]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-heading text-xs tracking-[0.4em] uppercase text-teal mb-8">Brand Philosophy</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight italic">
              Beyond<br />
              <span className="text-teal">Expectations</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              래미안은 단순한 주거 공간을 넘어, 삶의 가치를 높이는 프리미엄 라이프스타일을 제안합니다.
              건축, 디자인, 커뮤니티의 조화를 통해 당신의 일상을 특별하게 만들어갑니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection>
          <Link href={`/magazine/${featured.id}`} className="group block relative overflow-hidden aspect-[16/7] rounded-lg shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <span className="text-xs tracking-[0.2em] uppercase text-[#c9a962]">{featured.categoryLabel}</span>
              <h3 className="font-serif text-2xl md:text-4xl text-white mt-3 mb-3">{featured.title}</h3>
              <p className="text-gray-200 text-sm max-w-xl">{featured.excerpt}</p>
            </div>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
