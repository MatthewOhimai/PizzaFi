"use client";

import { useState } from "react";

export default function Hero() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        justifyItems: "center",
        gap: 24,
        padding: "24px 16px 56px",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
        textAlign: "center",
        flex: 1,
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: -40,
            transform: "translateX(-50%) rotate(8deg)",
            filter: "blur(36px)",
            width: 360,
            height: 200,
            background:
              "radial-gradient(closest-side, rgba(255,138,0,0.35), transparent), radial-gradient(closest-side, rgba(255,45,85,0.35), transparent)",
            zIndex: 0,
          }}
        />
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            lineHeight: 1.08,
            margin: 0,
            fontWeight: 900,
            letterSpacing: -0.5,
            zIndex: 1,
            position: "relative",
            textShadow: "0 2px 0 rgba(0,0,0,0.25)",
          }}
        >
          Wood‑Fired Pizza, Delivered Fast 🍕
        </h1>
        <p
          style={{
            marginTop: 12,
            marginBottom: 20,
            fontSize: "clamp(14px, 2.4vw, 18px)",
            lineHeight: 1.6,
            color: "var(--text-muted)",
            maxWidth: 760,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Hand‑tossed dough, premium mozzarella, and bold flavors fired to perfection.
          Build your own or pick from our chef’s favorites. Hot, fresh, unforgettable.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", width: "100%", padding: "0 8px" }}>
          <a
            href="#order"
            style={{
              padding: "12px 18px",
              borderRadius: 999,
              background:
                "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
              color: "#0b0b0b",
              textDecoration: "none",
              fontWeight: 900,
              fontSize: "clamp(14px, 3vw, 16px)",
              minWidth: "120px",
              textAlign: "center",
              boxShadow:
                "0 10px 28px rgba(255, 80, 0, 0.45), inset 0 0 14px rgba(255,255,255,0.35)",
            }}
          >
            Start Order
          </a>
          <a
            href="#menu"
            onClick={() => scrollToSection('menu-section')}
            style={{
              padding: "12px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.18)",
              color: "#fffff",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "clamp(14px, 3vw, 16px)",
              minWidth: "120px",
              textAlign: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            View Menu
          </a>
        </div>
      </div>

      <div
        aria-hidden
        style={{
          marginTop: 20,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "8px 12px",
          borderRadius: 999,
          backdropFilter: "blur(8px)",
          maxWidth: "100%",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <span style={{ fontSize: 18 }}>🔥</span>
        <span style={{ color: "var(--text-muted)", fontWeight: 700, fontSize: "clamp(14px, 3vw, 16px)" }}>
          Free delivery on orders over $25
        </span>
      </div>
    </main>
  );
}


