import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function FlagImage({
  flagCode,
  country,
}: { flagCode: string; country: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <span className="text-4xl" aria-label={`${country} flag`}>
        {flagCode === "au"
          ? "🇦🇺"
          : flagCode === "ca"
            ? "🇨🇦"
            : flagCode === "us"
              ? "🇺🇸"
              : flagCode === "gb"
                ? "🇬🇧"
                : "🇪🇺"}
      </span>
    );
  }
  return (
    <img
      src={`https://flagcdn.com/w80/${flagCode}.png`}
      alt={`${country} flag`}
      className="w-14 h-10 object-cover rounded shadow-sm border border-navy/10"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

const services = [
  {
    flagCode: "au",
    country: "Australia",
    description:
      "Experience world-class education in Australia — a multicultural destination renowned for academic excellence and post-study work opportunities.",
    benefits: [
      "Post-Study Work Visa (2-4 years)",
      "High-quality research facilities",
      "Safe & welcoming environment",
      "Pathway to permanent residency",
      "Diverse cultural experience",
    ],
    color: "from-blue-50 to-red-50",
    borderColor: "border-red-200",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    flagCode: "ca",
    country: "Canada",
    description:
      "Canada offers internationally recognized degrees, affordable tuition, and one of the world's most welcoming immigration pathways for international students.",
    benefits: [
      "Post-Graduation Work Permit (3 years)",
      "Express Entry immigration pathway",
      "Bilingual education options",
      "Co-op & internship programs",
      "High quality of life",
    ],
    color: "from-red-50 to-white",
    borderColor: "border-red-200",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
  },
  {
    flagCode: "us",
    country: "USA",
    description:
      "The United States is home to some of the world's most prestigious universities, offering unparalleled research, networking, and career opportunities.",
    benefits: [
      "OPT/CPT work authorization",
      "World's top-ranked universities",
      "Diverse academic programs",
      "Strong alumni networks",
      "Innovation & entrepreneurship hub",
    ],
    color: "from-blue-50 to-red-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    flagCode: "gb",
    country: "United Kingdom",
    description:
      "The UK offers one of the shortest and most prestigious degrees globally — a 1-year Master's programme at world-renowned institutions.",
    benefits: [
      "Graduate Route visa (2-3 years)",
      "Shorter degree durations",
      "Historic academic traditions",
      "Gateway to European opportunities",
      "Rich cultural experience",
    ],
    color: "from-blue-50 to-red-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    flagCode: "de",
    country: "Europe",
    description:
      "European universities offer affordable, high-quality education with the added advantage of studying in a culturally rich, internationally connected environment.",
    benefits: [
      "Affordable tuition fees",
      "English-taught programs available",
      "Schengen area access",
      "Strong academic reputation",
      "Diverse cultural exposure",
    ],
    color: "from-yellow-50 to-blue-50",
    borderColor: "border-yellow-200",
    badgeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding bg-navy">
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
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Study Destinations
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed">
            We provide comprehensive guidance and support for students seeking
            to study in top destinations around the world.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.country}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`services.item.${i + 1}`}
              className={`group relative bg-white rounded-2xl overflow-hidden border ${service.borderColor} shadow-card card-hover cursor-pointer`}
              onClick={() => navigate({ to: "/universities" })}
            >
              {/* Card background gradient */}
              <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />

              <div className="p-6">
                {/* Flag + country name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FlagImage
                      flagCode={service.flagCode}
                      country={service.country}
                    />
                    <div>
                      <span
                        className={`inline-block text-xs font-grotesk font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor} mb-1`}
                      >
                        Study Destination
                      </span>
                      <h3 className="font-display font-bold text-navy text-xl leading-tight">
                        {service.country}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/65 font-grotesk text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="text-gold mt-1 shrink-0">✦</span>
                      <span className="text-foreground/75 font-grotesk text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-1 text-gold font-grotesk font-semibold text-sm group-hover:gap-2 transition-all">
                  View Universities
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
