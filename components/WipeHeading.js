"use client";
import { useEffect, useRef, useState } from "react";

export default function WipeHeading({ text, className = "", style = {}, color = "#e51e2a" }) {
  const ref   = useRef(null);
  const wipeRef = useRef(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setFired(true);
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ position:"relative", display:"inline-block" }}>
      {/* The actual text */}
      <span className={className} style={{
        ...style,
        display:"inline-block",
        opacity: fired ? 1 : 0,
        transform: fired ? "none" : "scale(0.92)",
        transition: fired ? "opacity 0.01s 0.45s, transform 0.6s 0.45s cubic-bezier(.22,1,.36,1)" : "none",
      }}>
        {text}
      </span>

      {/* Red wipe block */}
      <span aria-hidden style={{
        position:"absolute", inset:0,
        background: color,
        transformOrigin:"left",
        transform: fired ? "scaleX(0)" : "scaleX(1)",
        transition: fired ? "transform 0.65s cubic-bezier(.77,0,.175,1)" : "none",
        display:"block",
        zIndex:2,
      }}/>
    </span>
  );
}
