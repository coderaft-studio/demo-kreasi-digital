import AnimInit from "@/components/AnimInit";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Portofolio from "@/components/Portofolio";
import Proses from "@/components/Proses";
import Harga from "@/components/Harga";
import Testimoni from "@/components/Testimoni";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnimInit />
      <Navbar />
      <Hero />
      <Layanan />
      <Portofolio />
      <Proses />
      <Harga />
      <Testimoni />
      <Kontak />
      <Footer />
    </main>
  );
}
