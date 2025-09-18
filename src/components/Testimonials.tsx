"use client";

import { useEffect, useState, useRef } from "react";

const reviews = [
  { id: 1, name: "Ava", rating: 5, text: "Crisp crust, gooey cheese. New favorite!", avatar: "😀" },
  { id: 2, name: "Liam", rating: 5, text: "Delivery was fast and piping hot.", avatar: "😎" },
  { id: 3, name: "Mia", rating: 4, text: "BBQ chicken is unreal.", avatar: "🥰" },
  { id: 4, name: "Noah", rating: 5, text: "Perfect balance of flavors.", avatar: "🤤" },
  { id: 5, name: "Emma", rating: 5, text: "Best pizza in town, hands down!", avatar: "😍" },
  { id: 6, name: "James", rating: 4, text: "Great value for the quality you get.", avatar: "👌" },
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return;
    
    const scrollContainer = scrollContainerRef.current;
    let animationId: number;
    let startTime: number;
    
    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Scroll 1px every 25ms (adjust for speed)
      const position = (elapsed / 25) % (scrollContainer.scrollWidth - scrollContainer.clientWidth || 1);
      scrollContainer.scrollLeft = position;
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section aria-labelledby="testimonials-title" style={{ padding: "72px 16px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
      <h2 id="testimonials-title" style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 900, textAlign: "center", margin: 0, marginBottom: 24, color: "var(--text-heading)" }}>
        What Our Customers Say ⭐
      </h2>
      <div 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ 
          display: "flex", 
          overflowX: "auto",
          gap: 20,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          paddingBottom: 10,
          paddingLeft: 8,
          paddingRight: 8,
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          width: "100%",
          maxWidth: "100%"
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {reviews.map((r) => (
          <article
            key={r.id}
            onMouseEnter={() => setHoveredId(r.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              flex: "0 0 min(280px, 80vw)",
              opacity: hoveredId === r.id ? 1 : 0.7,
              filter: hoveredId === r.id ? "brightness(1.1)" : "brightness(1)",
              transform: hoveredId === r.id ? "translateY(-5px)" : "translateY(0)",
              transition: "all 0.4s ease",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: 18,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div aria-hidden style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(255,255,255,0.08)", display: "grid", placeItems: "center", fontSize: 20 }}>{r.avatar}</div>
              <strong style={{ color: "var(--text-heading)" }}>{r.name}</strong>
            </div>
            <div aria-hidden style={{ color: "#ffb703", marginBottom: 6 }}>{"★".repeat(r.rating)}</div>
            <p style={{ margin: 0, color: "var(--text-primary)" }}>{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


