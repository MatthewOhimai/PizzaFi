"use client";

export default function About() {
  return (
    <section aria-labelledby="about-title" style={{ padding: "72px 16px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
      <h2 id="about-title" style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 900, textAlign: "center", margin: 0, marginBottom: 28, color: "var(--text-heading)" }}>
        About PizzaFi 🍕
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "center", padding: "0 8px" }}>
        <div style={{ opacity: 1, animation: "fadeIn 0.6s ease both" }}>
          <p style={{ color: "var(--text-primary)", lineHeight: 1.7, marginTop: 0 }}>
            At PizzaFi, we hand‑toss every dough, source vibrant ingredients, and wood‑fire each pie for a crisp yet airy bite.
            Our story started with a backyard oven and a mission: craft unforgettable pizza that brings people together.
          </p>
          <p className="muted" style={{ lineHeight: 1.7 }}>
            We’re obsessed with balance—smoky crust, creamy mozzarella, bright sauces. Whether you’re customizing or
            choosing a chef favorite, every order is fired to perfection and delivered hot.
          </p>
          <p style={{ color: "var(--text-primary)", lineHeight: 1.7 }}>
            Our mission is simple: fast, premium, unforgettable pizza—every time.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <div aria-hidden style={{
            height: 260,
            borderRadius: 20,
            background: "radial-gradient(closest-side, rgba(255,138,0,0.25), transparent), url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"400\"><rect width=\"100%\" height=\"100%\" fill=\"%23f3f3f3\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-size=\"24\" fill=\"%23999\">Chef at the oven</text></svg>') center/cover no-repeat",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          }} />
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}


