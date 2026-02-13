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
      <Link href={`/magazine/${article.id}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <span className="inline-block text-xs tracking-[0.15em] uppercase text-white bg-teal px-2.5 py-1 rounded-sm">{article.categoryLabel}</span>
          <h3 className="mt-3 font-serif text-lg text-gray-900 group-hover:text-teal transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
          <p className="mt-3 text-xs text-gray-400">{article.date}</p>
        </div>
      </Link>
    </motion.div>
  );
}
