const steps = [
  { num: "01", icon: "🔍", title: "Konsultasi & Discovery", desc: "Kami pelajari bisnis, target pasar, dan tujuan Anda secara mendalam melalui sesi konsultasi gratis." },
  { num: "02", icon: "📐", title: "Strategi & Perencanaan", desc: "Tim kami menyusun roadmap, timeline, dan proposal detail yang sesuai budget dan target Anda." },
  { num: "03", icon: "⚙️", title: "Eksekusi & Pengerjaan", desc: "Proyek dikerjakan oleh tim berpengalaman dengan update progress berkala setiap minggu." },
  { num: "04", icon: "✅", title: "Review & Revisi", desc: "Anda punya hak revisi penuh hingga hasilnya benar-benar sesuai ekspektasi." },
  { num: "05", icon: "🚀", title: "Launch & Support", desc: "Proyek diluncurkan dan kami tetap mendampingi selama periode support yang disepakati." },
];

export default function Proses() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Cara Kerja</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Proses <span className="text-cyan-400">Transparan</span> & Terstruktur
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Setiap proyek dijalankan dengan metodologi yang terbukti menghasilkan output terbaik
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-800/50 to-transparent" />
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="w-20 h-20 bg-slate-900 border-2 border-slate-700 hover:border-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 transition-colors relative z-10">
                  {s.icon}
                </div>
                <div className="text-cyan-400 font-bold text-xs mb-2 tracking-widest">{s.num}</div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
