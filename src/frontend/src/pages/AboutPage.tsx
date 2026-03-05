import { Toaster } from "@/components/ui/sonner";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
