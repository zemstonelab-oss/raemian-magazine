'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

export default function Home() {
  const featured = articles.find((a) => a.featured) || articles[0];
  const latest = articles.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/apgujeong/DJI_0795-편집-2.jpg"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Clean hero - image only */}

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

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
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="100vw"
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
