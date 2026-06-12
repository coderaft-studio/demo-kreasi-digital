const R = "#e51e2a";

const paket = [
  { no: "01", nama: "Starter",    harga: "3.500.000", desc: "Mulai go digital", fitur: ["Landing page 1 halaman", "Desain responsif", "SEO dasar", "WhatsApp & Maps", "1 bulan support"] },
  { no: "02", nama: "Growth",     harga: "8.500.000", desc: "Solusi lengkap", fitur: ["Website 5–10 halaman", "UI/UX premium", "SEO on & off page", "Analytics setup", "Google/Meta Ads", "3 bulan support"], featured: true },
  { no: "03", nama: "Enterprise", harga: "Custom",     desc: "Skala besar",   fitur: ["Web app custom", "Strategi menyeluruh", "Dedicated manager", "SLA & laporan", "API integration", "Support 12 bulan"] },
];

export default function Harga() {
  return (
    <section id="harga" style={{ background: "#fff", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="p-6 sm:p-8" style={{ borderRight: "2px solid #0a0a0a" }}>
            <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>Investasi</span>
          </div>
          <div className="col-span-1 sm:col-span-3 p-6 sm:p-8 flex items-center">
            <h2 className="font-black rv clip" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>
              Harga Jelas, Tanpa Kejutan
            </h2>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {paket.map((p, i) => (
            <div key={p.no} className="flex flex-col rv scale" style={{ transitionDelay: (i * 0.15) + "s" }}
              style={{
                background: p.featured ? "#0a0a0a" : "#fff",
                color: p.featured ? "#fff" : "#0a0a0a",
                borderRight: i < 2 ? "2px solid #0a0a0a" : "none",
                borderBottom: "2px solid #0a0a0a",
              }}>
              {/* Top */}
              <div className="p-7 sm:p-8" style={{ borderBottom: `2px solid ${p.featured ? "rgba(255,255,255,0.12)" : "#0a0a0a"}` }}>
                {p.featured && (
                  <div className="font-black text-xs uppercase tracking-widest px-3 py-1.5 mb-4 inline-block"
                    style={{ background: R, color: "#fff", letterSpacing: "0.08em" }}>⭐ Terpopuler</div>
                )}
                <div className="font-black text-xs uppercase tracking-widest mb-2" style={{ color: R, letterSpacing: "0.12em" }}>
                  {p.no} · {p.nama}
                </div>
                <div className="font-black leading-none mb-1" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.04em" }}>
                  {p.harga === "Custom" ? "Custom" : `Rp ${p.harga}`}
                </div>
                <div className="font-bold text-xs uppercase tracking-widest mt-2" style={{ opacity: 0.35, letterSpacing: "0.1em" }}>
                  {p.harga === "Custom" ? "hubungi kami" : "per proyek"}
                </div>
              </div>
              {/* Features */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <ul className="space-y-3 mb-8">
                  {p.fitur.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span style={{ color: R, fontWeight: 900 }}>✓</span>
                      <span style={{ opacity: 0.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#kontak"
                  className="block text-center font-black text-xs uppercase tracking-widest py-4 transition-all hover:opacity-75"
                  style={{ background: p.featured ? R : "#0a0a0a", color: "#fff", textDecoration: "none", letterSpacing: "0.1em" }}>
                  {p.nama === "Enterprise" ? "Hubungi Kami" : "Mulai Sekarang"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
