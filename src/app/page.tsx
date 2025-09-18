"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Deals from "../components/Deals";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import { CartProvider } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

function PageContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: isDark
          ? "radial-gradient(1200px 600px at 10% -10%, rgba(255, 170, 0, 0.15), transparent), radial-gradient(800px 500px at 90% 10%, rgba(255, 80, 0, 0.15), transparent), linear-gradient(180deg, #0b0b0b 0%, #0a0a0a 100%)"
          : "#FFF8F0",
        color: "var(--text-primary)",
        transition: "background 0.35s ease, color 0.2s ease",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}
    >
      <Navbar />
      <Hero />
      <Menu />
      <div id="deals"><Deals /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <Testimonials />
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <PageContent />
    </CartProvider>
  );
}
