import Image from "next/image";

const R = "#e51e2a";

const projects = [
  { title: "Toko Online Batik Nusantara",   cat: "Web Dev",   img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80", year: "2025" },
  { title: "Kampanye Digital Brand Kuliner", cat: "Marketing", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80", year: "2024" },
  { title: "Rebranding Startup Fintech",     cat: "Branding",  img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80", year: "2024" },
  { title: "Landing Page Properti Premium",  cat: "Web Dev",   img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80", year: "2025" },
  { title: "SEO Platform Edukasi",           cat: "SEO",       img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80", year: "2024" },
  { title: "Dashboard Analytics UMKM",       cat: "Web App",   img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80", year: "2025" },
];

export default function Portofolio() {
  return (
    <section id="portofolio" style={{ background: "#fff", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="p-6 sm:p-8" style={{ borderRight: "2px solid #0a0a0a" }}>
            <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>Portofolio</span>
          </div>
          <div className="col-span-1 sm:col-span-3 p-6 sm:p-8 flex items-center justify-between">
            <h2 className="font-black" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>Karya Terpilih</h2>
            <a href="#kontak" className="hidden sm:block font-bold text-xs uppercase tracking-widest underline underline-offset-4"
              style={{ color: R, textDecoration: "none", borderBottom: `1.5px solid ${R}`, letterSpacing: "0.1em" }}>
              Diskusi Project →
            </a>
          </div>
        </div>

        {/* Featured */}
        <div style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="grid lg:grid-cols-2" style={{ height: "400px" }}>
            <div className="relative" style={{ borderRight: "2px solid #0a0a0a" }}>
              <Image src={projects[0].img} alt={projects[0].title} fill className="object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-between" style={{ background: "#0a0a0a" }}>
              <div>
                <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>
                  {projects[0].cat} · {projects[0].year}
                </span>
              </div>
              <div>
                <h3 className="font-black text-3xl sm:text-4xl text-white mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                  {projects[0].title}
                </h3>
                <a href="#kontak" className="font-black text-xs uppercase tracking-widest px-6 py-3 transition-all hover:opacity-75 inline-block"
                  style={{ background: R, color: "#fff", textDecoration: "none", letterSpacing: "0.1em" }}>
                  Diskusi Serupa →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((p, i) => (
            <div key={p.title} className="group"
              style={{ borderRight: (i + 1) % 3 !== 0 ? "2px solid #0a0a0a" : "none", borderBottom: "2px solid #0a0a0a" }}>
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(10,10,10,0.7)" }}>
                  <div className="absolute bottom-4 left-4">
                    <div className="font-black text-white text-sm">{p.title}</div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between" style={{ borderTop: "2px solid #0a0a0a" }}>
                <div>
                  <div className="font-black text-sm">{p.title}</div>
                  <div className="font-bold text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.1em" }}>{p.cat} · {p.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
