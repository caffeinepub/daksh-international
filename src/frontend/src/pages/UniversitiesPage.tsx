import { Toaster } from "@/components/ui/sonner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UniversitiesSection from "../components/UniversitiesSection";

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <UniversitiesSection />
      </main>
      <Footer />
    </div>
  );
}
