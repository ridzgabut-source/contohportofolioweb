import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-pure-white selection:bg-deep-onyx selection:text-pure-white">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Philosophy />
      <Footer />
    </main>
  );
}
