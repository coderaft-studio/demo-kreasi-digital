"use client";
const R = "#e51e2a";

const layanan = [
  { no: "01", title: "Web Development",     desc: "Website profesional, landing page, dan web app custom yang cepat, aman, dan mobile-friendly.", tags: ["Next.js", "React", "Laravel"] },
  { no: "02", title: "Digital Marketing",   desc: "Google Ads, Meta Ads, SEO, dan content marketing dengan strategi yang terukur dan ROI nyata.", tags: ["Google Ads", "SEO", "Meta Ads"] },
  { no: "03", title: "Branding & Desain",   desc: "Identitas merek yang kuat: logo, brand guideline, UI/UX, dan materi pemasaran.", tags: ["Logo", "UI/UX", "Brand Guide"] },
  { no: "04", title: "Konsultasi Strategi", desc: "Analisis bisnis mendalam dan roadmap digital yang disesuaikan dengan target Anda.", tags: ["Analitik", "Roadmap", "KPI"] },
  { no: "05", title: "Manajemen Konten",    desc: "Kelola media sosial dan konten digital secara konsisten untuk meningkatkan engagement.", tags: ["Instagram", "TikTok", "Blog"] },
  { no: "06", title: "Optimasi & SEO",      desc: "Perbaikan performa website dan peringkat Google agar bisnis mudah ditemukan.", tags: ["SEO", "Core Web Vitals", "Analytics"] },
];

export default function Layanan() {
  return (
    <section id="layanan" style={{ background: "#fff", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="col-span-1 p-6 sm:p-8" style={{ borderRight: "2px solid #0a0a0a" }}>
            <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>Layanan</span>
          </div>
          <div className="col-span-1 sm:col-span-3 p-6 sm:p-8 flex items-center">
            <h2 className="font-black" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>
              Solusi Digital Lengkap untuk Bisnis Anda
            </h2>
          </div>
        </div>

        {/* Services list */}
        {layanan.map((l, i) => (
          <div key={l.no} className="grid grid-cols-12 items-start py-6 sm:py-8 cursor-pointer"
            style={{ borderBottom: "2px solid #0a0a0a", transition: "background 0.15s, color 0.15s", color: "#0a0a0a" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#0a0a0a"; e.currentTarget.style.color = "#ffffff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0a0a0a"; }}>
            <div className="col-span-1 px-4 sm:px-6 pt-1">
              <span className="font-black text-sm" style={{ color: R }}>{l.no}</span>
            </div>
            <div className="col-span-11 sm:col-span-4 px-2 sm:px-4">
              <h3 className="font-black text-lg sm:text-xl mb-2 leading-tight" style={{ letterSpacing: "-0.02em" }}>{l.title}</h3>
            </div>
            <div className="col-span-11 col-start-2 sm:col-span-5 sm:col-start-6 px-2 sm:px-4">
              <p className="text-sm leading-relaxed" style={{ opacity: 0.6 }}>{l.desc}</p>
            </div>
            <div className="col-span-11 col-start-2 sm:col-span-2 sm:col-start-11 px-2 sm:px-4 mt-2 sm:mt-0 flex flex-wrap gap-1.5">
              {l.tags.map(t => (
                <span key={t} className="text-xs font-bold uppercase px-2 py-1" style={{ border: "1.5px solid currentColor", opacity: 0.45, letterSpacing: "0.06em" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
