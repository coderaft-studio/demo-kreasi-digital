export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="text-white font-bold text-2xl mb-3">
              Kreasi<span className="text-cyan-400">Digital</span>™
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Digital agency terpercaya yang membantu bisnis Indonesia tumbuh dan berkembang di era digital.
            </p>
            <div className="flex gap-3">
              {["in", "ig", "tw", "yt"].map((s) => (
                <a key={s} href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 rounded-lg flex items-center justify-center text-xs font-bold transition-all uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {["Web Development", "Digital Marketing", "Branding & Desain", "Konsultasi Strategi", "SEO & Optimasi"].map((l) => (
                <li key={l}><a href="#layanan" className="hover:text-cyan-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Jakarta Selatan</li>
              <li>📞 +62 812-3456-7890</li>
              <li>📧 hello@kreasdigital.id</li>
              <li className="pt-2">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold inline-block transition-colors">
                  Chat WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Kreasi Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
