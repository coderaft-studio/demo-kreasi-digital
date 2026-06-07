"use client";
import { useState } from "react";

const R = "#e51e2a";
const INP = { width: "100%", border: "none", borderBottom: "2px solid #0a0a0a", padding: "12px 0", fontSize: "15px", color: "#0a0a0a", outline: "none", background: "transparent", boxSizing: "border-box" };

export default function Kontak() {
  const [form, setForm] = useState({ nama: "", email: "", bisnis: "", layanan: "", pesan: "" });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    const msg = encodeURIComponent(`Halo Kreasi Digital!\n\nNama: ${form.nama}\nEmail: ${form.email}\nBisnis: ${form.bisnis}\nLayanan: ${form.layanan}\n\nPesan:\n${form.pesan}`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="kontak" style={{ background: "#fff", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="p-6 sm:p-8" style={{ borderRight: "2px solid #0a0a0a" }}>
            <span className="font-black text-xs uppercase tracking-widest" style={{ color: R, letterSpacing: "0.15em" }}>Kontak</span>
          </div>
          <div className="col-span-1 sm:col-span-3 p-6 sm:p-8 flex items-center">
            <h2 className="font-black" style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", letterSpacing: "-0.03em" }}>
              Siap Berkembang Bersama?
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2" style={{ borderBottom: "2px solid #0a0a0a" }}>
          <div className="p-8 sm:p-12" style={{ borderRight: "2px solid #0a0a0a" }}>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(10,10,10,0.5)" }}>
              Konsultasi pertama <strong style={{ color: "#0a0a0a" }}>GRATIS</strong>. Ceritakan kebutuhan bisnis Anda dan kami siapkan proposal dalam 24 jam.
            </p>
            {[{ l: "WhatsApp", v: "+62 812-3456-7890" }, { l: "Email", v: "hello@kreasdigital.id" }, { l: "Lokasi", v: "Jakarta Selatan" }, { l: "Jam", v: "Senin–Jumat, 09.00–18.00" }].map(item => (
              <div key={item.l} className="grid grid-cols-3 py-4" style={{ borderBottom: "1.5px solid rgba(10,10,10,0.07)" }}>
                <span className="font-black text-xs uppercase tracking-widest" style={{ color: "rgba(10,10,10,0.3)", letterSpacing: "0.1em" }}>{item.l}</span>
                <span className="font-bold text-sm col-span-2">{item.v}</span>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12">
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full gap-4">
                <div className="font-black text-4xl" style={{ color: R }}>✓</div>
                <h3 className="font-black text-2xl">Pesan Terkirim!</h3>
                <p style={{ color: "rgba(10,10,10,0.5)" }}>Kami akan menghubungi Anda dalam 24 jam.</p>
                <button onClick={() => setSent(false)} className="font-bold text-xs uppercase underline" style={{ color: R, background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>Kirim lagi</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <h3 className="font-black text-lg mb-8" style={{ letterSpacing: "-0.02em" }}>Form Konsultasi Gratis</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[{ name: "nama", label: "Nama *", ph: "Budi Santoso" }, { name: "email", label: "Email *", ph: "budi@email.com" }].map(f => (
                    <div key={f.name}>
                      <label className="block font-black text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(10,10,10,0.4)", letterSpacing: "0.1em" }}>{f.label}</label>
                      <input name={f.name} required value={form[f.name]} onChange={handle} placeholder={f.ph} style={INP} />
                    </div>
                  ))}
                </div>
                {[{ n: "bisnis", l: "Bisnis", ph: "Nama perusahaan" }].map(f => (
                  <div key={f.n}>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(10,10,10,0.4)", letterSpacing: "0.1em" }}>{f.l}</label>
                    <input name={f.n} value={form[f.n]} onChange={handle} placeholder={f.ph} style={INP} />
                  </div>
                ))}
                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(10,10,10,0.4)", letterSpacing: "0.1em" }}>Layanan</label>
                  <select name="layanan" value={form.layanan} onChange={handle} style={INP}>
                    <option value="">Pilih...</option>
                    {["Web Development", "Digital Marketing", "Branding", "Konsultasi", "Konten", "SEO"].map(l => <option key={l}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-black text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(10,10,10,0.4)", letterSpacing: "0.1em" }}>Pesan *</label>
                  <textarea name="pesan" required value={form.pesan} onChange={handle} rows={4} placeholder="Ceritakan kebutuhan Anda..." style={{ ...INP, resize: "none" }} />
                </div>
                <button type="submit" className="w-full font-black text-xs uppercase tracking-widest py-4 transition-all hover:opacity-75"
                  style={{ background: "#0a0a0a", color: "#fff", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>
                  Kirim & Konsultasi Gratis →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
