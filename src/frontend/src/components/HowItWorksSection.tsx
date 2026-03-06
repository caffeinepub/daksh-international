import { ClipboardList, FileText, MessageSquare, Plane } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Meet our expert counsellors to discuss your academic profile, career goals, and study abroad aspirations. No fees, no obligations.",
    detail: "30-minute session",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "University Selection",
    description:
      "We shortlist the best universities matching your profile, budget, and preferred country from our network of 50+ partners.",
    detail: "Personalised shortlist",
  },
  {
    number: "03",
    icon: FileText,
    title: "Application & Documentation",
    description:
      "We handle your complete university application and meticulously prepare all required documents for a strong submission.",
    detail: "End-to-end support",
  },
  {
    number: "04",
    icon: Plane,
    title: "Visa & Pre-Departure",
    description:
      "We assist with your student visa application and provide a comprehensive pre-departure briefing to prepare you for life abroad.",
    detail: "Visa success focus",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.17 0.06 255) 0%, oklch(0.22 0.055 255) 50%, oklch(0.28 0.06 255) 100%)",
      }}
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.74 0.13 78) 0px, oklch(0.74 0.13 78) 1px, transparent 1px, transparent 28px)",
        }}
      />

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-sm font-grotesk font-semibold tracking-[0.2em] uppercase mb-3">
            Simple Process
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed">
            From your first consultation to boarding the flight — we guide you
            through every step of your study abroad journey.
          </p>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 z-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.74 0.13 78 / 0.2), oklch(0.74 0.13 78 / 0.6), oklch(0.74 0.13 78 / 0.2))",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                  data-ocid={`steps.item.${i + 1}`}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mb-5">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-gold/40 shadow-gold"
                      style={{ background: "oklch(var(--gold))" }}
                    >
                      <span className="font-display font-bold text-navy text-xl">
                        {step.number}
                      </span>
                    </div>
                    {/* Vertical connector (mobile) */}
                    {i < steps.length - 1 && (
                      <div
                        className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 mt-1"
                        style={{ background: "oklch(0.74 0.13 78 / 0.3)" }}
                      />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/55 font-grotesk text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Detail pill */}
                  <div className="inline-flex items-center gap-1.5 bg-gold/15 border border-gold/25 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-gold font-grotesk text-xs font-semibold">
                      {step.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
