const paket = [
  {
    nama: "Starter",
    harga: "3.500.000",
    per: "/ proyek",
    desc: "Cocok untuk bisnis yang baru mulai go digital",
    highlight: false,
    fitur: [
      "Landing page 1 halaman",
      "Desain profesional responsif",
      "Optimasi SEO dasar",
      "Integrasi WhatsApp & Google Maps",
      "Hosting setup & domain",
      "1 bulan support",
    ],
    cta: "Mulai Sekarang",
  },
  {
    nama: "Growth",
    harga: "8.500.000",
    per: "/ proyek",
    desc: "Solusi lengkap untuk bisnis yang ingin berkembang pesat",
    highlight: true,
    fitur: [
      "Website multi-halaman (5–10 hal)",
      "Desain custom UI/UX premium",
      "SEO on-page & off-page",
      "Integrasi Google Analytics",
      "3 bulan manajemen konten",
      "Iklan Google/Meta setup",
      "3 bulan support prioritas",
    ],
    cta: "Paling Populer",
  },
  {
    nama: "Enterprise",
    harga: "Custom",
    per: "hubungi kami",
    desc: "Solusi enterprise skala besar & kebutuhan khusus",
    highlight: false,
    fitur: [
      "Web app / platform custom",
      "Strategi digital marketing menyeluruh",
      "Dedicated account manager",
      "SLA & laporan bulanan",
      "Integrasi API & sistem pihak ketiga",
      "Support & maintenance 12 bulan",
    ],
    cta: "Diskusi Kebutuhan",
  },
];

export default function Harga() {
  return (
    <section id="harga" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Investasi</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Paket <span className="text-cyan-400">Harga</span> Transparan
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Harga jelas tanpa biaya tersembunyi. Pilih paket yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {paket.map((p) => (
            <div key={p.nama}
              className={`rounded-2xl p-8 border relative ${
                p.highlight
                  ? "bg-cyan-500 border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105"
                  : "bg-slate-800/50 border-slate-700/50"
              }`}>
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-950 text-cyan-400 text-xs font-bold px-4 py-1.5 rounded-full border border-cyan-500">
                  ⭐ TERPOPULER
                </div>
              )}
              <div className={`text-sm font-semibold mb-1 ${p.highlight ? "text-slate-900" : "text-cyan-400"}`}>
                {p.nama}
              </div>
              <div className={`text-4xl font-bold mb-1 ${p.highlight ? "text-slate-950" : "text-white"}`}>
                {p.harga === "Custom" ? "Custom" : `Rp ${p.harga}`}
              </div>
              <div className={`text-sm mb-3 ${p.highlight ? "text-slate-800" : "text-slate-500"}`}>{p.per}</div>
              <p className={`text-sm mb-6 leading-relaxed ${p.highlight ? "text-slate-800" : "text-slate-400"}`}>
                {p.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {p.fitur.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={`mt-0.5 flex-shrink-0 ${p.highlight ? "text-slate-900" : "text-cyan-400"}`}>✓</span>
                    <span className={`text-sm ${p.highlight ? "text-slate-900" : "text-slate-300"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontak"
                className={`block text-center py-3 px-6 rounded-xl font-bold transition-all ${
                  p.highlight
                    ? "bg-slate-950 text-cyan-400 hover:bg-slate-900"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950"
                }`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
