'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';

/* ─── helpers ─── */
function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const dirs = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    none: {},
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = '',
  overlay = true,
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlay?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" priority />
      </motion.div>
      {overlay && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
}

/* ─── data ─── */
const landmarks = [
  { name: '부르즈 칼리파', location: '두바이', height: 828, img: '/images/apgujeong/burj-khalifa.jpg' },
  { name: '페트로나스 타워', location: '쿠알라룸푸르', height: 452, img: '/images/apgujeong/%ED%8E%98%ED%8A%B8%EB%A1%9C%EB%82%98%EC%8A%A4%ED%83%80%EC%9B%8C_1.jpg' },
  { name: '타이베이 101', location: '타이베이', height: 508, img: '/images/apgujeong/%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4101.jpg' },
  { name: '라흐타 센터', location: '상트페테르부르크', height: 462, img: '/images/apgujeong/%EB%9D%BC%ED%9D%90%ED%83%80%EC%84%BC%ED%84%B0.jpg' },
];

const maxHeight = 828;

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
      {/* ══════ SECTION 1 — HERO (dark) ══════ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="/images/apgujeong/DJI_0806-%ED%8E%B8%EC%A7%91-3_%EB%B3%B4%EC%A0%95.jpg"
            alt="압구정 삼성 드론 항공샷"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[#c9a962] text-xs tracking-[6px] uppercase mb-6 font-heading"
          >
            Beyond Expectations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-white"
          >
            압구정 삼성
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-gray-400 text-sm tracking-[3px] font-display font-light"
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
            className="w-px h-10 bg-gradient-to-b from-[#c9a962] to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════ SECTION 2 — HERITAGE (dark overlay on image) ══════ */}
      <section className="relative min-h-screen flex items-center">
        <ParallaxImage
          src="/images/apgujeong/RAEMIAN-205s.jpg"
          alt="원베일리"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <FadeIn>
            <p className="text-[#c9a962] text-xs tracking-[5px] uppercase mb-8 font-heading">The Legacy of Apgujeong</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-relaxed mb-8 text-white">
              권력과 여유,<br />
              <span className="text-[#c9a962]">부와 풍류</span>를<br />
              상징하는 이름
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-gray-300 leading-[2.2] text-sm md:text-base max-w-2xl mx-auto">
              압구정은 조선시대 한명회가 한강의 절경에 반해 정자를 세운 곳입니다.
              이후 수백 년간 권력과 부, 문화의 중심지로 자리매김했습니다.
              그리고 지금, 대한민국 주거의 새로운 기준이 이곳에서 다시 쓰여집니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="mt-16 w-16 h-px bg-[#c9a962] mx-auto" />
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
              <FadeIn key={f.num} delay={i * 0.15}>
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

      {/* ══════ SECTION 3.5 — Feature Image ══════ */}
      <section className="relative h-[70vh]">
        <ParallaxImage
          src="/images/apgujeong/DJI_0795-%ED%8E%B8%EC%A7%91-2.jpg"
          alt="압구정 항공뷰"
          className="absolute inset-0"
          speed={0.2}
        />
      </section>

      {/* ══════ SECTION 4 — GLOBAL LANDMARKS (dark) ══════ */}
      <section className="min-h-screen py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-6">
            <p className="text-[#c9a962] text-xs tracking-[5px] uppercase mb-4 font-heading">Global Landmarks</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
              삼성이 건설한<br />세계적 랜드마크
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              삼성물산 건설부문은 세계 최고층 빌딩을 포함한 글로벌 랜드마크를 건설해온
              대한민국 대표 건설사입니다.
            </p>
          </FadeIn>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {landmarks.map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.1}>
                <div className="group text-center">
                  {/* height bar */}
                  <div className="relative mx-auto w-full max-w-[160px] mb-4" style={{ height: '280px' }}>
                    <div className="absolute bottom-0 w-full overflow-hidden rounded-t"
                      style={{ height: `${(l.height / maxHeight) * 100}%` }}>
                      <Image src={l.img} alt={l.name} fill className="object-cover" sizes="200px" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
                    </div>
                  </div>
                  <p className="text-[#c9a962] font-serif text-2xl md:text-3xl font-light">{l.height}m</p>
                  <p className="text-white text-sm mt-1 font-medium">{l.name}</p>
                  <p className="text-gray-600 text-xs">{l.location}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 5 — SAMSUNG TECH (white) ══════ */}
      <section className="min-h-screen py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Construction Technology</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-gray-900">
              기술이 만드는 차이
            </h2>
          </FadeIn>

          {/* DDP */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/apgujeong/%EB%8F%99%EB%8C%80%EB%AC%B8%20%EB%94%94%EC%9E%90%EC%9D%B8%20%ED%94%8C%EB%9D%BC%EC%9E%901.png"
                  alt="동대문 디자인 플라자"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">DDP — Dongdaemun Design Plaza</p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900">
                  불가능을 가능으로 만든<br />비정형 건축의 정수
                </h3>
                <p className="text-gray-500 text-sm leading-[2]">
                  자하 하디드가 설계한 동대문 디자인 플라자는 45,000장의 서로 다른 외장 패널로
                  이루어진 세계 최대 규모의 비정형 건축물입니다.
                  삼성물산은 3D BIM 기술로 이 난제를 해결했습니다.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Incheon Bridge */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/apgujeong/incheon-bridge.jpg"
                  alt="인천대교"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" className="md:order-1">
              <div>
                <p className="text-[#2a9d8f] text-xs tracking-[4px] mb-4 font-heading">Incheon Bridge</p>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-gray-900">
                  대한민국을 잇는<br />21.38km의 도전
                </h3>
                <p className="text-gray-500 text-sm leading-[2]">
                  국내 최장 사장교 인천대교. 삼성물산의 토목 기술력이 집약된 대한민국 대표 인프라입니다.
                  이 기술력이 압구정 삼성의 조망특화 설계와 초고층 구조에 그대로 적용됩니다.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Full-width Raemian image */}
        <div className="mt-24 relative h-[60vh]">
          <ParallaxImage
            src="/images/apgujeong/RAEMIAN-116s.jpg"
            alt="원베일리 외관"
            className="absolute inset-0"
            speed={0.2}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <FadeIn className="text-center px-6">
              <p className="text-[#c9a962] text-xs tracking-[5px] uppercase mb-4 font-heading">View-Specialized Design</p>
              <h3 className="font-serif text-2xl md:text-4xl font-light text-white">
                조망특화 설계 · BIM 기술 · 초고층 시공력
              </h3>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 6 — VISION (dark overlay) ══════ */}
      <section className="relative min-h-screen flex items-center justify-center">
        <ParallaxImage
          src="/images/apgujeong/RAEMIAN-063s.jpg"
          alt="원베일리 야경"
          className="absolute inset-0"
          speed={0.15}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <FadeIn>
            <p className="text-[#c9a962] text-xs tracking-[5px] uppercase mb-8 font-heading">Vision</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-snug text-white">
              과거의 압구정을 넘어서는 건<br />
              오직 <span className="text-[#c9a962]">압구정 삼성</span>입니다
            </h2>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mt-8 text-gray-300 text-sm leading-[2] max-w-xl mx-auto">
              반세기 동안 대한민국 최고의 주거지로 군림한 압구정.
              그 역사 위에 삼성의 기술력과 비전이 더해져
              새로운 반세기의 기준을 세웁니다.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <Link
              href="/"
              className="inline-block mt-12 border border-[#c9a962] text-[#c9a962] px-10 py-4 text-sm tracking-[3px] uppercase hover:bg-[#c9a962] hover:text-black transition-all duration-500"
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
