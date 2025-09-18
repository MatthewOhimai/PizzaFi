"use client";

import { useState } from "react";
import { XIcon, LinkedInIcon, GitHubIcon, WhatsAppIcon } from "./icons/SocialIcons";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  // Add keyframes for shiny line animation
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes shinyLine {
        0% { width: 0; left: 0; }
        50% { width: 100%; }
        100% { width: 0; left: 100%; }
      }
    `;
    document.head.appendChild(style);
  }

  const socialIcons = [
    { id: "x", href: "https://x.com", icon: <XIcon />, label: "X" },
    { id: "linkedin", href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
    { id: "github", href: "https://github.com", icon: <GitHubIcon />, label: "GitHub" },
    { id: "whatsapp", href: "https://wa.me/1234567890", icon: <WhatsAppIcon />, label: "WhatsApp" },
  ];

  return (
    <footer aria-labelledby="footer-title" style={{ marginTop: 60, paddingTop: 32, background: "transparent" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", width: "100%" }}>
        <h2 id="footer-title" className="sr-only">Footer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, padding: "0 8px" }}>
          <div>
            <strong style={{ color: "var(--text-heading)" }}>Quick Links</strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 10, color: "var(--text-primary)" }}>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#menu-section" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  Menu
                </a>
              </li>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#deals" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  Deals
                </a>
              </li>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#about" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  About
                </a>
              </li>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#contact" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <strong style={{ color: "var(--text-heading)" }}>Contact</strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 10, color: "var(--text-primary)" }}>
              <li>123 Wood‑Fired Ave</li>
              <li>+1 (234) 567‑890</li>
              <li>hello@pizzafi.com</li>
            </ul>
          </div>
          <div>
            <strong style={{ color: "var(--text-heading)" }}>Social</strong>
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              {socialIcons.map((social) => (
                <a 
                  key={social.id}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener"
                  aria-label={social.label}
                  onMouseEnter={() => setHoveredIcon(social.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  style={{ 
                    width: 36, 
                    height: 36, 
                    borderRadius: 999, 
                    display: "grid", 
                    placeItems: "center", 
                    background: hoveredIcon === social.id 
                      ? "rgba(255,255,255,0.15)" 
                      : "rgba(255,255,255,0.08)", 
                    border: "1px solid rgba(255,255,255,0.12)", 
                    textDecoration: "none",
                    color: hoveredIcon === social.id ? "#ff8a00" : "currentColor",
                    transform: hoveredIcon === social.id ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredIcon === social.id ? "0 5px 15px rgba(255, 138, 0, 0.3)" : "none",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <strong style={{ color: "var(--text-heading)" }}>Policies</strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 10, color: "var(--text-primary)" }}>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li style={{ marginBottom: 8, position: "relative" }}>
                <a 
                  href="#" 
                  style={{ 
                    color: "inherit", 
                    textDecoration: "none",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                    const line = document.createElement("div");
                    line.style.position = "absolute";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.width = "100%";
                    line.style.height = "2px";
                    line.style.background = "linear-gradient(90deg, transparent, #ff8a00, transparent)";
                    line.style.animation = "shinyLine 1.5s ease-in-out";
                    e.currentTarget.appendChild(line);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    const line = e.currentTarget.querySelector("div");
                    if (line) e.currentTarget.removeChild(line);
                  }}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "18px 0", color: "var(--text-muted)" }}>
          © 2025 PizzaFi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


