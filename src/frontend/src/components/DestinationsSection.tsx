import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useState } from "react";

const destinations = [
  {
    countryCode: "au",
    country: "Australia",
    tagline: "World-Class Education",
    description:
      "World-class universities, post-study work visa (2–4 years), multicultural lifestyle, and a pathway to permanent residency.",
    highlights: ["Post-Study Work Visa", "PR Pathway", "Top Research Hubs"],
    universities: "9 Partner Universities",
    color: "from-[#00235b] to-[#003a8c]",
    accentColor: "gold",
  },
  {
    countryCode: "ca",
    country: "Canada",
    tagline: "Gateway to North America",
    description:
      "Affordable tuition, Post-Graduation Work Permit up to 3 years, Express Entry PR pathway, and bilingual education options.",
    highlights: ["PGWP up to 3 years", "Express Entry PR", "Co-op Programs"],
    universities: "12 Partner Universities",
    color: "from-[#8b0000] to-[#c00000]",
    accentColor: "gold",
  },
  {
    countryCode: "us",
    country: "USA",
    tagline: "Land of Innovation",
    description:
      "Top-ranked universities, OPT/CPT work authorization, world-leading research and innovation ecosystem.",
    highlights: ["OPT/CPT Work Auth", "World Top Rankings", "Global Network"],
    universities: "10 Partner Universities",
    color: "from-[#001f5b] to-[#003399]",
    accentColor: "gold",
  },
  {
    countryCode: "gb",
    country: "United Kingdom",
    tagline: "Historic Academic Excellence",
    description:
      "Complete a 1-year Masters degree, benefit from the Graduate Route visa (2 years), and join centuries-old academic traditions.",
    highlights: [
      "1-Year Masters",
      "Graduate Route Visa",
      "Historic Institutions",
    ],
    universities: "39 Partner Universities",
    color: "from-[#001c5a] to-[#c8102e]",
    accentColor: "gold",
  },
  {
    countryCode: "de",
    country: "Europe",
    tagline: "Affordable Quality Education",
    description:
      "Affordable education, English-taught programs in Cyprus & Germany, Schengen area access, and strong academic reputation.",
    highlights: ["Low Tuition Fees", "English Programs", "Schengen Access"],
    universities: "10 Partner Universities",
    color: "from-[#003580] to-[#002060]",
    accentColor: "gold",
  },
];

function FlagImage({
  countryCode,
  country,
}: { countryCode: string; country: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-20 h-14 rounded-lg bg-white/20 flex items-center justify-center text-white/60 font-grotesk text-xs font-semibold uppercase">
        {countryCode.toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`https://flagcdn.com/w160/${countryCode}.png`}
      alt={`${country} flag`}
      className="w-20 h-14 object-cover rounded-lg shadow-md border border-white/20"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function DestinationsSection() {
  const navigate = useNavigate();

  return (
    <section
      id="destinations"
      className="section-padding bg-navy relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "oklch(var(--gold))" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "oklch(var(--gold))" }}
        />
      </div>

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
            Where We Send You
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Study Destinations
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed">
            Choose from 5 world-class study destinations, each offering unique
            academic experiences, immigration benefits, and career
            opportunities.
          </p>
        </motion.div>

        {/* Destinations grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.countryCode}
              variants={cardVariants}
              data-ocid={`destinations.item.${i + 1}`}
              onClick={() => navigate({ to: "/services" })}
              className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-card card-hover"
            >
              {/* Country banner */}
              <div
                className={`relative bg-gradient-to-br ${dest.color} p-6 pb-10`}
              >
                {/* Flag and country */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-white/60 font-grotesk text-xs font-semibold tracking-widest uppercase mb-1">
                      {dest.tagline}
                    </p>
                    <h3 className="font-display font-bold text-white text-2xl leading-tight">
                      {dest.country}
                    </h3>
                  </div>
                  <FlagImage
                    countryCode={dest.countryCode}
                    country={dest.country}
                  />
                </div>

                {/* Universities badge */}
                <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-white/90 font-grotesk text-xs font-semibold">
                    {dest.universities}
                  </span>
                </div>

                {/* Wave divider */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-5 bg-white"
                  style={{ borderRadius: "100% 100% 0 0 / 40px 40px 0 0" }}
                />
              </div>

              {/* Card body */}
              <div className="p-6 pt-4 bg-white">
                <p className="text-foreground/65 font-grotesk text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {dest.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 bg-navy/5 border border-navy/10 text-navy font-grotesk text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Explore link */}
                <div className="flex items-center gap-1.5 text-gold font-grotesk font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Explore {dest.country}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
