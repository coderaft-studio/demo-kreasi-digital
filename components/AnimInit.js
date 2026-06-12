"use client";
import { useEffect, useRef } from "react";

export default function AnimInit() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const progRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    const prog = progRef.current;
    if (!dot || !ring || !prog) return;

    // Cursor smooth follow
    let tx = -100, ty = -100, rx = -100, ry = -100;
    let raf;

    const onMove = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
      tx = e.clientX; ty = e.clientY;
    };
    const loop = () => {
      rx += (tx - rx) * 0.12; ry += (ty - ry) * 0.12;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const addH = () => { dot.classList.add("hovered"); ring.classList.add("hovered"); };
    const rmH  = () => { dot.classList.remove("hovered"); ring.classList.remove("hovered"); };
    const bindHover = () => document.querySelectorAll("a,button,[role=button]").forEach(el => {
      el.addEventListener("mouseenter", addH);
      el.addEventListener("mouseleave", rmH);
    });
    bindHover();

    // Scroll progress
    const onScroll = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      prog.style.width = pct + "%";
    };

    // IntersectionObserver — threshold 0 fires as soon as ANY part is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });

    const observe = () => {
      document.querySelectorAll(".rv:not(.visible),.letter-wrap:not(.visible),.line-draw:not(.visible),.crash-in:not(.visible),.conv-left:not(.visible),.conv-right:not(.visible)").forEach(el => {
        const rect = el.getBoundingClientRect();
        // Already in or near viewport — add visible immediately
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    };

    // Run immediately + re-observe after dynamic content loads
    observe();
    const t = setTimeout(observe, 300);


    // Scanner row observer (uses 'vis' class)
    const scanObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vis");
          scanObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });

    document.querySelectorAll(".scan-row:not(.vis)").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        el.classList.add("vis");
      } else {
        scanObs.observe(el);
      }
    });

    // Counter
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const raw = el.dataset.target || "0";
        const num = parseFloat(raw.replace(/[^0-9.]/g, ""));
        const suffix = raw.replace(/[0-9.]/g, "");
        const isFloat = raw.includes(".");
        const dur = 1600, t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          const cur = num * e;
          el.textContent = (isFloat ? cur.toFixed(1) : Math.floor(cur)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-target]").forEach(el => counterObs.observe(el));

    // Letter stagger delays
    document.querySelectorAll(".letter-wrap").forEach(wrap => {
      wrap.querySelectorAll(".ch span").forEach((ch, i) => {
        ch.style.transitionDelay = (i * 0.045) + "s";
      });
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
      observer.disconnect();
      scanObs.disconnect();
      counterObs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ left:"-100px", top:"-100px" }}/>
      <div ref={ringRef} className="cursor-ring" style={{ left:"-100px", top:"-100px" }}/>
      <div ref={progRef} className="scroll-progress"/>
    </>
  );
}
