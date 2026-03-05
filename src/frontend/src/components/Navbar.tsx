import { Button } from "@/components/ui/button";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Universities", to: "/universities" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPathRef = useRef(currentPath);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      setIsOpen(false);
    }
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-navy-lg" : "bg-navy/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-max px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Brand - text only, no image/icon */}
          <Link
            to="/"
            data-ocid="nav.link"
            className="flex flex-col shrink-0 leading-tight group"
          >
            <span className="font-display font-bold text-white text-xl leading-none group-hover:text-gold transition-colors duration-200">
              DAKSH
            </span>
            <span className="text-gold text-xs font-grotesk tracking-widest uppercase">
              International
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = currentPath === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={`nav.link.${i + 1}`}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 font-grotesk tracking-wide ${
                      isActive
                        ? "text-gold bg-white/10"
                        : "text-white/80 hover:text-gold hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              data-ocid="nav.primary_button"
              onClick={() => navigate({ to: "/contact" })}
              className="hidden md:flex bg-gold hover:bg-gold-light text-navy font-grotesk font-bold text-sm px-5 py-2 h-9 rounded-full shadow-gold transition-all duration-200"
            >
              Get Consultation
            </Button>
            <button
              type="button"
              data-ocid="nav.toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <ul className="py-3 px-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = currentPath === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      data-ocid={`nav.link.${i + 1}`}
                      className={`block px-4 py-3 rounded-lg font-grotesk font-medium transition-all duration-200 ${
                        isActive
                          ? "text-gold bg-white/10"
                          : "text-white/80 hover:text-gold hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button
                  data-ocid="nav.secondary_button"
                  onClick={() => navigate({ to: "/contact" })}
                  className="w-full bg-gold hover:bg-gold-light text-navy font-grotesk font-bold rounded-full shadow-gold"
                >
                  Get Free Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
