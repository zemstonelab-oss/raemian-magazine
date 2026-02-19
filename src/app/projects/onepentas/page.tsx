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
    title: '갤러리 포레',
    desc: '자연과 예술이 공존하는 조경 갤러리. 단지 곳곳에 배치된 조형물과 녹지가 일상에 품격을 더합니다.',
  },
  {
    num: '02',
    title: '클럽 래미안',
    desc: '피트니스, 골프, 수영장 등 호텔급 커뮤니티 시설. 프리미엄 라이프스타일의 완성.',
  },
  {
    num: '03',
    title: '한강 생활권',
    desc: '한강 산책로, 반포 한강공원이 도보권. 자연과 도시의 완벽한 조화를 경험합니다.',
  },
];

const stats = [
  { label: '최고 층수', value: 35, suffix: 'F' },
  { label: '총 세대수', value: 641, suffix: '' },
  { label: '커뮤니티 면적', value: 9200, suffix: '㎡' },
];

export default function OnePentasPage() {
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
              src="/images/onepentas/panorama-01.jpg"
              alt="래미안 원펜타스 전경"
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
            Premium Lifestyle
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-white"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.5)' }}
          >
            원펜타스
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-5 text-white/90 text-[11px] md:text-sm tracking-[0.3em] font-display font-light"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            RAEMIAN ONE PENTAS
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
            <img src="/images/onepentas/entrance-01.jpg" alt="원펜타스 주출입구" className="absolute inset-0 w-full h-full object-cover" />
          </FadeIn>

          <FadeIn>
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-8 font-heading">Art & Nature</p>
          </FadeIn>

          <LineUp
            as="h2"
            className="font-serif text-3xl md:text-5xl font-light leading-relaxed mb-8 text-[#1a1a1a]"
            delay={0.2}
          >
            {['예술과 자연이', <><span className="text-[#2a9d8f]">공존</span>하는 공간</>]}
          </LineUp>

          <FadeIn delay={0.4}>
            <p className="text-[#666] leading-[2.2] text-sm md:text-base max-w-2xl mx-auto">
              래미안 원펜타스는 갤러리 포레의 예술적 조경과 클럽 래미안의 호텔급 커뮤니티로
              반포에서 가장 특별한 라이프스타일을 제안합니다.
              3,307세대의 대규모 단지가 만들어내는 풍성한 생활 인프라를 경험하세요.
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
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Lifestyle</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-gray-900">
              프리미엄 라이프스타일
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FadeIn key={f.num} delay={i * 0.2} duration={1}>
                <div className="group border border-gray-200 p-10 hover:border-[#2a9d8f]/40 hover:shadow-md transition-all duration-500 h-full bg-white rounded-lg">
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
          backgroundImage: 'url(/images/onepentas/highrise-01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* ══════ COMMUNITY ══════ */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Community</p>
            </FadeIn>
            <LineUp
              as="h2"
              className="font-serif text-3xl md:text-5xl font-light text-gray-900"
            >
              {['특별한 커뮤니티']}
            </LineUp>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onepentas/gallery-01.jpg" alt="갤러리 포레" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div>
              <FadeIn direction="right">
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">Gallery Forêt</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900"
                delay={0.3}
              >
                {['숲과 예술이 어우러진', '갤러리 포레']}
              </LineUp>
              <FadeIn delay={0.5} direction="right">
                <p className="text-gray-500 text-sm leading-[2]">
                  단지 전체를 하나의 갤러리로 만든 갤러리 포레.
                  세계적 조경 설계와 미술 장식품이 어우러져
                  일상 속에서 예술을 만나는 특별한 경험을 선사합니다.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onepentas/club-01.jpg" alt="클럽 래미안" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div className="md:order-1">
              <FadeIn direction="left">
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">Club Raemian</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900"
                delay={0.3}
              >
                {['호텔을 넘어서는', '클럽 래미안']}
              </LineUp>
              <FadeIn delay={0.5} direction="left">
                <p className="text-gray-500 text-sm leading-[2]">
                  피트니스, 골프 연습장, 수영장, 사우나 등 호텔급 시설을 갖춘 클럽 래미안.
                  입주민 전용 프리미엄 커뮤니티에서 여유로운 일상을 누릴 수 있습니다.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="py-32 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">At a Glance</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a]">주요 수치</h2>
          </FadeIn>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.2}>
                <div className="text-center">
                  <p className="text-[#2a9d8f] font-serif text-3xl md:text-5xl font-light">
                    <CountUp to={s.value} suffix={s.suffix} duration={2} />
                  </p>
                  <p className="text-gray-500 text-sm mt-2">{s.label}</p>
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

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn direction="bottom" delay={0}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onepentas/art-01.jpg" alt="미술장식품" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="bottom" delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onepentas/playground-01.jpg" alt="어린이 놀이터" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="bottom" delay={0.3}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/onepentas/highrise-02.jpg" alt="원펜타스 고층부" className="absolute inset-0 w-full h-full object-cover" />
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
          backgroundImage: 'url(/images/onepentas/entrance-01.jpg)',
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
            {['예술이 있는 일상,', <span key="highlight"><span className="text-[#2a9d8f]">원펜타스</span>의 특권</span>]}
          </LineUp>
          <FadeIn delay={0.5}>
            <p className="mt-8 text-white/70 text-sm leading-[2] max-w-xl mx-auto">
              갤러리 포레의 예술적 조경, 클럽 래미안의 프리미엄 커뮤니티,
              그리고 한강 생활권의 여유까지.
              래미안 원펜타스에서만 가능한 특별한 일상을 경험하세요.
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
