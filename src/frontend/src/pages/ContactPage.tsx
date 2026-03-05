import { Toaster } from "@/components/ui/sonner";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main className="pt-16 md:pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
