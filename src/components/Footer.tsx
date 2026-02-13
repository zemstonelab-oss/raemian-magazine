export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="22" height="26" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="7" height="32" fill="#b0a890" />
                <rect x="10" y="0" width="7" height="32" fill="#2a9d8f" />
                <rect x="20" y="0" width="7" height="32" fill="#2a9d8f" />
              </svg>
              <span className="font-display text-xl font-light tracking-[0.4em] text-gray-900">RAEMIAN</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              <span className="font-heading italic">Beyond Expectations</span><br />
              래미안이 전하는 프리미엄 라이프스타일
            </p>
          </div>
          <div className="flex gap-12 text-sm text-gray-500">
            <div className="flex flex-col gap-3">
              <span className="text-teal text-xs tracking-[0.2em] uppercase mb-1">Menu</span>
              <a href="/" className="hover:text-teal transition-colors">Home</a>
              <a href="/magazine" className="hover:text-teal transition-colors">Magazine</a>
              <a href="/about" className="hover:text-teal transition-colors">About</a>
              <a href="/gallery" className="hover:text-teal transition-colors">Gallery</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-teal text-xs tracking-[0.2em] uppercase mb-1">Follow</span>
              <span>Instagram</span>
              <span>YouTube</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2026 Samsung C&T — RAEMIAN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
