import Image from "next/image";

const projects = [
  { title: "Toko Online Batik Nusantara", cat: "Web Development", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80", tag: "E-Commerce" },
  { title: "Kampanye Digital Brand Kuliner", cat: "Digital Marketing", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80", tag: "Marketing" },
  { title: "Rebranding Startup Fintech", cat: "Branding & Desain", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", tag: "Branding" },
  { title: "Landing Page Properti Premium", cat: "Web Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", tag: "Landing Page" },
  { title: "Strategi SEO Platform Edukasi", cat: "Optimasi & SEO", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80", tag: "SEO" },
  { title: "Dashboard Analytics UMKM", cat: "Web Development", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tag: "Web App" },
];

const tagColor = {
  "E-Commerce": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Marketing": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "Branding": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "Landing Page": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "SEO": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Web App": "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

export default function Portofolio() {
  return (
    <section id="portofolio" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Hasil Kerja Kami</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Portofolio <span className="text-cyan-400">Terpilih</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Beberapa proyek terbaik yang telah kami kerjakan untuk klien dari berbagai industri
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="relative h-48">
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all" />
                <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${tagColor[p.tag]}`}>
                  {p.tag}
                </span>
              </div>
              <div className="p-5 bg-slate-900">
                <p className="text-cyan-400 text-xs font-medium mb-1">{p.cat}</p>
                <h3 className="text-white font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
