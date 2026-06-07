const R = "#e51e2a";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "2px solid #0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ borderBottom: "2px solid rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div className="col-span-2 p-8 sm:p-10" style={{ borderRight: "2px solid rgba(255,255,255,0.08)" }}>
            <div className="font-black text-3xl text-white mb-3" style={{ letterSpacing: "-0.03em" }}>
              KREASI<span style={{ color: R }}>DIGITAL</span>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.3)", lineHeight: "1.6" }}>
              Digital agency terpercaya yang membantu bisnis Indonesia tumbuh di era digital.
            </p>
          </div>
          {/* Layanan */}
          <div className="p-8 sm:p-10" style={{ borderRight: "2px solid rgba(255,255,255,0.08)" }}>
            <h4 className="font-black text-xs uppercase tracking-widest mb-5 text-white" style={{ letterSpacing: "0.12em" }}>Layanan</h4>
            <ul className="space-y-2.5">
              {["Web Dev", "Digital Marketing", "Branding", "SEO", "Konsultasi"].map(l => (
                <li key={l}><a href="#layanan" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>{l}</a></li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div className="p-8 sm:p-10">
            <h4 className="font-black text-xs uppercase tracking-widest mb-5 text-white" style={{ letterSpacing: "0.12em" }}>Kontak</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>
              <li>+62 812-3456-7890</li>
              <li>hello@kreasdigital.id</li>
              <li>Jakarta Selatan</li>
              <li className="pt-2">
                <a href="#kontak" className="font-black text-xs uppercase tracking-widest px-4 py-2.5 inline-block"
                  style={{ background: R, color: "#fff", textDecoration: "none", letterSpacing: "0.08em" }}>
                  Konsultasi →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-3">
          <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
            © 2024 Kreasi Digital · All Rights Reserved
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map(t => (
              <a key={t} href="#" className="font-bold text-xs uppercase" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none", letterSpacing: "0.08em" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
