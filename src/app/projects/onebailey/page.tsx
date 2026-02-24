'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

import LineUp from '@/components/motion/LineUp';
import FadeIn from '@/components/motion/FadeIn';
import CountUp from '@/components/motion/CountUp';
import LandmarkSection from '@/components/LandmarkSection';

const features = [
  {
    num: '01',
    title: '한강 파노라마 조망',
    desc: '남향 전면에 펼쳐지는 한강 파노라마 뷰. 거실에서 한강의 사계를 온전히 느낄 수 있습니다.',
  },
  {
    num: '02',
    title: '반포 최고의 입지',
    desc: '반포대로, 신반포로의 교통 중심. 강남 업무지구와 한강 생활권을 동시에 누립니다.',
  },
  {
    num: '03',
    title: '초고층 랜드마크',
    desc: '서울 한강변의 새로운 스카이라인. 초고층 설계로 완성되는 압도적인 존재감.',
  },
];

const stats = [
  { label: '최고 층수', value: 35, suffix: 'F' },
  { label: '총 세대수', value: 2990, suffix: '' },
  { label: '한강 조망률', value: 50, suffix: '%' },
];

export default function OneBaileyPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  return (
    <main className="text-gray-900 overflow-x-hidden">
      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/onebailey/exterior-01.jpg"
              alt="래미안 원베일리 전경"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.4) 100%)' }} />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/90 text-[10px] md:text-xs tracking-[0.3em] uppercase font-heading font-semibold mb-5"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            Beyond Expectations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-white"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.5)' }}
          >
            원베일리
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-5 text-white/90 text-[11px] md:text-sm tracking-[0.3em] font-display font-light"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            RAEMIAN ONE BAILEY
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[4px] text-gray-400 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-10 bg-gradient-to-b from-[#2a9d8f] to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════ INTRO ══════ */}
      <section className="relative min-h-screen flex items-center bg-[#fafafa]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <FadeIn direction="bottom" className="relative aspect-[16/9] overflow-hidden rounded-lg mb-16 max-w-3xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/onebailey/exterior-03.jpg" alt="원베일리 외관" className="absolute inset-0 w-full h-full object-cover" />
          </FadeIn>

          <FadeIn>
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-8 font-heading">The Icon of Banpo</p>
          </FadeIn>

          <LineUp
            as="h2"
            className="font-serif text-3xl md:text-5xl font-light leading-relaxed mb-8 text-[#1a1a1a]"
            delay={0.2}
          >
            {['반포의 자부심,', <><span className="text-[#2a9d8f]">한강</span>을 품다</>]}
          </LineUp>

          <FadeIn delay={0.4}>
            <p className="text-[#666] leading-[2.2] text-sm md:text-base max-w-2xl mx-auto">
              대한민국 최고의 주거 입지 반포. 그 중심에서 한강의 파노라마를 온전히 담아내는
              래미안 원베일리는 삼성물산의 기술력과 노하우가 집약된 프리미엄 랜드마크입니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-16 w-16 h-px bg-[#2a9d8f] mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* ══════ KEY FEATURES ══════ */}
      <section className="min-h-screen flex items-center py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn className="text-center mb-20">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Premium Value</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-gray-900">
              대체 불가능한 가치
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FadeIn key={f.num} delay={i * 0.2} duration={1}>
                <div className="group border border-gray-200 p-6 md:p-10 hover:border-[#2a9d8f]/40 hover:shadow-md transition-all duration-500 h-full bg-white rounded-lg">
                  <span className="font-serif text-[#2a9d8f] text-sm tracking-[3px] block mb-6">{f.num}</span>
                  <h3 className="font-serif text-xl md:text-2xl mb-4 text-gray-900 group-hover:text-[#2a9d8f] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[2]">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PARALLAX IMAGE ══════ */}
      <section
        className="relative h-[70vh]"
        style={{
          backgroundImage: 'url(/images/onebailey/exterior-05.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* ══════ STATS ══════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/onebailey/exterior-04.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">At a Glance</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white">주요 수치</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.2}>
                <div className="text-center">
                  <p className="text-[#2a9d8f] font-serif text-3xl md:text-5xl font-light">
                    <CountUp to={s.value} suffix={s.suffix} duration={2} />
                  </p>
                  <p className="text-gray-300 text-sm mt-2">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ GALLERY ══════ */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Gallery</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">갤러리</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onebailey/exterior-04.jpg" alt="원베일리 야경" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onebailey/exterior-06.jpg" alt="원베일리 전경" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <FadeIn direction="bottom" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onebailey/panorama-03.jpg" alt="원베일리 전경" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="bottom" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onebailey/exterior-02.jpg" alt="원베일리 외관" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="bottom" delay={0.3}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onebailey/panorama-04.jpg" alt="원베일리 한강 조망" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════ GLOBAL LANDMARKS ══════ */}
      <LandmarkSection />

      {/* ══════ VISION ══════ */}
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(/images/onebailey/panorama-05.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl py-32">
          <FadeIn>
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-8 font-heading" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>Vision</p>
          </FadeIn>
          <LineUp
            as="h2"
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-snug text-white"
            delay={0.2}
          >
            {['한강이 선사하는', <span key="highlight">최고의 <span className="text-[#2a9d8f]">일상</span></span>]}
          </LineUp>
          <FadeIn delay={0.5}>
            <p className="mt-8 text-white/70 text-sm leading-[2] max-w-xl mx-auto">
              래미안 원베일리는 한강과 함께하는 프리미엄 라이프스타일의 새로운 기준입니다.
              삼성물산의 초고층 기술력과 조망특화 설계가 만들어내는
              대한민국 최고의 주거 경험을 선사합니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <Link
              href="/projects"
              className="inline-block mt-12 border border-white/60 text-white px-10 py-4 text-sm tracking-[3px] uppercase hover:bg-[#2a9d8f] hover:border-[#2a9d8f] transition-all duration-500 rounded"
            >
              모든 프로젝트
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
