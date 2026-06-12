"use client";
import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

export default function ScrambleHeading({ text, className = "", style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const words = el.querySelectorAll(".sw");
      words.forEach((wordEl, wi) => {
        const original = wordEl.dataset.word;
        setTimeout(() => {
          let iter = 0;
          const iv = setInterval(() => {
            wordEl.textContent = original
              .split("")
              .map((ch, ci) => {
                if (ch === " ") return " ";
                if (ci < iter) return ch;
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              })
              .join("");
            iter += 0.6;
            if (iter > original.length) {
              wordEl.textContent = original;
              clearInterval(iv);
            }
          }, 35);
        }, wi * 120);
      });
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={className} style={{ ...style, display: "inline" }}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="sw"
          data-word={word}
          style={{ display:"inline-block", marginRight:"0.28em", fontVariantNumeric:"tabular-nums" }}>
          {word}
        </span>
      ))}
    </span>
  );
}
