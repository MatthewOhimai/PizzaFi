"use client";

import { useState, useEffect } from "react";
import { WhatsAppIcon, XIcon, LinkedInIcon, GitHubIcon } from "./icons/SocialIcons";
import { PhoneIcon, EmailIcon, LocationIcon } from "./icons/ContactIcons";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHour, setActiveHour] = useState<number | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialIcons = [
    { id: "whatsapp", href: "https://wa.me/1234567890", icon: <WhatsAppIcon />, label: "WhatsApp", color: "#25D366" },
    { id: "x", href: "https://x.com", icon: <XIcon />, label: "X" },
    { id: "linkedin", href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
    { id: "github", href: "https://github.com", icon: <GitHubIcon />, label: "GitHub" },
  ];

  const storeHours = [
    { day: "Mon–Thu", hours: "11:00 AM – 10:00 PM" },
    { day: "Fri–Sat", hours: "11:00 AM – 11:30 PM" },
    { day: "Sun", hours: "12:00 PM – 9:30 PM" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" aria-labelledby="contact-title" style={{ padding: "72px 16px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
      <h2 
        id="contact-title" 
        style={{ 
          fontSize: "clamp(24px, 5vw, 32px)", 
          fontWeight: 900, 
          textAlign: "center", 
          margin: 0, 
          marginBottom: 24, 
          color: "var(--text-heading)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Contact & Store Hours
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, padding: "0 8px" }}>
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-20px)",
          transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
        }}>
          <address style={{ 
            fontStyle: "normal", 
            color: "var(--text-primary)", 
            lineHeight: 1.8,
            background: "rgba(255,255,255,0.03)",
            padding: 16,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            backdropFilter: "blur(8px)",
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
              <div style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: 24, 
                height: 24, 
                borderRadius: 6, 
                marginRight: 8,
                background: "linear-gradient(135deg, rgba(255,138,0,0.2) 0%, rgba(255,45,85,0.2) 100%)",
              }}>
                <LocationIcon />
              </div>
              <strong style={{ color: "var(--text-heading)" }}>PizzaFi HQ</strong>
            </div>
            123 Wood‑Fired Ave,<br />
            Flavor Town, FT 12345
          </address>
          <div style={{ 
            marginTop: 12,
            background: "rgba(255,255,255,0.03)",
            padding: 16,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            backdropFilter: "blur(8px)",
          }}>
            <h3 style={{ 
              margin: 0, 
              marginBottom: 12, 
              fontSize: 18, 
              fontWeight: 800, 
              color: "var(--text-heading)",
              background: "linear-gradient(90deg, #ff8a00, #ff2d55)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}>
              Contact Us
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--text-primary)" }}>
              <li style={{ 
                padding: "8px 0", 
                display: "flex", 
                alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  width: 24, 
                  height: 24, 
                  borderRadius: 6, 
                  marginRight: 8,
                  background: "linear-gradient(135deg, rgba(255,138,0,0.2) 0%, rgba(255,45,85,0.2) 100%)",
                }}>
                  <PhoneIcon />
                </div>
                <a 
                  href="tel:+1234567890" 
                  style={{ 
                    color: "var(--text-heading)", 
                    textDecoration: "none",
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-heading)";
                  }}
                >
                  +1 (234) 567‑890
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 1,
                    background: "linear-gradient(90deg, #ff8a00, #ff2d55)",
                    transformOrigin: "left",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                  }} className="underline-animation" />
                  <style jsx>{`
                    a:hover .underline-animation {
                      transform: scaleX(1);
                    }
                  `}</style>
                </a>
              </li>
              <li style={{ 
                padding: "8px 0", 
                display: "flex", 
                alignItems: "center",
              }}>
                <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  width: 24, 
                  height: 24, 
                  borderRadius: 6, 
                  marginRight: 8,
                  background: "linear-gradient(135deg, rgba(255,138,0,0.2) 0%, rgba(255,45,85,0.2) 100%)",
                }}>
                  <EmailIcon />
                </div>
                <a 
                  href="mailto:hello@pizzafi.com" 
                  style={{ 
                    color: "var(--text-heading)", 
                    textDecoration: "none",
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8a00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-heading)";
                  }}
                >
                  hello@pizzafi.com
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 1,
                    background: "linear-gradient(90deg, #ff8a00, #ff2d55)",
                    transformOrigin: "left",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                  }} className="underline-animation" />
                </a>
              </li>
            </ul>
          </div>

          <div style={{ 
            marginTop: 16,
            background: "rgba(255,255,255,0.03)",
            padding: 16,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            backdropFilter: "blur(8px)",
          }}>
            <h3 style={{ 
              margin: 0, 
              marginBottom: 12, 
              fontSize: 18, 
              fontWeight: 800, 
              color: "var(--text-heading)",
              background: "linear-gradient(90deg, #ff8a00, #ff2d55)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}>
              Store Hours
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--text-primary)" }}>
              {storeHours.map((item, index) => (
                <li 
                  key={index}
                  onMouseEnter={() => setActiveHour(index)}
                  onMouseLeave={() => setActiveHour(null)}
                  style={{
                    padding: "8px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: index < storeHours.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    transform: activeHour === index ? "translateX(5px)" : "translateX(0)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ 
                    fontWeight: activeHour === index ? 600 : 400,
                    color: activeHour === index ? "var(--text-heading)" : "inherit",
                  }}>{item.day}</span>
                  <span style={{ 
                    fontWeight: activeHour === index ? 600 : 400,
                    color: activeHour === index ? "#ff8a00" : "inherit",
                  }}>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 16, alignItems: "center" }}>
            {socialIcons.map((social) => (
              <a 
                key={social.id}
                aria-label={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                onMouseEnter={() => setHoveredIcon(social.id)}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{ 
                  width: 36, 
                  height: 36, 
                  borderRadius: 999, 
                  background: social.id === "whatsapp" ? "#25D366" : "rgba(255,255,255,0.08)", 
                  border: "1px solid rgba(255,255,255,0.12)", 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  color: hoveredIcon === social.id ? "#ff8a00" : (social.id === "whatsapp" ? "white" : "currentColor"),
                  textDecoration: "none", 
                  fontSize: 18,
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

        <div 
          aria-hidden 
          style={{ 
            height: 260, 
            borderRadius: 16, 
            background: "url('https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png') center/cover, rgba(255,255,255,0.05)", 
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
            position: "relative",
            overflow: "hidden",
          }} 
        >
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(255,138,0,0.2) 0%, rgba(255,45,85,0.2) 100%)",
              opacity: 0.6,
              animation: isVisible ? "shine 2s infinite" : "none",
            }}
          />
          <style jsx>{`
            @keyframes shine {
              0% { opacity: 0.3; }
              50% { opacity: 0.6; }
              100% { opacity: 0.3; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}


