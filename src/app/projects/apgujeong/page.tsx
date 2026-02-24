'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import LineUp from '@/components/motion/LineUp';
import FadeIn from '@/components/motion/FadeIn';
import CountUp from '@/components/motion/CountUp';

/* ─── data ─── */
const landmarks = [
  { name: '부르즈 칼리파', location: '두바이', height: 828, img: '/images/landmarks/burj-khalifa-04.jpg' },
  { name: '메르데카 118', location: '쿠알라룸푸르', height: 679, img: '/images/landmarks/merdeka-01.jpg' },
  { name: '타이베이 101', location: '타이베이', height: 508, img: '/images/landmarks/taipei101-03.jpg' },
  { name: '라흐타 센터', location: '상트페테르부르크', height: 462, img: '/images/landmarks/lakhta-02.jpg' },
  { name: '페트로나스 타워', location: '쿠알라룸푸르', height: 452, img: '/images/landmarks/petronas-03.jpg' },
];

const features = [
  {
    num: '01',
    title: '한강·서울숲 조망권',
    desc: '한강과 서울숲을 동시에 조망하는 압도적인 뷰 포인트. 도심 속 자연이 일상이 됩니다.',
  },
  {
    num: '02',
    title: '강남 업무지구 배후',
    desc: '테헤란로, 삼성동 업무지구와 직결되는 프리미엄 입지. 비즈니스와 주거의 완벽한 균형.',
  },
  {
    num: '03',
    title: '최상위 생활 인프라',
    desc: '갤러리아, 현대백화점, 청담동 프리미엄 상권이 도보권. 대한민국 최고의 라이프스타일.',
  },
];

