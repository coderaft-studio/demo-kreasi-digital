"use client";
import { useState, useEffect } from "react";

const R = "#e51e2a";

export default function Navbar() {
  const [sc, setSc] = useState(false);
  const [op, setOp] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Layanan", "Portofolio", "Harga", "Kontak"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{ background: sc ? "rgba(255,255,255,0.96)" : "#fff", borderBottom: "2px solid #0a0a0a", transition: "background 0.2s" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-black text-xl tracking-tighter" style={{ color: "#0a0a0a", textDecoration: "none" }}>
          KREASI<span style={{ color: R }}>DIGITAL</span>
        </a>
        <nav className="hidden md:flex items-center gap-0">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-bold text-xs uppercase tracking-widest px-5 py-4 border-l-2"
              style={{ borderColor: "#0a0a0a", color: "#0a0a0a", textDecoration: "none", letterSpacing: "0.12em", transition: "background 0.15s, color 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0a0a0a"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0a0a0a"; }}>
              {l}
            </a>
          ))}
          <a href="#kontak"
            className="font-black text-xs uppercase tracking-widest px-6 py-4 ml-px"
            style={{ background: R, color: "#fff", textDecoration: "none", letterSpacing: "0.1em", borderLeft: "2px solid #0a0a0a" }}>
            Konsultasi
          </a>
        </nav>
        <button onClick={() => setOp(!op)} className="md:hidden font-black text-lg" style={{ background: "none", border: "none", cursor: "pointer" }}>
          {op ? "✕" : "☰"}
        </button>
      </div>
      {op && (
        <nav className="md:hidden flex flex-col" style={{ borderTop: "2px solid #0a0a0a" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOp(false)}
              className="font-bold text-sm uppercase tracking-widest px-6 py-4"
              style={{ borderBottom: "1px solid #0a0a0a", color: "#0a0a0a", textDecoration: "none" }}>
              {l}
            </a>
          ))}
          <a href="#kontak" onClick={() => setOp(false)}
            className="font-black text-sm uppercase tracking-widest px-6 py-4"
            style={{ background: R, color: "#fff", textDecoration: "none" }}>
            Konsultasi Gratis
          </a>
        </nav>
      )}
    </header>
  );
}
