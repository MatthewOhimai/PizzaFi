import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { ThemeProvider } from "../contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PizzaFi - Wood-Fired Pizza Delivered Fast | Premium Pizza Restaurant",
  description: "Hand-tossed dough, premium mozzarella, and bold flavors fired to perfection. Order wood-fired pizza online with free delivery on orders over $25. Fresh ingredients, authentic taste.",
  keywords: "pizza delivery, wood-fired pizza, premium pizza, pizza restaurant, online pizza ordering, fresh pizza, authentic pizza",
  openGraph: {
    title: "PizzaFi - Wood-Fired Pizza Delivered Fast",
    description: "Hand-tossed dough, premium mozzarella, and bold flavors fired to perfection.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
