'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

import LineUp from '@/components/motion/LineUp';
import FadeIn from '@/components/motion/FadeIn';
import LandmarkSection from '@/components/LandmarkSection';

const features = [
  {
    num: '01',
    title: '반포 3지구 재건축',
    desc: '반포의 마지막 대규모 재건축 프로젝트. 새로운 반포의 미래가 이곳에서 시작됩니다.',
  },
  {
    num: '02',
    title: '스카이 커뮤니티',
    desc: '초고층에 위치한 스카이 커뮤니티에서 한강과 서울의 스카이라인을 한눈에 담습니다.',
  },
  {
    num: '03',
    title: '미래형 단지 설계',
    desc: '보행 중심의 단지 설계, 첨단 스마트홈 시스템, 친환경 에너지 솔루션까지.',
  },
];

export default function TriniOnePage() {
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
              src="/images/trinione/aerial-south.jpg"
              alt="래미안 트리니원 남측 조감도"
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
            The Future of Banpo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-white"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.5)' }}
          >
            트리니원
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-5 text-white/90 text-[11px] md:text-sm tracking-[0.3em] font-display font-light"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            RAEMIAN TRINIONE
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
            <img src="/images/trinione/front-view-day.jpg" alt="트리니원 정면 투시" className="absolute inset-0 w-full h-full object-cover" />
          </FadeIn>

          <FadeIn>
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-8 font-heading">Next Generation</p>
          </FadeIn>

          <LineUp
            as="h2"
            className="font-serif text-3xl md:text-5xl font-light leading-relaxed mb-8 text-[#1a1a1a]"
            delay={0.2}
          >
            {['반포의 미래를', <><span className="text-[#2a9d8f]">설계</span>하다</>]}
          </LineUp>

          <FadeIn delay={0.4}>
            <p className="text-[#666] leading-[2.2] text-sm md:text-base max-w-2xl mx-auto">
              래미안 트리니원은 반포 3지구 재건축의 결정체입니다.
              반포의 마지막 대규모 재건축 프로젝트로서,
              차세대 프리미엄 주거의 새로운 기준을 제시합니다.
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
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Innovation</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-gray-900">
              차세대 주거 혁신
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

      {/* ══════ DESIGN ══════ */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Master Plan</p>
            </FadeIn>
            <LineUp
              as="h2"
              className="font-serif text-3xl md:text-5xl font-light text-gray-900"
            >
              {['마스터플랜']}
            </LineUp>
          </div>

          {/* Site Plan */}
          <FadeIn className="mb-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg max-w-4xl mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/trinione/site-plan.jpg" alt="반포 3지구 배치도" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <p className="text-center text-gray-400 text-xs mt-4 tracking-[2px]">SITE PLAN</p>
          </FadeIn>

          {/* Aerial Views */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/trinione/aerial-east.jpg" alt="동측 조감도" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div>
              <FadeIn direction="right">
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">Aerial View</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900"
                delay={0.3}
              >
                {['한강을 품은', '압도적 스케일']}
              </LineUp>
              <FadeIn delay={0.5} direction="right">
                <p className="text-gray-500 text-sm leading-[2]">
                  반포 한강변의 광활한 부지 위에 펼쳐지는 트리니원.
                  초고층 타워와 넓은 단지 조경이 만들어내는
                  압도적인 스케일은 반포의 새로운 스카이라인이 됩니다.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Sky Community */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/trinione/sky-community.jpg" alt="스카이 커뮤니티" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div className="md:order-1">
              <FadeIn direction="left">
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">Sky Community</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900"
                delay={0.3}
              >
                {['하늘 위의 커뮤니티,', '스카이 라운지']}
              </LineUp>
              <FadeIn delay={0.5} direction="left">
                <p className="text-gray-500 text-sm leading-[2]">
                  초고층에 위치한 스카이 커뮤니티에서 서울의 야경과 한강의 파노라마를 감상합니다.
                  프라이빗한 공간에서 즐기는 특별한 라이프스타일.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PARALLAX IMAGE ══════ */}
      <section
        className="relative h-[70vh]"
        style={{
          backgroundImage: 'url(/images/trinione/front-view.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <FadeIn>
              <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading drop-shadow">Coming Soon</p>
            </FadeIn>
            <LineUp
              as="h3"
              className="font-serif text-2xl md:text-4xl font-light text-white drop-shadow-lg"
            >
              {['반포의 미래, 곧 시작됩니다']}
            </LineUp>
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
                <img src="/images/trinione/gate-01.jpg" alt="트리니원 문주" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/trinione/back-view-night.jpg" alt="트리니원 야경" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <FadeIn direction="bottom" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/trinione/east-plaza.jpg" alt="동측 광장" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="bottom" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/trinione/south-group.jpg" alt="남측 그룹" className="absolute inset-0 w-full h-full object-cover" />
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
          backgroundImage: 'url(/images/trinione/front-view-day.jpg)',
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
            {['반포의 미래,', <span key="highlight"><span className="text-[#2a9d8f]">트리니원</span>에서 시작</span>]}
          </LineUp>
          <FadeIn delay={0.5}>
            <p className="mt-8 text-white/70 text-sm leading-[2] max-w-xl mx-auto">
              반포 3지구의 마지막 대규모 재건축.
              삼성물산의 차세대 기술과 미래형 설계가 만드는
              반포의 새로운 랜드마크, 래미안 트리니원.
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
