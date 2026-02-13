'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ArticleCard from '@/components/ArticleCard';
import { articles, categoryMap, Category } from '@/data/articles';

type FilterKey = 'all' | Category;

export default function MagazinePage() {
  const [filter, setFilter] = useState<FilterKey>('all');

  const filtered = filter === 'all' ? articles : articles.filter((a) => a.category === filter);

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Stories & Articles</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-12">Magazine</h1>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          {Object.entries(categoryMap).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key as FilterKey)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                filter === key
                  ? 'border-gold text-gold bg-gold/10'
                  : 'border-white/10 text-gray-400 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-20">해당 카테고리의 아티클이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
