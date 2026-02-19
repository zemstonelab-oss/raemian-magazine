'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import FadeIn from '@/components/motion/FadeIn';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="text-gray-900">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[#2a9d8f] text-xs tracking-[6px] uppercase mb-6 font-heading">
            Raemian Projects
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white mb-4">
            프로젝트
          </h1>
          <p className="text-white/60 text-sm tracking-[2px] font-display font-light">
            래미안이 만들어가는 프리미엄 주거 공간
          </p>
        </motion.div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1} duration={0.8}>
              <Link
                href={`/projects/${project.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-white text-xs tracking-[2px] uppercase font-display font-medium px-3 py-1.5 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-gray-900 group-hover:text-[#2a9d8f] transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-400 tracking-[1px] font-display mb-2">
                  {project.nameEn}
                </p>
                <p className="text-sm text-gray-500">{project.location}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
