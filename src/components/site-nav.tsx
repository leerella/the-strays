"use client";

import { useEffect, useState } from "react";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const story = document.getElementById("story");
      const threshold = story ? story.offsetTop - 80 : window.innerHeight;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-cta)",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "3px",
    color: "var(--light-70)",
    textTransform: "uppercase" as const,
    transition: "color 0.2s",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "20px clamp(20px, 5vw, 60px)",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a
          href="#hero"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            color: "var(--gold)",
            letterSpacing: "2px",
            transition: "opacity 0.2s",
          }}
        >
          THE STRAYS
        </a>
        <ul style={{ listStyle: "none", display: "flex", gap: "36px" }}>
          <li><a href="#story" style={linkStyle}>STORY</a></li>
          <li><a href="#director" style={linkStyle}>DIRECTOR</a></li>
          <li><a href="#contact" style={linkStyle}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}
