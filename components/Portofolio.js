"use client";
import WipeHeading from "@/components/WipeHeading";
import Image from "next/image";

const R = "#e51e2a";

const projects = [
  { title: "Toko Online Batik Nusantara",   cat: "Web Dev",   img: "/images/port1.jpg", year: "2025" },
  { title: "Kampanye Digital Brand Kuliner", cat: "Marketing", img: "/images/port2.jpg", year: "2024" },
  { title: "Rebranding Startup Fintech",     cat: "Branding",  img: "/images/port3.jpg", year: "2024" },
  { title: "Landing Page Properti Premium",  cat: "Web Dev",   img: "/images/port4.jpg", year: "2025" },
  { title: "SEO Platform Edukasi",           cat: "SEO",       img: "/images/port5.jpg", year: "2024" },
  { title: "Dashboard Analytics UMKM",       cat: "Web App",   img: "/images/port6.jpg", year: "2025" },
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
            <h2 className="font-black" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>
              <WipeHeading text="Karya Terpilih" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em", fontWeight:900 }}/>
            </h2>
            <a href="#kontak" className="hidden sm:block font-bold text-xs uppercase tracking-widest underline underline-offset-4"
              style={{ color: R, textDecoration: "none", borderBottom: `1.5px solid ${R}`, letterSpacing: "0.1em" }}>
              Diskusi Project →
            </a>
          </div>
        </div>

        {/* Featured — crash from above */}
        <div className="crash-in" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="grid lg:grid-cols-2" style={{ height: "400px" }}>
            <div className="relative" style={{ borderRight: "2px solid #0a0a0a" }}>
              <Image unoptimized src={projects[0].img} alt={projects[0].title} fill className="object-cover" />
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

        {/* Grid — converge from alternating sides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((p, i) => (
            <div key={p.title}
              className={"group " + (i % 2 === 0 ? "conv-left" : "conv-right")}
              style={{
                borderRight: (i + 1) % 3 !== 0 ? "2px solid #0a0a0a" : "none",
                borderBottom: "2px solid #0a0a0a",
                '--delay': (i * 0.12) + 's',
              }}>
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <Image unoptimized src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
