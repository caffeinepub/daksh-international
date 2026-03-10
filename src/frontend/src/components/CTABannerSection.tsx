import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function CTABannerSection() {
  const navigate = useNavigate();

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 px-4 md:px-8"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.17 0.06 255) 0%, oklch(0.22 0.055 255) 40%, oklch(0.17 0.06 255) 100%)",
      }}
    >
      {/* Gold accent gradients */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(var(--gold)), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(var(--gold)), transparent)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-8 pointer-events-none"
        style={{ background: "oklch(var(--gold))", filter: "blur(60px)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-8 pointer-events-none"
        style={{ background: "oklch(var(--gold))", filter: "blur(60px)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.74 0.13 78 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.74 0.13 78 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/15 border border-gold/25 mb-6">
            <GraduationCap className="w-8 h-8 text-gold" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-5 leading-tight">
            Ready to Start Your{" "}
            <span className="text-gold">Global Education</span> Journey?
          </h2>

          <p className="text-white/65 font-grotesk text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Get a free consultation with our expert counsellors today.
            We&apos;ve helped{" "}
            <strong className="text-gold font-semibold">500+ students</strong>{" "}
            achieve their international education dreams — you could be next.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              data-ocid="cta.primary_button"
              onClick={() => navigate({ to: "/contact" })}
              className="bg-gold hover:bg-gold-light text-navy font-grotesk font-bold text-base px-8 py-4 h-auto rounded-full shadow-gold-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Free Consultation
            </Button>
            <Button
              data-ocid="cta.secondary_button"
              onClick={() => navigate({ to: "/universities" })}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy font-grotesk font-semibold text-base px-8 py-4 h-auto rounded-full transition-all duration-200 flex items-center gap-2"
            >
              Explore Universities
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-white/40 font-grotesk text-sm"
          >
            {[
              "✦ 100% Free Consultation",
              "✦ No Hidden Charges",
              "✦ Expert Counsellors",
              "✦ 6+ Years Trusted",
            ].map((item) => (
              <span
                key={item}
                className="hover:text-white/60 transition-colors"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
