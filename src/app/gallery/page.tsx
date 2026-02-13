'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-gold mb-3">Visual Archive</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-white mb-16">Gallery</h1>
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
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              <div className={`relative ${
                item.aspect === 'portrait' ? 'aspect-[3/4]' :
                item.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
              }`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs tracking-[0.15em] uppercase text-gold">{item.category}</span>
                    <p className="text-white font-serif text-lg mt-1">{item.title}</p>
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
