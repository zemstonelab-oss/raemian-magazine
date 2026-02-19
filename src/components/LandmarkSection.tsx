'use client';

import FadeIn from '@/components/motion/FadeIn';
import CountUp from '@/components/motion/CountUp';

const landmarks = [
  { name: '부르즈 칼리파', location: '두바이', height: 828, img: '/images/landmarks/burj-khalifa-04.jpg' },
  { name: '메르데카 118', location: '쿠알라룸푸르', height: 679, img: '/images/landmarks/merdeka-01.jpg' },
  { name: '타이베이 101', location: '타이베이', height: 508, img: '/images/landmarks/taipei101-03.jpg' },
  { name: '라흐타 센터', location: '상트페테르부르크', height: 462, img: '/images/landmarks/lakhta-02.jpg' },
  { name: '페트로나스 타워', location: '쿠알라룸푸르', height: 452, img: '/images/landmarks/petronas-03.jpg' },
];

export default function LandmarkSection() {
  return (
    <section className="min-h-screen py-32 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#2a9d8f] text-xs tracking-[5px] uppercase mb-4 font-heading">Global Landmarks</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 text-[#1a1a1a]">
            삼성이 건설한<br />세계적 랜드마크
          </h2>
          <p className="text-[#666] text-sm max-w-xl mx-auto">
            삼성물산 건설부문은 세계 최고층 빌딩을 포함한 글로벌 랜드마크를 건설해온
            대한민국 대표 건설사입니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {landmarks.map((l, i) => (
            <FadeIn key={l.name} delay={i * 0.12} duration={1}>
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
                <div className="p-4 text-center">
                  <p className="text-[#2a9d8f] font-serif text-2xl md:text-3xl font-light">
                    <CountUp to={l.height} suffix="m" duration={2} />
                  </p>
                  <p className="text-[#1a1a1a] text-sm mt-1 font-medium">{l.name}</p>
                  <p className="text-[#999] text-xs">{l.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
