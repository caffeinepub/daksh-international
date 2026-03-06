import {
  Award,
  BookOpen,
  FileCheck,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import { type Variants, motion } from "motion/react";

const reasons = [
  {
    icon: Award,
    title: "6+ Years Experience",
    description:
      "Since 2018, we have been guiding students to achieve their global education dreams with dedication and expertise.",
    accent: "from-gold/20 to-gold/5",
  },
  {
    icon: Users,
    title: "500+ Students Placed",
    description:
      "Hundreds of students from across India now study in top universities worldwide, thanks to our expert guidance.",
    accent: "from-blue-400/20 to-blue-400/5",
  },
  {
    icon: FileCheck,
    title: "Expert Visa Guidance",
    description:
      "Our counsellors have deep knowledge of visa requirements for Australia, Canada, USA, UK, and Europe.",
    accent: "from-emerald-400/20 to-emerald-400/5",
  },
  {
    icon: BookOpen,
    title: "50+ Partner Universities",
    description:
      "We have established official partnerships with leading universities across 5 countries to give you the best choices.",
    accent: "from-purple-400/20 to-purple-400/5",
  },
  {
    icon: MessageCircle,
    title: "Personalized Counselling",
    description:
      "Every student is unique. We tailor our guidance to match your academic profile, budget, and career goals.",
    accent: "from-rose-400/20 to-rose-400/5",
  },
  {
    icon: TrendingUp,
    title: "High Visa Success Rate",
    description:
      "Our meticulous documentation and preparation process ensures a consistently high student visa approval rate.",
    accent: "from-amber-400/20 to-amber-400/5",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.74 0.13 78 / 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.17 0.06 255 / 0.06) 0%, transparent 50%)",
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
            Our Strengths
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mb-4 gold-underline gold-underline-center">
            Why Choose Daksh International?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed mt-6">
            We are not just consultants — we are your partners in building a
            brighter future through global education.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                data-ocid={`why.item.${i + 1}`}
                className="group relative bg-white rounded-2xl p-7 border border-navy/8 shadow-card card-hover overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-navy/6 border border-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>

                  <h3 className="font-display font-bold text-navy text-xl mb-3 leading-tight group-hover:text-navy transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/60 font-grotesk text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold/70 transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "6+", label: "Years in Business", sub: "Since 2018" },
            { value: "500+", label: "Students Placed", sub: "& counting" },
            { value: "5", label: "Countries", sub: "Worldwide" },
            {
              value: "50+",
              label: "Partner Universities",
              sub: "Global network",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-navy rounded-2xl p-5 border border-white/5"
            >
              <div className="font-display font-bold text-gold text-3xl md:text-4xl leading-none">
                {stat.value}
              </div>
              <div className="text-white font-grotesk font-semibold text-sm mt-1.5">
                {stat.label}
              </div>
              <div className="text-white/40 font-grotesk text-xs mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
