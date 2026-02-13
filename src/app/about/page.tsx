'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const timeline = [
  { year: '2000', event: '래미안 브랜드 런칭', desc: '삼성물산 주거 브랜드 래미안 탄생' },
  { year: '2004', event: '래미안 갤러리 오픈', desc: '국내 최초 아파트 브랜드 전시관' },
  { year: '2009', event: '래미안 퍼스티지 분양', desc: '반포 재건축의 랜드마크' },
  { year: '2015', event: '래미안 블레스티지', desc: '프리미엄 주거의 새로운 기준' },
  { year: '2020', event: '래미안 원베일리', desc: '한강변 최고급 주거 단지' },
  { year: '2024', event: '래미안 원펜타스', desc: '새로운 프리미엄의 정점' },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Brand Story</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-8">About Raemian</h1>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            래미안은 2000년 런칭 이래 대한민국 프리미엄 주거의 기준을 만들어 왔습니다.
            &quot;Beyond Expectations&quot; — 기대 이상의 가치를 통해 삶의 품격을 높여갑니다.
          </p>
        </motion.div>
      </div>

      {/* Philosophy */}
      <section className="bg-dark-gray py-24 mb-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Design', desc: '세계적 건축가와 함께 만드는 시대를 초월한 디자인' },
            { title: 'Quality', desc: '삼성물산의 기술력으로 완성하는 최고 품질의 주거 공간' },
            { title: 'Community', desc: '입주민의 라이프스타일을 풍요롭게 하는 커뮤니티' },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-gold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">History</p>
          <h2 className="font-serif text-3xl text-white mb-16">연혁</h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-dark border-2 border-gold flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <div className="flex-1">
                  <span className="text-gold font-serif text-lg">{item.year}</span>
                  <h3 className="text-white font-medium mt-1">{item.event}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
