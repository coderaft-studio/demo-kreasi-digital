"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#harga", label: "Harga" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950 shadow-lg shadow-cyan-900/10" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl text-white tracking-tight">
          Kreasi<span className="text-cyan-400">Digital</span>
          <span className="text-cyan-500 text-xs ml-1 font-normal">™</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="#kontak"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-lg text-sm font-bold transition-colors">
            Konsultasi Gratis
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="#kontak" onClick={() => setOpen(false)}
            className="bg-cyan-500 text-slate-950 px-5 py-2 rounded-lg text-center font-bold">
            Konsultasi Gratis
          </a>
        </nav>
      )}
    </header>
  );
}
