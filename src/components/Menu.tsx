"use client";

import { useState } from "react";
import { useCart } from "../contexts/CartContext";

const menuItems = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh mozzarella, San Marzano tomatoes, basil, and extra virgin olive oil",
    price: "$14.99",
    image: "🍕",
    category: "Classic"
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Spicy pepperoni, mozzarella, and our signature tomato sauce",
    price: "$16.99",
    image: "🍕",
    category: "Meat"
  },
  {
    id: 3,
    name: "BBQ Chicken Deluxe",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: "$18.99",
    image: "🍕",
    category: "Specialty"
  },
  {
    id: 4,
    name: "Veggie Garden",
    description: "Bell peppers, mushrooms, onions, olives, and fresh tomatoes",
    price: "$15.99",
    image: "🍕",
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, and mozzarella cheese",
    price: "$19.99",
    image: "🍕",
    category: "Meat"
  },
  {
    id: 6,
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, mozzarella, and our sweet tomato sauce",
    price: "$17.99",
    image: "🍕",
    category: "Specialty"
  },
  {
    id: 7,
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken, blue cheese, and celery",
    price: "$18.99",
    image: "🍕",
    category: "Specialty"
  },
  {
    id: 8,
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan, and gorgonzola blend",
    price: "$16.99",
    image: "🍕",
    category: "Classic"
  }
];

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const { addItem, setDrawerOpen } = useCart();

  const handleAddToCart = (itemId: number) => {
    const found = menuItems.find((m) => m.id === itemId);
    if (found) {
      const numericPrice = Number(found.price.replace(/[^0-9.]/g, ""));
      addItem({ id: found.id, name: found.name, price: numericPrice });
      
      // Show visual feedback
      setAddedToCart(itemId);
      setTimeout(() => {
        setAddedToCart(null);
        setDrawerOpen(true); // Open cart drawer after adding item
      }, 800);
    }
  };

  return (
    <section
      id="menu-section"
      style={{
        padding: "80px 16px",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            margin: 0,
            marginBottom: 16,
            color: "var(--text-heading)",
          }}
        >
          Our Menu 🍕
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-muted)",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Handcrafted pizzas made with the finest ingredients and wood-fired to perfection
        </p>
      </div>

      {/* Menu Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
          padding: "0 8px",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "clamp(16px, 3vw, 24px)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredItem === item.id ? "translateY(-8px)" : "translateY(0)",
              boxShadow: hoveredItem === item.id 
                ? "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255, 80, 0, 0.15)" 
                : "0 8px 20px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {/* Pizza Image */}
            <div
              style={{
                fontSize: 64,
                textAlign: "center",
                marginBottom: 16,
                transform: hoveredItem === item.id ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <span role="img" aria-label={`${item.name} pizza`}>{item.image}</span>
            </div>

            {/* Category Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 12,
                background: "rgba(255, 80, 0, 0.2)",
                border: "1px solid rgba(255, 80, 0, 0.3)",
                fontSize: 12,
                fontWeight: 600,
                color: "#ff8a00",
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              {item.category}
            </div>

            {/* Pizza Name */}
            <h3
              style={{
                fontSize: 20,
                fontWeight: 800,
                margin: "0 0 8px 0",
                color: "var(--text-heading)",
              }}
            >
              {item.name}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.5,
                margin: "0 0 20px 0",
                minHeight: 42,
              }}
            >
              {item.description}
            </p>

            {/* Price and Add to Cart */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#ff8a00",
                }}
              >
                {item.price}
              </span>
              <button
                onClick={() => handleAddToCart(item.id)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: addedToCart === item.id 
                    ? "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)" 
                    : "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
                  color: addedToCart === item.id ? "white" : "#0b0b0b",
                  border: "none",
                  fontWeight: 800,
                  fontSize: "clamp(12px, 2vw, 14px)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 12px rgba(255, 80, 0, 0.3)",
                  transform: (hoveredItem === item.id || addedToCart === item.id) ? "scale(1.05)" : "scale(1)",
                  whiteSpace: "nowrap",
                  minWidth: "110px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(255, 80, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 80, 0, 0.3)";
                }}
              >
                {addedToCart === item.id ? "Added! ✓" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          textAlign: "center",
          marginTop: 60,
          padding: "clamp(24px, 4vw, 32px) clamp(16px, 3vw, 24px)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 20,
          backdropFilter: "blur(10px)",
          width: "100%",
        }}
      >
        <h3
          style={{
            fontSize: 24,
            fontWeight: 800,
            margin: "0 0 12px 0",
            color: "var(--text-heading)",
          }}
        >
          Can't decide? Try our Pizza of the Month! 🏆
        </h3>
        <p
          style={{
            fontSize: 16,
            color: "var(--text-muted)",
            margin: "0 0 20px 0",
          }}
        >
          This month's special: Truffle Mushroom Deluxe with wild mushrooms and truffle oil
        </p>
        <a
          href="#order"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: 999,
            background: "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
            color: "#0b0b0b",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 8px 20px rgba(255, 80, 0, 0.4)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 80, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 80, 0, 0.4)";
          }}
        >
          Order Special
        </a>
      </div>
    </section>
  );
}
