'use client';

import { motion } from 'framer-motion';
import { Article } from '@/data/articles';

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl mx-auto px-6 py-20"
    >
      {article.content.map((paragraph, i) => (
        <p key={i} className="text-gray-600 leading-[2] text-base md:text-lg mb-8 font-light">
          {paragraph}
        </p>
      ))}
    </motion.article>
  );
}
