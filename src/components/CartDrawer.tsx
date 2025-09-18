"use client";

import { useCart } from "../contexts/CartContext";

export default function CartDrawer() {
  const { items, total, removeItem, updateQuantity, drawerOpen, setDrawerOpen, clear } = useCart();

  return (
    <aside
      aria-label="Shopping cart"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: 360,
        maxWidth: "90vw",
        background: "rgba(18,18,18,0.96)",
        color: "#fff",
        borderLeft: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "-20px 0 60px rgba(0,0,0,0.4)",
        transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "var(--text-heading)" }}>Your Cart</h3>
        <button onClick={() => setDrawerOpen(false)} aria-label="Close cart" style={{ background: "transparent", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>×</button>
      </div>

      <div style={{ overflowY: "auto", padding: 16, flex: 1 }}>
        {items.length === 0 ? (
          <p style={{ color: "var(--text-muted)" }}>Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div style={{ fontWeight: 800 }}>{item.name}</div>
                <div style={{ color: "#cfcfcf", fontSize: 12 }}>${item.price.toFixed(2)}</div>
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity" style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer" }}>−</button>
                  <span style={{ minWidth: 20, textAlign: "center", fontWeight: 700 }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer" }}>+</button>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                <button onClick={() => removeItem(item.id)} aria-label="Remove item" style={{ background: "transparent", border: "none", color: "#ff6b6b", cursor: "pointer" }}>Remove</button>
                <div style={{ fontWeight: 800 }}>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ padding: 16, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ color: "#cfcfcf" }}>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={clear} style={{ flex: 1, padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer" }}>Clear</button>
          <a
            href="#checkout"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "12px 16px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
              color: "#0b0b0b",
              textDecoration: "none",
              fontWeight: 800,
              boxShadow: "0 10px 28px rgba(255, 80, 0, 0.45), inset 0 0 14px rgba(255,255,255,0.35)",
            }}
          >
            Checkout
          </a>
        </div>
      </div>
    </aside>
  );
}


