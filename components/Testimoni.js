const R = "#e51e2a";

const reviews = [
  { no: "01", name: "Rini Handayani", role: "CEO, Toko Online Rini",       result: "+300% Leads",
    text: "Website baru kami menghasilkan 3× lebih banyak leads dalam 2 bulan pertama. Tim Kreasi Digital sangat responsif dan profesional." },
  { no: "02", name: "Budi Prasetyo",  role: "Founder, Startup Fintech",     result: "Series A Funded",
    text: "Rebranding yang mereka kerjakan luar biasa. Brand identity kami jauh lebih premium dan dipercaya investor." },
  { no: "03", name: "Sinta Maharani", role: "Direktur, Klinik Kecantikan",  result: "-40% Cost/Lead",
    text: "Google Ads yang mereka kelola menurunkan cost per lead kami hingga 40%. Strategi yang benar-benar terukur." },
];

export default function Testimoni() {
  return (
    <section style={{ background: "#fff", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="p-6 sm:p-8" style={{ borderRight: "2px solid #0a0a0a" }}>
            <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>Testimoni</span>
          </div>
          <div className="col-span-1 sm:col-span-3 p-6 sm:p-8 flex items-center justify-between">
            <h2 className="font-black" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>Kata Klien Kami</h2>
            <div className="hidden sm:flex items-center gap-2">
              <span style={{ color: "#f59e0b", fontSize: "20px" }}>★★★★★</span>
              <span className="font-black text-xl">4.9</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={r.no} className="p-8 sm:p-10 flex flex-col justify-between"
              style={{
                background: i === 1 ? "#0a0a0a" : "#fff",
                color: i === 1 ? "#fff" : "#0a0a0a",
                borderRight: i < 2 ? "2px solid #0a0a0a" : "none",
                borderBottom: "2px solid #0a0a0a",
                minHeight: "320px"
              }}>
              <div>
                <div className="font-black text-4xl sm:text-6xl leading-none mb-8" style={{ color: R, fontFamily: "serif" }}>&ldquo;</div>
                <div className="inline-block font-black text-xs uppercase tracking-widest px-3 py-1.5 mb-6"
                  style={{ background: R, color: "#fff", letterSpacing: "0.08em" }}>
                  {r.result}
                </div>
                <p className="text-base leading-relaxed" style={{ opacity: 0.65 }}>{r.text}</p>
              </div>
              <div className="pt-6 mt-6" style={{ borderTop: `2px solid ${i === 1 ? "rgba(255,255,255,0.1)" : "#0a0a0a"}` }}>
                <div className="font-black text-sm">{r.name}</div>
                <div className="font-bold text-xs uppercase tracking-widest mt-1" style={{ color: R, letterSpacing: "0.08em" }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
