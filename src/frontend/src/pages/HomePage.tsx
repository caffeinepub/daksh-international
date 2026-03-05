import { Toaster } from "@/components/ui/sonner";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
