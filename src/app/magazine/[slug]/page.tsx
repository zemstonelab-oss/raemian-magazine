import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import ArticleContent from './ArticleContent';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.id === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-4xl">
          <span className="text-xs tracking-[0.2em] uppercase text-[#c9a962]">{article.categoryLabel}</span>
          <h1 className="font-serif text-3xl md:text-5xl text-white mt-4 mb-3 leading-tight">{article.title}</h1>
          <p className="text-gray-200 text-sm mb-4">{article.subtitle}</p>
          <div className="flex items-center gap-4 text-xs text-gray-300">
            <span>{article.author}</span>
            <span className="w-px h-3 bg-gray-400" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <ArticleContent article={article} />

      {/* Related Articles */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h3 className="font-serif text-2xl text-gray-900 mb-10">관련 아티클</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((r) => (
            <Link key={r.id} href={`/magazine/${r.id}`} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
              </div>
              <p className="text-xs tracking-[0.15em] uppercase text-teal mt-4">{r.categoryLabel}</p>
              <p className="font-serif text-base text-gray-800 mt-1 group-hover:text-teal transition-colors">{r.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