/* ─── page ─── */
export default function ApgujeongPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);

  return (
    <main className="text-gray-900 overflow-x-hidden">
      {/* ══════ SECTION 1 — HERO ══════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image — fades in first */}
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
              src="/images/apgujeong/DJI_0806-aerial.jpg"
              alt="압구정 삼성 드론 항공샷"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.4) 100%)' }} />
        </motion.div>

        {/* Text — appears after background */}
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
            압구정 삼성
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-5 text-white/90 text-[11px] md:text-sm tracking-[0.3em] font-display font-light"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            RAEMIAN APGUJEONG SAMSUNG
          </motion.p>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[4px] text-gray-500 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-10 bg-gradient-to-b from-[#2a9d8f] to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════ SECTION 2 — HERITAGE ══════ */}
      <section className="relative min-h-screen flex items-center bg-[#fafafa]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <FadeIn className="relative aspect-[16/9] overflow-hidden rounded-lg mb-16 max-w-3xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/apgujeong/RAEMIAN-205s.jpg" alt="원베일리" className="absolute inset-0 w-full h-full object-cover" />
          </FadeIn>

          <FadeIn>
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-8 font-heading">The Legacy of Apgujeong</p>
          </FadeIn>

          <LineUp
            as="h2"
            className="font-serif text-3xl md:text-5xl font-light leading-relaxed mb-8 text-[#1a1a1a]"
            delay={0.2}
          >
            {['권력과 여유,', <span key="line2"><span className="text-[#2a9d8f]">부와 풍류</span>를</span>, '상징하는 이름']}
          </LineUp>

          <FadeIn delay={0.4}>
            <p className="text-[#666] leading-[2.2] text-sm md:text-base max-w-2xl mx-auto">
              압구정은 조선시대 한명회가 한강의 절경에 반해 정자를 세운 곳입니다.
              이후 수백 년간 권력과 부, 문화의 중심지로 자리매김했습니다.
              그리고 지금, 대한민국 주거의 새로운 기준이 이곳에서 다시 쓰여집니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-16 w-16 h-px bg-[#2a9d8f] mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* ══════ SECTION 3 — KEY FEATURES (white) ══════ */}
      <section className="min-h-screen flex items-center py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <FadeIn className="text-center mb-20">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Location Value</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-gray-900">
              대체 불가능한 입지
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

      {/* ══════ SECTION 3.5 — Feature Image ══════ */}
      <section
        className="relative h-[70vh]"
        style={{
          backgroundImage: 'url(/images/apgujeong/DJI_0795-aerial.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeIn className="text-center px-6">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading drop-shadow">Aerial View</p>
            <h3 className="font-serif text-2xl md:text-4xl font-light text-white drop-shadow-lg">
              한강과 서울숲이 만나는 곳
            </h3>
          </FadeIn>
        </div>
      </section>

      {/* ══════ SECTION 4 — GLOBAL LANDMARKS ══════ */}
      <section className="min-h-screen py-32 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-6">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Global Landmarks</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 text-[#1a1a1a]">
              삼성이 건설한<br />세계적 랜드마크
            </h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto">
              삼성물산 건설부문은 세계 최고층 빌딩을 포함한 글로벌 랜드마크를 건설해온
              대한민국 대표 건설사입니다.
            </p>
          </FadeIn>

          <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-5 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {landmarks.map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.12} duration={1} className="min-w-full sm:min-w-full md:min-w-0 snap-center shrink-0 md:shrink">
                <div className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div
                    className="aspect-[3/4] w-full"
                    style={{
                      backgroundImage: `url(${l.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="w-full h-full bg-black/15 group-hover:bg-black/0 transition-all duration-500" />
                  </div>
                  <div className="p-3 md:p-4 text-center">
                    <p className="text-[#2a9d8f] font-serif text-xl sm:text-2xl md:text-3xl font-light">
                      <CountUp to={l.height} suffix="m" duration={2} />
                    </p>
                    <p className="text-[#1a1a1a] text-xs sm:text-sm mt-1 font-medium">{l.name}</p>
                    <p className="text-[#999] text-[10px] sm:text-xs">{l.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 5 — SAMSUNG TECH (white) ══════ */}
      <section className="min-h-screen py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Construction Technology</p>
            </FadeIn>
            <LineUp
              as="h2"
              className="font-serif text-3xl md:text-5xl font-light text-gray-900"
            >
              {['기술이 만드는 차이']}
            </LineUp>
          </div>

          {/* DDP */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/landmarks/ddp-01.png" alt="동대문 디자인 플라자" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div>
              <FadeIn direction="right">
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">DDP — Dongdaemun Design Plaza</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900"
                delay={0.3}
              >
                {['불가능을 가능으로 만든', '비정형 건축의 정수']}
              </LineUp>
              <FadeIn delay={0.5} direction="right">
                <p className="text-gray-500 text-sm leading-[2]">
                  자하 하디드가 설계한 동대문 디자인 플라자는 45,000장의 서로 다른 외장 패널로
                  이루어진 세계 최대 규모의 비정형 건축물입니다.
                  삼성물산은 3D BIM 기술로 이 난제를 해결했습니다.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Incheon Bridge */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/landmarks/incheon-bridge-01.jpg" alt="인천대교" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </FadeIn>
            <div className="md:order-1">
              <FadeIn direction="left">
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">Incheon Bridge</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900"
                delay={0.3}
              >
                {['대한민국을 잇는', '21.38km의 도전']}
              </LineUp>
              <FadeIn delay={0.5} direction="left">
                <p className="text-gray-500 text-sm leading-[2]">
                  국내 최장 사장교 인천대교. 삼성물산의 토목 기술력이 집약된 대한민국 대표 인프라입니다.
                  이 기술력이 압구정 삼성의 조망특화 설계와 초고층 구조에 그대로 적용됩니다.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Full-width Raemian image */}
        <div
          className="mt-24 relative h-[60vh]"
          style={{
            backgroundImage: 'url(/images/apgujeong/RAEMIAN-116s.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-white/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <FadeIn>
                <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading drop-shadow">View-Specialized Design</p>
              </FadeIn>
              <LineUp
                as="h3"
                className="font-serif text-2xl md:text-4xl font-light text-white drop-shadow-lg"
              >
                {['조망특화 설계 · BIM 기술 · 초고층 시공력']}
              </LineUp>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 6 — VISION ══════ */}
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(/images/apgujeong/RAEMIAN-004s.jpg)',
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
            {['과거의 압구정을 넘어서는 건', <span key="highlight">오직 <span className="text-[#2a9d8f]">압구정 삼성</span>입니다</span>]}
          </LineUp>
          <FadeIn delay={0.5}>
            <p className="mt-8 text-white/70 text-sm leading-[2] max-w-xl mx-auto">
              반세기 동안 대한민국 최고의 주거지로 군림한 압구정.
              그 역사 위에 삼성의 기술력과 비전이 더해져
              새로운 반세기의 기준을 세웁니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <Link
              href="/"
              className="inline-block mt-12 border border-white/60 text-white px-10 py-4 text-sm tracking-[3px] uppercase hover:bg-[#2a9d8f] hover:border-[#2a9d8f] transition-all duration-500 rounded"
            >
              래미안 매거진
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-gray-200 py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display font-light text-[#2a9d8f] tracking-[4px] text-sm">RAEMIAN</p>
          <p className="text-gray-400 text-xs tracking-[2px]">
            © 2025 Samsung C&T Corporation. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
