"use client";
const R = "#e51e2a";

const steps = [
  { no: "01", title: "Konsultasi",  desc: "Kami pelajari bisnis dan tujuan Anda secara mendalam melalui sesi konsultasi gratis tanpa komitmen." },
  { no: "02", title: "Strategi",    desc: "Tim kami menyusun roadmap, timeline, dan proposal detail yang sesuai budget dan target Anda." },
  { no: "03", title: "Eksekusi",    desc: "Proyek dikerjakan oleh tim berpengalaman dengan update progress berkala setiap minggu." },
  { no: "04", title: "Revisi",      desc: "Anda punya hak revisi penuh hingga hasilnya benar-benar sesuai ekspektasi dan memuaskan." },
  { no: "05", title: "Launch",      desc: "Proyek diluncurkan dan kami tetap mendampingi selama periode support yang disepakati." },
];

export default function Proses() {
  return (
    <section style={{ background: "#0a0a0a", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid rgba(255,255,255,0.12)" }}>
          <div className="p-6 sm:p-8" style={{ borderRight: "2px solid rgba(255,255,255,0.12)" }}>
            <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>Proses</span>
          </div>
          <div className="col-span-1 sm:col-span-3 p-6 sm:p-8 flex items-center">
            <h2 className="font-black text-white rv clip" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>
              Transparan & Terstruktur
            </h2>
          </div>
        </div>
        {steps.map((s, i) => (
          <div key={s.no} className="grid grid-cols-12 py-6 sm:py-8 rv up" style={{ transitionDelay: (i * 0.1) + "s" }}
            style={{ borderBottom: i < steps.length - 1 ? "2px solid rgba(255,255,255,0.08)" : "none" }}>
            <div className="col-span-2 sm:col-span-1 px-2 sm:px-6">
              <span className="font-black text-xl sm:text-3xl" style={{ color: R, lineHeight: "1" }}>{s.no}</span>
            </div>
            <div className="col-span-10 sm:col-span-5 px-2 sm:px-4">
              <h3 className="font-black text-2xl sm:text-3xl text-white leading-none mb-2" style={{ letterSpacing: "-0.03em" }}>
                {s.title.toUpperCase()}
              </h3>
            </div>
            <div className="col-span-12 col-start-1 sm:col-span-6 sm:col-start-7 px-4 sm:px-4 mt-2 sm:mt-0 flex items-start">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
