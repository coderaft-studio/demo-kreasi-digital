import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Kreasi Digital — Digital Agency Indonesia",
  description: "Digital agency terpercaya di Indonesia. Web, Ads, Branding, SEO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={geist.className}>
      <body style={{ background: "#ffffff", color: "#0a0a0a" }}>{children}</body>
    </html>
  );
}
