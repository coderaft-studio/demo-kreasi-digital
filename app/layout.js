import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Kreasi Digital — Transformasi Digital untuk Bisnis Anda",
  description: "Digital agency terpercaya di Indonesia. Kami bantu bisnis Anda berkembang melalui strategi digital yang terukur dan berdampak.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
