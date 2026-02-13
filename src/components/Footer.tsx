export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <p className="font-serif text-xl tracking-[0.3em] text-gold mb-4">RAEMIAN</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Beyond Expectations<br />
              래미안이 전하는 프리미엄 라이프스타일
            </p>
          </div>
          <div className="flex gap-12 text-sm text-gray-500">
            <div className="flex flex-col gap-3">
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Menu</span>
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <a href="/magazine" className="hover:text-gold transition-colors">Magazine</a>
              <a href="/about" className="hover:text-gold transition-colors">About</a>
              <a href="/gallery" className="hover:text-gold transition-colors">Gallery</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Follow</span>
              <span>Instagram</span>
              <span>YouTube</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2026 Samsung C&T — RAEMIAN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
