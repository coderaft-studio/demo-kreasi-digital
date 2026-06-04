const reviews = [
  { name: "Rini Handayani", role: "CEO, Toko Online Rini", avatar: "RH", color: "bg-cyan-600",
    text: "Kreasi Digital benar-benar mengubah bisnis saya. Website baru kami menghasilkan 3x lebih banyak leads dalam 2 bulan pertama. Tim mereka sangat responsif dan profesional." },
  { name: "Budi Prasetyo", role: "Founder, Startup Fintech", avatar: "BP", color: "bg-violet-600",
    text: "Rebranding yang mereka kerjakan luar biasa. Brand identity kami sekarang terlihat jauh lebih premium dan dipercaya investor. ROI-nya nyata dan terukur." },
  { name: "Sinta Maharani", role: "Direktur, Klinik Kecantikan", avatar: "SM", color: "bg-emerald-600",
    text: "Google Ads yang mereka kelola menurunkan cost per lead kami hingga 40%. Mereka benar-benar paham strategi digital, bukan sekedar vendor biasa." },
];

export default function Testimoni() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Kata Klien</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Dipercaya <span className="text-cyan-400">150+ Bisnis</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="text-white font-bold text-xl">4.9</span>
            <span className="text-slate-400 text-sm">(120+ ulasan)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl p-7 transition-all">
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm italic">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`${r.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-slate-400 text-xs">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
