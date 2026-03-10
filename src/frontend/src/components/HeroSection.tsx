import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, Globe, Star } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1400x600.jpg')",
        }}
      />

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-navy/80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.17 0.06 255 / 0.6) 0%, oklch(0.17 0.06 255 / 0.85) 60%, oklch(0.17 0.06 255 / 0.97) 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <Globe
          className="w-64 h-64 text-gold animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(0.97 0.005 250), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-6"
        >
          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
          <span className="text-gold text-sm font-grotesk font-semibold tracking-wide">
            Trusted Education Consultants Since 2018
          </span>
          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4"
        >
          Your Gateway to{" "}
          <span className="text-gold relative inline-block">
            Global Education
            <span
              className="absolute bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ background: "oklch(var(--gold))" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-grotesk leading-relaxed"
        >
          Daksh International — Your trusted partner for study visa consultancy.
          We help students achieve their dreams of studying abroad across 5
          countries and 50+ universities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            data-ocid="hero.primary_button"
            onClick={() => navigate({ to: "/contact" })}
            className="bg-gold hover:bg-gold-light text-navy font-grotesk font-bold text-base px-8 py-4 h-auto rounded-full shadow-gold-lg transition-all duration-200 hover:scale-105"
          >
            Get Free Consultation
          </Button>
          <Button
            data-ocid="hero.secondary_button"
            onClick={() => navigate({ to: "/universities" })}
            className="bg-white hover:bg-gray-100 text-navy border-2 border-white font-grotesk font-bold text-base px-8 py-4 h-auto rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Explore Universities
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "6+", label: "Years Experience" },
            { value: "500+", label: "Students Placed" },
            { value: "5", label: "Countries" },
            { value: "50+", label: "Partner Universities" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur-sm"
            >
              <div className="font-display font-bold text-gold text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-grotesk mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 cursor-pointer bg-transparent border-0 hover:text-white/70 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onClick={() => navigate({ to: "/about" })}
        aria-label="Go to About page"
      >
        <span className="text-xs font-grotesk tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
