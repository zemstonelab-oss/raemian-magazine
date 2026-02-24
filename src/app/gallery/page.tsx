'use client';

import { motion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-teal mb-3">Visual Archive</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-gray-900 mb-16">Gallery</h1>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className={`relative ${
                item.aspect === 'portrait' ? 'aspect-[3/4]' :
                item.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
              }`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:from-transparent md:via-transparent md:bg-black/0 md:group-hover:bg-black/40 transition-all duration-500 flex items-end p-4 md:p-6">
                  <div className="translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.15em] uppercase text-[#c9a962]">{item.category}</span>
                    <p className="text-white font-serif text-base md:text-lg mt-1">{item.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
