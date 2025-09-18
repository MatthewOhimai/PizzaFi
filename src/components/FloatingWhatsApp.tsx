"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./icons/SocialIcons";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/+2348165457509"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 100,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: isHovered ? "#22c15e" : "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isHovered 
          ? "0 8px 24px rgba(37, 211, 102, 0.5)" 
          : "0 4px 12px rgba(0, 0, 0, 0.15)",
        transform: isHovered ? "translateY(-5px) scale(1.05)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ 
        width: 30, 
        height: 30, 
        color: "white",
        transform: isHovered ? "rotate(-10deg)" : "rotate(0)",
        transition: "transform 0.3s ease"
      }}>
        <WhatsAppIcon />
      </div>
      {isHovered && (
        <div style={{
          position: "absolute",
          top: -40,
          right: 0,
          backgroundColor: "#333",
          color: "white",
          padding: "6px 12px",
          borderRadius: 6,
          fontSize: 14,
          whiteSpace: "nowrap",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          animation: "fadeIn 0.3s ease"
        }}>
          Chat with us!
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </a>
  );
}