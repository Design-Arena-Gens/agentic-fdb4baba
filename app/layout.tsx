import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forging Gold | Origins, Alchemy & Science",
  description:
    "Explore how gold forms in the cosmos, how humans refine it, and the scientific breakthroughs that make gold creation possible.",
  metadataBase: new URL("https://agentic-fdb4baba.vercel.app"),
  openGraph: {
    title: "Forging Gold | Origins, Alchemy & Science",
    description:
      "An immersive journey through cosmic origins, historical alchemy, and modern techniques of making gold.",
    url: "https://agentic-fdb4baba.vercel.app",
    siteName: "Forging Gold",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Forging Gold | Origins, Alchemy & Science",
    description:
      "Understand the natural and synthetic processes behind gold and how humanity has pursued its creation."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
