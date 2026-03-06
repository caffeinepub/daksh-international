import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

const featuredUniversities = [
  // Australia
  {
    name: "Western Sydney University",
    domain: "westernsydney.edu.au",
    country: "AU",
  },
  { name: "La Trobe University", domain: "latrobe.edu.au", country: "AU" },
  { name: "Deakin University", domain: "deakin.edu.au", country: "AU" },
  // Canada
  { name: "Capilano University", domain: "capilanou.ca", country: "CA" },
  { name: "Sheridan College", domain: "sheridancollege.ca", country: "CA" },
  { name: "Humber College", domain: "humber.ca", country: "CA" },
  // USA
  { name: "Arizona State University", domain: "asu.edu", country: "US" },
  { name: "NYIT", domain: "nyit.edu", country: "US" },
  { name: "Purdue University Northwest", domain: "pnw.edu", country: "US" },
  // UK
  { name: "Coventry University", domain: "coventry.ac.uk", country: "UK" },
  { name: "Aston University", domain: "aston.ac.uk", country: "UK" },
  { name: "Middlesex University", domain: "mdx.ac.uk", country: "UK" },
];

const countryFlagCodes: Record<string, string> = {
  AU: "au",
  CA: "ca",
  US: "us",
  UK: "gb",
};

function getInitials(name: string): string {
  const words = name
    .replace(/[()[\]]/g, "")
    .split(" ")
    .filter(Boolean);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  const acronymMatch = name.match(/\(([A-Z]{2,5})\)/);
  if (acronymMatch) return acronymMatch[1];
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function UniLogoCard({ uni }: { uni: (typeof featuredUniversities)[0] }) {
  const [logoError, setLogoError] = useState(false);
  const [flagError, setFlagError] = useState(false);
  const initials = getInitials(uni.name);
  const flagCode = countryFlagCodes[uni.country];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-2xl p-5 border border-navy/8 shadow-card card-hover flex flex-col items-center gap-3 text-center"
    >
      {/* Country flag badge */}
      <div className="absolute top-3 right-3">
        {!flagError ? (
          <img
            src={`https://flagcdn.com/w40/${flagCode}.png`}
            alt={`${uni.country} flag`}
            className="w-7 h-5 object-cover rounded-sm shadow-xs border border-navy/10"
            loading="lazy"
            onError={() => setFlagError(true)}
          />
        ) : (
          <span className="text-xs font-grotesk font-bold text-navy/40">
            {uni.country}
          </span>
        )}
      </div>

      {/* Logo */}
      <div className="w-16 h-16 rounded-xl border border-navy/10 bg-navy/4 flex items-center justify-center overflow-hidden shrink-0">
        {!logoError ? (
          <img
            src={`https://logo.clearbit.com/${uni.domain}`}
            alt={`${uni.name} logo`}
            className="w-full h-full object-contain p-1.5"
            loading="lazy"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-navy-mid text-white font-grotesk font-bold text-sm">
            {initials}
          </div>
        )}
      </div>

      {/* Name */}
      <p className="font-grotesk font-semibold text-navy text-xs leading-snug line-clamp-3 group-hover:text-gold transition-colors duration-200">
        {uni.name}
      </p>
    </motion.div>
  );
}

export default function UniversityLogosStrip() {
  const navigate = useNavigate();

  return (
    <section
      id="partner-universities"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.17 0.06 255 / 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm font-grotesk font-semibold tracking-[0.2em] uppercase mb-3">
            Global Network
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mb-4 gold-underline gold-underline-center">
            Our Partner Universities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed mt-6">
            We are partnered with 50+ accredited universities across Australia,
            Canada, USA, UK, and Europe — giving you access to the best academic
            programmes worldwide.
          </p>
        </motion.div>

        {/* Country filter labels */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { code: "au", label: "Australia", flag: "au" },
            { code: "ca", label: "Canada", flag: "ca" },
            { code: "us", label: "USA", flag: "us" },
            { code: "uk", label: "United Kingdom", flag: "gb" },
          ].map((c) => (
            <div
              key={c.code}
              className="flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-1.5"
            >
              <img
                src={`https://flagcdn.com/w40/${c.flag}.png`}
                alt={`${c.label} flag`}
                className="w-5 h-3.5 object-cover rounded-sm"
                loading="lazy"
              />
              <span className="text-navy font-grotesk text-xs font-semibold">
                {c.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {featuredUniversities.map((uni) => (
            <UniLogoCard key={uni.name} uni={uni} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-muted-foreground font-grotesk text-sm mb-5">
            Showing 12 of 50+ partner universities
          </p>
          <Button
            data-ocid="uni-strip.primary_button"
            onClick={() => navigate({ to: "/universities" })}
            className="bg-navy hover:bg-navy-mid text-white font-grotesk font-semibold px-8 py-3 h-auto rounded-full shadow-navy transition-all duration-200 hover:scale-105"
          >
            View All 50+ Universities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
