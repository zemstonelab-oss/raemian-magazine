'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Article } from '@/data/articles';

export default function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/magazine/${article.id}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/3] bg-dark-gray">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
        </div>
        <div className="mt-5">
          <span className="text-xs tracking-[0.2em] uppercase text-gold">{article.categoryLabel}</span>
          <h3 className="mt-2 font-serif text-lg text-gray-100 group-hover:text-gold transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
          <p className="mt-3 text-xs text-gray-600">{article.date}</p>
        </div>
      </Link>
    </motion.div>
  );
}
