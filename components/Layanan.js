const layanan = [
  { icon: "🌐", title: "Web Development", desc: "Website profesional, landing page, dan web app custom yang cepat, aman, dan mobile-friendly.", tags: ["Next.js", "React", "Laravel"] },
  { icon: "📱", title: "Digital Marketing", desc: "Strategi pemasaran digital terukur: Google Ads, Meta Ads, SEO, dan content marketing.", tags: ["Google Ads", "Meta Ads", "SEO"] },
  { icon: "🎨", title: "Branding & Desain", desc: "Identitas merek yang kuat: logo, brand guideline, desain UI/UX, dan materi pemasaran.", tags: ["Logo", "UI/UX", "Brand Guide"] },
  { icon: "📊", title: "Konsultasi Strategi", desc: "Analisis bisnis mendalam dan roadmap digital yang disesuaikan dengan target dan anggaran Anda.", tags: ["Analitik", "Roadmap", "KPI"] },
  { icon: "📝", title: "Manajemen Konten", desc: "Kelola media sosial, blog, dan konten digital secara konsisten untuk meningkatkan engagement.", tags: ["Instagram", "TikTok", "Blog"] },
  { icon: "⚡", title: "Optimasi & SEO", desc: "Tingkatkan performa website dan peringkat di Google agar bisnis Anda mudah ditemukan.", tags: ["SEO", "Core Web Vitals", "Analytics"] },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Apa yang Kami Lakukan</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Layanan <span className="text-cyan-400">Unggulan</span> Kami
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Solusi digital lengkap untuk bisnis Anda — dari nol hingga tumbuh
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layanan.map((l) => (
            <div key={l.title}
              className="bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl p-7 group transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{l.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {l.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{l.desc}</p>
              <div className="flex flex-wrap gap-2">
                {l.tags.map((t) => (
                  <span key={t} className="bg-slate-700/50 text-cyan-300 text-xs px-3 py-1 rounded-full border border-slate-600/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
