"use client";
import { useState } from "react";

export default function Kontak() {
  const [form, setForm] = useState({ nama: "", email: "", bisnis: "", layanan: "", pesan: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Kreasi Digital!\n\nNama: ${form.nama}\nEmail: ${form.email}\nBisnis: ${form.bisnis}\nLayanan: ${form.layanan}\n\nPesan:\n${form.pesan}`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="kontak" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Mulai Sekarang</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap <span className="text-cyan-400">Berkembang</span> Bersama?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Konsultasi pertama kami <strong className="text-white">GRATIS</strong>. Ceritakan kebutuhan bisnis Anda
            dan kami akan siapkan proposal dalam 24 jam.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: "📞", label: "WhatsApp", val: "+62 812-3456-7890" },
              { icon: "📧", label: "Email", val: "hello@kreasdigital.id" },
              { icon: "📍", label: "Lokasi", val: "Jakarta Selatan, DKI Jakarta" },
              { icon: "🕙", label: "Jam Kerja", val: "Senin–Jumat, 09.00–18.00 WIB" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-cyan-400 font-bold text-sm mb-2">💡 Garansi Kami</div>
            <p className="text-slate-400 text-sm">Jika Anda tidak puas dengan hasil kerja kami dalam 30 hari pertama, kami akan refund penuh tanpa pertanyaan.</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Pesan Terkirim!</h3>
              <p className="text-slate-400">Kami akan menghubungi Anda dalam 24 jam.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-cyan-400 underline text-sm">Kirim pesan lagi</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Form Konsultasi Gratis</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "nama", label: "Nama Lengkap *", placeholder: "Budi Santoso", type: "text" },
                  { name: "email", label: "Email *", placeholder: "budi@email.com", type: "email" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-medium text-slate-400 mb-1">{f.label}</label>
                    <input name={f.name} type={f.type} required value={form[f.name]} onChange={handle}
                      placeholder={f.placeholder}
                      className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Nama Bisnis</label>
                <input name="bisnis" value={form.bisnis} onChange={handle} placeholder="PT Maju Bersama"
                  className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Layanan yang Dibutuhkan</label>
                <select name="layanan" value={form.layanan} onChange={handle}
                  className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all">
                  <option value="">Pilih layanan...</option>
                  {["Web Development", "Digital Marketing", "Branding & Desain", "Konsultasi Strategi", "Manajemen Konten", "Optimasi & SEO"].map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Ceritakan Kebutuhan Anda</label>
                <textarea name="pesan" value={form.pesan} onChange={handle} rows={3}
                  placeholder="Saya ingin membuat website untuk bisnis saya..."
                  className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-4 rounded-xl font-bold transition-colors">
                Kirim & Konsultasi Gratis →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
