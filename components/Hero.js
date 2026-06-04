export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Digital Agency #1 Indonesia
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transformasi
            <span className="text-cyan-400 block">Digital</span>
            untuk Bisnis Anda
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Kami hadir untuk membantu bisnis Anda tumbuh di era digital — mulai dari
            website, branding, digital marketing, hingga strategi pertumbuhan yang terukur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontak"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center">
              Konsultasi Gratis →
            </a>
            <a href="#portofolio"
              className="border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center">
              Lihat Portofolio
            </a>
          </div>
        </div>

        {/* Stats card */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "150+", label: "Proyek Selesai", icon: "🚀" },
            { num: "98%", label: "Klien Puas", icon: "⭐" },
            { num: "5+", label: "Tahun Pengalaman", icon: "🏆" },
            { num: "24/7", label: "Support Aktif", icon: "💬" },
          ].map((s) => (
            <div key={s.label}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-800/50 rounded-2xl p-6 transition-colors">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">{s.num}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
