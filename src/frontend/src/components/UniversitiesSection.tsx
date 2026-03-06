import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function TabFlagImage({
  flagCode,
  label,
}: { flagCode: string; label: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return null;
  }
  return (
    <img
      src={`https://flagcdn.com/w40/${flagCode}.png`}
      alt={`${label} flag`}
      className="w-6 h-4 object-cover rounded-sm border border-current/10"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

interface University {
  name: string;
  domain: string;
  country: string;
}

const australiaUniversities: University[] = [
  {
    name: "Western Sydney University",
    domain: "westernsydney.edu.au",
    country: "AU",
  },
  { name: "La Trobe University", domain: "latrobe.edu.au", country: "AU" },
  { name: "Deakin University", domain: "deakin.edu.au", country: "AU" },
  { name: "Charles Sturt University", domain: "csu.edu.au", country: "AU" },
  {
    name: "University of Tasmania (UTAS)",
    domain: "utas.edu.au",
    country: "AU",
  },
  {
    name: "University of Newcastle (UON)",
    domain: "newcastle.edu.au",
    country: "AU",
  },
  { name: "Victoria University (VU)", domain: "vu.edu.au", country: "AU" },
  {
    name: "University of Canberra (UC)",
    domain: "canberra.edu.au",
    country: "AU",
  },
  { name: "CQUniversity", domain: "cqu.edu.au", country: "AU" },
];

const usaUniversities: University[] = [
  {
    name: "Southeast Missouri State University",
    domain: "semo.edu",
    country: "US",
  },
  {
    name: "Purdue University Northwest (PNW)",
    domain: "pnw.edu",
    country: "US",
  },
  { name: "Avila University", domain: "avila.edu", country: "US" },
  {
    name: "New York Institute of Technology (NYIT)",
    domain: "nyit.edu",
    country: "US",
  },
  { name: "San Francisco State University", domain: "sfsu.edu", country: "US" },
  { name: "William Paterson University", domain: "wpunj.edu", country: "US" },
  { name: "Long Island University", domain: "liu.edu", country: "US" },
  {
    name: "Northwest Missouri State University",
    domain: "nwmissouri.edu",
    country: "US",
  },
  { name: "Arizona State University", domain: "asu.edu", country: "US" },
  { name: "Central Michigan University", domain: "cmich.edu", country: "US" },
];

const canadaUniversities: University[] = [
  { name: "Capilano University", domain: "capilanou.ca", country: "CA" },
  { name: "Canadore College", domain: "canadorecollege.ca", country: "CA" },
  { name: "Centennial College", domain: "centennialcollege.ca", country: "CA" },
  { name: "University Canada West", domain: "ucanwest.ca", country: "CA" },
  { name: "Lambton College", domain: "lambtoncollege.ca", country: "CA" },
  { name: "Sheridan College", domain: "sheridancollege.ca", country: "CA" },
  { name: "Algoma University", domain: "algomau.ca", country: "CA" },
  { name: "Trinity Western University (TWU)", domain: "twu.ca", country: "CA" },
  {
    name: "Vancouver Island University (VIU)",
    domain: "viu.ca",
    country: "CA",
  },
  { name: "University of Regina", domain: "uregina.ca", country: "CA" },
  { name: "Conestoga College", domain: "conestogac.on.ca", country: "CA" },
  { name: "Humber College", domain: "humber.ca", country: "CA" },
];

const ukUniversities: University[] = [
  { name: "Abertay University", domain: "abertay.ac.uk", country: "UK" },
  { name: "Anglia Ruskin University", domain: "aru.ac.uk", country: "UK" },
  { name: "Aston University", domain: "aston.ac.uk", country: "UK" },
  { name: "Bangor University", domain: "bangor.ac.uk", country: "UK" },
  { name: "Bath Spa University", domain: "bathspa.ac.uk", country: "UK" },
  { name: "University of Bedfordshire", domain: "beds.ac.uk", country: "UK" },
  { name: "Birmingham City University", domain: "bcu.ac.uk", country: "UK" },
  { name: "Buckingham New University", domain: "bucks.ac.uk", country: "UK" },
  {
    name: "Canterbury Christ Church University",
    domain: "canterbury.ac.uk",
    country: "UK",
  },
  { name: "Coventry University", domain: "coventry.ac.uk", country: "UK" },
  { name: "De Montfort University", domain: "dmu.ac.uk", country: "UK" },
  {
    name: "Edinburgh Napier University",
    domain: "napier.ac.uk",
    country: "UK",
  },
  { name: "University of Essex", domain: "essex.ac.uk", country: "UK" },
  { name: "Glasgow Caledonian University", domain: "gcu.ac.uk", country: "UK" },
  { name: "University of Greenwich", domain: "gre.ac.uk", country: "UK" },
  {
    name: "Leeds Beckett University",
    domain: "leedsbeckett.ac.uk",
    country: "UK",
  },
  { name: "University of Lincoln", domain: "lincoln.ac.uk", country: "UK" },
  {
    name: "Liverpool John Moores University",
    domain: "ljmu.ac.uk",
    country: "UK",
  },
  {
    name: "London Metropolitan University",
    domain: "londonmet.ac.uk",
    country: "UK",
  },
  { name: "Middlesex University", domain: "mdx.ac.uk", country: "UK" },
  {
    name: "Ravensbourne University",
    domain: "ravensbourne.ac.uk",
    country: "UK",
  },
  {
    name: "Royal Holloway University of London",
    domain: "royalholloway.ac.uk",
    country: "UK",
  },
  { name: "University of Salford", domain: "salford.ac.uk", country: "UK" },
  { name: "Solent University", domain: "solent.ac.uk", country: "UK" },
  { name: "University of Bradford", domain: "bradford.ac.uk", country: "UK" },
  { name: "University of Creative Arts", domain: "uca.ac.uk", country: "UK" },
  { name: "University of East Anglia", domain: "uea.ac.uk", country: "UK" },
  { name: "University of East London", domain: "uel.ac.uk", country: "UK" },
  {
    name: "University of Gloucestershire",
    domain: "glos.ac.uk",
    country: "UK",
  },
  { name: "University of Huddersfield", domain: "hud.ac.uk", country: "UK" },
  { name: "University of Hull", domain: "hull.ac.uk", country: "UK" },
  { name: "University of Leicester", domain: "le.ac.uk", country: "UK" },
  {
    name: "University of Northampton",
    domain: "northampton.ac.uk",
    country: "UK",
  },
  {
    name: "University of Roehampton",
    domain: "roehampton.ac.uk",
    country: "UK",
  },
  { name: "University of Strathclyde", domain: "strath.ac.uk", country: "UK" },
  { name: "University of Suffolk", domain: "uos.ac.uk", country: "UK" },
  {
    name: "University of Sunderland",
    domain: "sunderland.ac.uk",
    country: "UK",
  },
  {
    name: "University of the West of England",
    domain: "uwe.ac.uk",
    country: "UK",
  },
  { name: "University of West London", domain: "uwl.ac.uk", country: "UK" },
  { name: "University of West Scotland", domain: "uws.ac.uk", country: "UK" },
];

const europeUniversities: University[] = [
  { name: "Alexander College (Cyprus)", domain: "ac.ac.cy", country: "CY" },
  { name: "KES College (Cyprus)", domain: "kes.ac.cy", country: "CY" },
  {
    name: "Larnaca College (Cyprus)",
    domain: "larnacacollegecyprus.com",
    country: "CY",
  },
  { name: "American College (Cyprus)", domain: "ac.ac.cy", country: "CY" },
  {
    name: "Schiller International University (Germany)",
    domain: "schiller.edu",
    country: "DE",
  },
  {
    name: "GISMA University of Applied Sciences (Germany)",
    domain: "gisma.com",
    country: "DE",
  },
  {
    name: "Berlin School of Business and Innovation (Germany)",
    domain: "berlinsbi.com",
    country: "DE",
  },
  {
    name: "University of Europe for Applied Sciences (Germany)",
    domain: "ue-germany.de",
    country: "DE",
  },
  { name: "FHM University (Germany)", domain: "fhm.de", country: "DE" },
  {
    name: "IU International University of Applied Sciences (Germany)",
    domain: "iu.org",
    country: "DE",
  },
];

const tabs = [
  {
    key: "australia",
    label: "Australia",
    flag: "🇦🇺",
    flagCode: "au",
    universities: australiaUniversities,
  },
  {
    key: "canada",
    label: "Canada",
    flag: "🇨🇦",
    flagCode: "ca",
    universities: canadaUniversities,
  },
  {
    key: "usa",
    label: "USA",
    flag: "🇺🇸",
    flagCode: "us",
    universities: usaUniversities,
  },
  {
    key: "uk",
    label: "UK",
    flag: "🇬🇧",
    flagCode: "gb",
    universities: ukUniversities,
  },
  {
    key: "europe",
    label: "Europe",
    flag: "🇪🇺",
    flagCode: "de",
    universities: europeUniversities,
  },
];

function getInitials(name: string): string {
  const words = name
    .replace(/[()[\]]/g, "")
    .split(" ")
    .filter(Boolean);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  if (words.length === 2)
    return words
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  // Look for acronym clues
  const acronymMatch = name.match(/\(([A-Z]{2,6})\)/);
  if (acronymMatch) return acronymMatch[1];
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function UniversityCard({ uni }: { uni: University }) {
  const [logoError, setLogoError] = useState(false);
  const initials = getInitials(uni.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
      className="group bg-white rounded-xl p-4 border border-navy/10 shadow-card card-hover flex flex-col items-center text-center gap-3"
    >
      {/* Logo area */}
      <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-navy/5 border border-navy/10 shrink-0">
        {!logoError ? (
          <img
            src={`https://logo.clearbit.com/${uni.domain}`}
            alt={`${uni.name} logo`}
            className="w-full h-full object-contain p-1"
            onError={() => setLogoError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-navy-mid text-white font-grotesk font-bold text-sm">
            {initials}
          </div>
        )}
      </div>

      {/* Name */}
      <div>
        <h4 className="font-grotesk font-semibold text-navy text-xs leading-snug line-clamp-3 group-hover:text-gold transition-colors duration-200">
          {uni.name}
        </h4>
      </div>
    </motion.div>
  );
}

export default function UniversitiesSection() {
  return (
    <section id="universities" className="section-padding bg-background">
      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm font-grotesk font-semibold tracking-[0.2em] uppercase mb-3">
            Partner Universities
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy mb-4 gold-underline gold-underline-center">
            50+ Partner Universities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed mt-6">
            We have established partnerships with top universities across 5
            countries, giving you access to the best academic programmes
            worldwide.
          </p>
        </motion.div>

        <Tabs defaultValue="australia" className="w-full">
          {/* Tab triggers */}
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8 p-0">
            {tabs.map((tab, i) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                data-ocid={`universities.tab.${i + 1}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-navy/15 bg-white text-navy font-grotesk font-medium text-sm data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:border-navy data-[state=active]:shadow-navy transition-all duration-200 hover:border-navy/40"
              >
                <TabFlagImage flagCode={tab.flagCode} label={tab.label} />
                <span>{tab.label}</span>
                <span className="text-xs opacity-70 font-normal">
                  ({tab.universities.length})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab contents */}
          {tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {tab.universities.map((uni) => (
                      <UniversityCard key={uni.name} uni={uni} />
                    ))}
                  </div>
                  <p className="text-center text-muted-foreground font-grotesk text-sm mt-8">
                    Showing {tab.universities.length} partner universities in{" "}
                    {tab.label}
                  </p>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
