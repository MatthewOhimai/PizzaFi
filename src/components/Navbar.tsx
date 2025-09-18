"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { itemCount, setDrawerOpen } = useCart();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState("☀️");
  
  // Add keyframe animations for shimmering effects
  useEffect(() => {
    // Create style element for animations
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes glow {
        0% { box-shadow: 0 0 5px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.1) inset; }
        50% { box-shadow: 0 0 15px rgba(255,255,255,0.5), 0 0 15px rgba(255,255,255,0.2) inset; }
        100% { box-shadow: 0 0 5px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.1) inset; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  // Update theme icon after initial render to avoid hydration mismatch
  useEffect(() => {
    setThemeIcon(theme === "dark" ? "🌙" : "☀️");
  }, [theme]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const update = () => setIsMobile(typeof window !== "undefined" ? window.innerWidth < 768 : false);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Close the menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? "12px 12px" : "12px 16px",
        maxWidth: 1200,
        margin: "8px auto",
        width: "calc(100% - 24px)",
        backgroundImage: theme === "dark" 
          ? "linear-gradient(135deg, rgba(10,10,10,0.85), rgba(25,25,25,0.85), rgba(10,10,10,0.85))" 
          : "linear-gradient(135deg, rgba(255,248,240,0.85), rgba(250,243,235,0.85), rgba(255,248,240,0.85))",
        backgroundSize: "200% 100%",
        animation: "shimmer 8s infinite linear",
        borderRadius: 16,
        border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.3)" : "rgba(220,220,220,0.5)"),
        boxShadow: theme === "dark" 
          ? "0 8px 32px rgba(0,0,0,0.2), 0 0 8px rgba(255,255,255,0.05) inset" 
          : "0 8px 32px rgba(0,0,0,0.08), 0 0 8px rgba(255,255,255,0.5) inset",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          aria-hidden
          style={{
            width: isMobile ? 28 : 32,
            height: isMobile ? 28 : 32,
            borderRadius: 12,
            background:
              "conic-gradient(from 210deg at 50% 50%, #ff8a00, #ff2d55, #ff8a00)",
            boxShadow: "0 8px 20px rgba(255, 90, 0, 0.35)",
          }}
        />
        <span
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            fontWeight: 800,
            letterSpacing: 0.3,
            color: "var(--text-heading)",
          }}
        >
          PizzaFi
        </span>
      </div>

      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={() => scrollToSection('menu-section')}
            style={{
              padding: "10px 14px",
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6), rgba(40,40,40,0.8))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6), rgba(255,255,255,0.8))",
              backgroundSize: "200% 100%",
              animation: "shimmer 6s infinite linear",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              fontWeight: 600,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
              transition: "all 0.25s ease",
            }}
          >
            Menu
          </button>
          <a
            href="#deals"
            style={{
              padding: "10px 14px",
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
              transition: "all 0.25s ease",
            }}
          >
            Deals
          </a>
          <button
            onClick={() => scrollToSection('deals')}
            style={{
              padding: "10px 16px",
              background:
                "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
              color: "#0b0b0b",
              textDecoration: "none",
              fontWeight: 800,
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 12,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 20px rgba(255, 80, 0, 0.3), 0 0 12px rgba(255,255,255,0.3) inset",
              transition: "all 0.25s ease",
            }}
          >
            Order Now
          </button>

          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            style={{
              width: 40,
              height: 40,
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span aria-hidden style={{ fontSize: 18 }}>{themeIcon}</span>
          </button>

          {/* Cart button */}
          <button
            aria-label="Open cart"
            onClick={() => setDrawerOpen(true)}
            style={{
              width: 40,
              height: 40,
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
              transition: "all 0.25s ease",
            }}
          >
            <span aria-hidden style={{ fontSize: 18 }}>🛒</span>
            {itemCount > 0 && (
              <span
                aria-label={`${itemCount} items in cart`}
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  minWidth: 20,
                  height: 20,
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
                  color: "#0b0b0b",
                  fontSize: 12,
                  fontWeight: 900,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(255,80,0,0.4)",
                  padding: "0 6px",
                }}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      )}

      {isMobile && (
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
          {/* Theme toggle (mobile) */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            style={{
              width: 40,
              height: 40,
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span aria-hidden style={{ fontSize: 18 }}>{themeIcon}</span>
          </button>

          {/* Cart (mobile) */}
          <button
            aria-label="Open cart"
            onClick={() => setDrawerOpen(true)}
            style={{
              width: 40,
              height: 40,
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              cursor: "pointer",
              position: "relative",
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            🛒
            {itemCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  minWidth: 18,
                  height: 18,
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
                  color: "#0b0b0b",
                  fontSize: 11,
                  fontWeight: 900,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 5px",
                }}
              >
                {itemCount}
              </span>
            )}
          </button>

          <button
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.8), rgba(20,20,20,0.6))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.5)" : "rgba(220,220,220,0.8)"),
              borderRadius: 12,
              color: "var(--text-primary)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              boxShadow: theme === "dark" 
                ? "0 4px 12px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.05) inset" 
                : "0 4px 12px rgba(0,0,0,0.05), 0 0 4px rgba(255,255,255,0.5) inset",
              transition: "all 0.25s ease",
            }}
          >
            <span aria-hidden style={{ display: "block", width: 18 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </span>
          </button>

          {isOpen && (
            <div
              role="menu"
              style={{
                position: "absolute",
              top: 50,
              right: 0,
              width: 180,
              backgroundImage: theme === "dark" 
                ? "linear-gradient(135deg, rgba(25,25,30,0.85), rgba(35,35,40,0.85), rgba(25,25,30,0.85))" 
                : "linear-gradient(135deg, rgba(255,248,240,0.85), rgba(245,245,250,0.85), rgba(255,248,240,0.85))",
              backgroundSize: "200% 100%",
              border: "1px solid " + (theme === "dark" ? "rgba(80,80,100,0.3)" : "rgba(220,220,220,0.5)"),
              borderRadius: 14,
              boxShadow: theme === "dark" 
                ? "0 8px 32px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.06) inset" 
                : "0 8px 32px rgba(0,0,0,0.1), 0 0 8px rgba(255,255,255,0.5) inset",
              backdropFilter: "blur(10px)",
              padding: 12,
              zIndex: 30,
              animation: "shimmer 8s infinite linear, fadeIn 0.2s ease-out",
              }}
            >
              <button
                onClick={() => scrollToSection('menu-section')}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 12px",
                  color: "var(--text-primary)",
                  backgroundImage: theme === "dark" 
                ? "linear-gradient(145deg, rgba(40,40,40,0.4), rgba(20,20,20,0.2), rgba(40,40,40,0.4))" 
                : "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(240,240,240,0.2), rgba(255,255,255,0.4))",
              backgroundSize: "200% 100%",
              animation: "shimmer 6s infinite linear",
                  border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.3)" : "rgba(220,220,220,0.3)"),
                  borderRadius: 8,
                  textAlign: "left",
                  cursor: "pointer",
                  margin: "4px 0",
                  transition: "all 0.2s ease",
                }}
              >
                Menu
              </button>
              <a
                href="#deals"
                style={{
                  display: "block",
                  padding: "10px 12px",
                  color: "var(--text-primary)",
                  backgroundImage: theme === "dark" 
                    ? "linear-gradient(145deg, rgba(40,40,40,0.4), rgba(20,20,20,0.2))" 
                    : "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(240,240,240,0.2))",
                  border: "1px solid " + (theme === "dark" ? "rgba(80,80,80,0.3)" : "rgba(220,220,220,0.3)"),
                  borderRadius: 8,
                  textDecoration: "none",
                  margin: "4px 0",
                  transition: "all 0.2s ease",
                }}
                onClick={() => setIsOpen(false)}
              >
                Deals
              </a>
              <a
                href="#order"
                style={{
                  display: "block",
                  padding: "12px 12px",
                  marginTop: 6,
                  textAlign: "center",
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #ff8a00 0%, #ff3d00 50%, #ff2d55 100%)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 10,
                  color: "#0b0b0b",
                  textDecoration: "none",
                  boxShadow: "0 8px 20px rgba(255, 80, 0, 0.3), 0 0 12px rgba(255,255,255,0.3) inset",
                  transition: "all 0.25s ease",
                }}
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}


