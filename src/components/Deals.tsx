"use client";

import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const deals = [
  {
    id: 1,
    title: "2 for Tuesday",
    description: "Any two medium pizzas for one low price.",
    price: "$19.99",
    priceValue: 19.99,
    original: "$28.00",
    img: "🍕🍕",
  },
  {
    id: 2,
    title: "Family Feast",
    description: "2 large pizzas + 4 drinks + garlic knots.",
    price: "$29.99",
    priceValue: 29.99,
    original: "$42.00",
    img: "👨‍👩‍👧‍👦🍕",
  },
  {
    id: 3,
    title: "Lunch Special",
    description: "Personal pizza + drink, weekdays 11–2.",
    price: "$8.99",
    priceValue: 8.99,
    original: "$12.00",
    img: "🥤🍕",
  },
  {
    id: 4,
    title: "Student Saver",
    description: "Show your ID for 15% off any pizza.",
    price: "15% off",
    priceValue: 10.99, // Base price for student discount
    original: "$\u00A0",
    img: "🎓",
  },
];

export default function Deals() {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const { addItem, setDrawerOpen } = useCart();

  const handleOrderNow = (deal: typeof deals[0]) => {
    addItem({
      id: deal.id,
      name: deal.title,
      price: deal.priceValue,
    });
    
    // Show visual feedback
    setAddedToCart(deal.id);
    setTimeout(() => {
      setAddedToCart(null);
      setDrawerOpen(true); // Open cart drawer after adding item
    }, 800);
  };

  return (
    <section id="deals" aria-labelledby="deals-title" style={{ padding: "64px 16px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
      <h2 id="deals-title" style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 900, textAlign: "center", margin: 0, marginBottom: 12, color: "var(--text-heading)" }}>
        Hot Deals 🔥
      </h2>
      <p style={{ textAlign: "center", margin: 0, marginBottom: 28, color: "var(--text-muted)", fontSize: "clamp(14px, 2vw, 16px)" }}>Save big with our latest promos and bundles.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, padding: "0 8px" }}>
        {deals.map((d) => (
          <article
            key={d.id}
            onMouseEnter={() => setHoverId(d.id)}
            onMouseLeave={() => setHoverId(null)}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 18,
              padding: 20,
              textAlign: "center",
              transform: hoverId === d.id ? "translateY(-6px) scale(1.02)" : "scale(1)",
              boxShadow: hoverId === d.id ? "0 18px 40px rgba(255, 80, 0, 0.25)" : "0 8px 22px rgba(0,0,0,0.08)",
              transition: "all 0.25s ease",
              backdropFilter: "blur(8px)",
            }}
          >
            <div aria-hidden style={{ fontSize: 48, marginBottom: 10 }}>{d.img}</div>
            <h3 style={{ margin: 0, marginBottom: 8, fontSize: 20, fontWeight: 900, color: "var(--text-heading)" }}>{d.title}</h3>
            <p style={{ margin: 0, marginBottom: 14, color: "var(--text-muted)" }}>{d.description}</p>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: "#ff8a00" }}>{d.price}</span>
              {d.original.trim() && <s style={{ color: "var(--text-muted)" }}>{d.original}</s>}
            </div>
            <button 
              onClick={() => handleOrderNow(d)}
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: 999,
                background: addedToCart === d.id 
                  ? "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)" 
                  : "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
                color: addedToCart === d.id ? "white" : "#0b0b0b",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 10px 28px rgba(255, 80, 0, 0.45), inset 0 0 14px rgba(255,255,255,0.35)",
                transition: "all 0.3s ease",
                transform: addedToCart === d.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              {addedToCart === d.id ? "Added! ✓" : "Order Now"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}


