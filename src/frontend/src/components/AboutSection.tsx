import { Award, BookOpen, CheckCircle, Globe2, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, value: "6+", label: "Years Experience", color: "text-gold" },
  { icon: Users, value: "500+", label: "Students Placed", color: "text-gold" },
  { icon: Globe2, value: "5", label: "Countries", color: "text-gold" },
  {
    icon: BookOpen,
    value: "50+",
    label: "Partner Universities",
    color: "text-gold",
  },
];

const highlights = [
  "Expert visa guidance for 5 major study destinations",
  "Personalized counselling tailored to your profile",
  "End-to-end support from university selection to visa",
  "Strong relationships with 50+ partner universities",
  "High visa success rate with professional documentation",
  "Post-arrival assistance and student support services",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-grotesk font-semibold tracking-[0.2em] uppercase mb-3">
            About Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mb-4 gold-underline gold-underline-center">
            Who We Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed mt-6">
            Daksh International has been transforming student dreams into global
            realities for over 6 years.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-5">
              Your Trusted Partner in{" "}
              <span className="text-gold">Global Education</span>
            </h3>
            <p className="text-foreground/75 font-grotesk leading-relaxed mb-5">
              Since 2018, Daksh International has been a leading education
              recruitment consultancy based in Ambala City, Haryana. We
              specialize in guiding students through every step of their study
              abroad journey — from choosing the right university to securing
              their student visa.
            </p>
            <p className="text-foreground/75 font-grotesk leading-relaxed mb-8">
              Our team of experienced consultants has helped over 500 students
              achieve their dreams of studying in Australia, Canada, USA, UK,
              and Europe. We pride ourselves on our high visa success rate and
              our commitment to providing personalized, honest guidance to every
              student.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground/80 font-grotesk text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3 bg-navy/5 rounded-xl p-4 border border-navy/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy text-xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs font-grotesk">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: MD Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              {/* Decorative background */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, oklch(var(--gold) / 0.3), transparent 70%)",
                }}
              />

              <div className="relative bg-white rounded-2xl shadow-card overflow-hidden border border-navy/10">
                {/* Header band */}
                <div
                  className="h-24 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(var(--navy-mid)) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 70% 50%, oklch(var(--gold)), transparent 60%)",
                    }}
                  />
                </div>

                {/* Initials avatar (replaces photo) */}
                <div className="relative px-8 -mt-16 flex items-end justify-between">
                  <div
                    className="w-28 h-28 rounded-2xl border-4 border-white shadow-navy flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(var(--navy)) 0%, oklch(var(--navy-mid)) 100%)",
                    }}
                  >
                    <span className="font-display font-bold text-white text-3xl select-none">
                      TB
                    </span>
                  </div>
                  <div className="mb-2 bg-gold/10 border border-gold/30 rounded-full px-3 py-1">
                    <span className="text-gold text-xs font-grotesk font-semibold">
                      MD & Founder
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-8 py-6">
                  <h3 className="font-display font-bold text-navy text-2xl mb-1">
                    Tripta Bharara
                  </h3>
                  <p className="text-gold font-grotesk font-semibold text-sm mb-5">
                    Managing Director, Daksh International
                  </p>

                  <blockquote className="relative border-l-4 border-gold pl-4 py-2 mb-6">
                    <p className="text-foreground/70 font-grotesk text-sm italic leading-relaxed">
                      "Our mission is to make quality global education
                      accessible to every deserving student. We don't just
                      process applications — we build futures."
                    </p>
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-navy/10">
                    <div>
                      <div className="text-xs text-muted-foreground font-grotesk mb-1">
                        Experience
                      </div>
                      <div className="font-display font-bold text-navy text-sm">
                        6+ Years
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-grotesk mb-1">
                        Specialization
                      </div>
                      <div className="font-display font-bold text-navy text-sm">
                        Education Recruitment
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification badge */}
                <div className="mx-8 mb-6 bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-green-700 text-xs font-grotesk leading-snug">
                    Declaration verified by Tripta Bharara confirming all
                    provided information is accurate.
                    <span className="text-green-500 ml-1">— 26/02/2026</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
