import { Link } from "@tanstack/react-router";
import { ExternalLink, Heart, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Universities", to: "/universities" },
  { label: "Contact Us", to: "/contact" },
];

const destinations = [
  { label: "Study in Australia", to: "/services" },
  { label: "Study in Canada", to: "/services" },
  { label: "Study in USA", to: "/services" },
  { label: "Study in UK", to: "/services" },
  { label: "Study in Europe", to: "/services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-navy border-t border-white/10">
      {/* Main footer */}
      <div className="container-max px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="font-display font-bold text-white text-xl leading-none">
                DAKSH
              </span>
              <span className="text-gold text-xs font-grotesk tracking-widest uppercase">
                International
              </span>
            </div>
            <p className="text-white/50 font-grotesk text-sm leading-relaxed mb-6">
              Your trusted partner in global education. We help students achieve
              their dreams of studying abroad across 5 countries and 50+
              universities.
            </p>
            <div className="bg-gold/10 border border-gold/20 rounded-xl p-3">
              <p className="text-gold font-grotesk text-xs font-semibold">
                6+ Years of Excellence in Education Consultancy
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-grotesk font-bold text-white text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    data-ocid="footer.link"
                    className="text-white/50 hover:text-gold font-grotesk text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-grotesk font-bold text-white text-sm tracking-widest uppercase mb-5">
              Study Destinations
            </h4>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    to={dest.to}
                    data-ocid="footer.link"
                    className="text-white/50 hover:text-gold font-grotesk text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-grotesk font-bold text-white text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <p className="text-white/50 font-grotesk text-sm leading-relaxed">
                  #36, New Durga Nagar,
                  <br />
                  Ambala City, Haryana,
                  <br />
                  India — 134003
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+919215330275"
                  className="text-white/50 hover:text-gold font-grotesk text-sm transition-colors"
                >
                  +91 92153 30275
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:dakshinternational169@gmail.com"
                  className="text-white/50 hover:text-gold font-grotesk text-sm transition-colors break-all"
                >
                  dakshinternational169@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/40 font-grotesk text-sm">
              © {currentYear} Daksh International. All rights reserved.
            </p>
            <p className="text-white/30 font-grotesk text-xs flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" />{" "}
              using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors flex items-center gap-0.5"
              >
                caffeine.ai
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
