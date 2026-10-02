import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About & Rigor", path: "/about" },
    { name: "Practice Areas", path: "/services" },
    { name: "Suite 400", path: "/office", badge: "New" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Advisory Dispatch Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 text-xs text-slate-600 dark:text-slate-400 py-2 px-4 sm:px-6 lg:px-12 xl:px-16 hidden md:block transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center whitespace-nowrap">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-gold-700 dark:text-gold-400 font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              Featured Practice: GST & Corporate Tax Advisory
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-600 dark:text-gold-500" />
              {SITE_CONFIG.location.district}, {SITE_CONFIG.location.city}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${SITE_CONFIG.location.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-medium tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600 dark:text-gold-500" />
              {SITE_CONFIG.location.phone}
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a 
              href={`mailto:${SITE_CONFIG.location.email}`}
              className="inline-flex items-center gap-1.5 hover:text-gold-700 dark:hover:text-gold-300 transition-colors font-medium tracking-wide"
            >
              <Mail className="w-3.5 h-3.5 text-gold-600 dark:text-gold-500" />
              {SITE_CONFIG.location.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-2xl py-2.5" 
          : "bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-850/60 py-3.5"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
          
          {/* Brand Identity / Monogram Image */}
          <Link to="/" className="group flex items-center gap-3 focus:outline-none flex-shrink-0">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-md border border-gold-500/40 group-hover:border-gold-500 transition-all duration-300">
              <img 
                src={SITE_CONFIG.brand.logo.dark} 
                alt={`${SITE_CONFIG.practitioner.name} Dark Logo`}
                className="hidden dark:block w-full h-full object-cover transition-opacity duration-300"
              />
              <img 
                src={SITE_CONFIG.brand.logo.light} 
                alt={`${SITE_CONFIG.practitioner.name} Light Logo`}
                className="block dark:hidden w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-200 transition-colors">
                  ELENA VANCE
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30 rounded">
                  CMA
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium font-sans whitespace-nowrap hidden sm:inline-block">
                Management Accounting & Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-all rounded-md flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "text-gold-800 bg-gold-500/10 dark:text-gold-300 dark:bg-slate-900/80 border border-gold-500/40 dark:border-gold-500/30 shadow-sm"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/50"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-800 dark:text-gold-300 border border-gold-500/40 rounded-full animate-pulse">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-gold-500 dark:via-gold-400 to-transparent" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Group: Theme Toggle Switch & Book Consultation Button */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 whitespace-nowrap flex-shrink-0">
            {/* Dual-option Segmented Theme Switcher */}
            <ThemeToggle variant="pill" />

            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-md transition-all duration-300 group overflow-hidden shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle variant="icon" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-gold-500/40 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-950/98 border-b border-slate-200 dark:border-slate-850 px-5 pt-4 pb-6 mt-3 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {/* Mobile Theme Toggle Banner */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-2">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-sans">
                  Interface Theme
                </span>
                <ThemeToggle variant="pill" />
              </div>

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-gold-50 dark:bg-slate-900 border border-gold-500/30 text-gold-800 dark:text-gold-300"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-slate-950 dark:hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-gold-500/20 text-gold-800 dark:text-gold-300 border border-gold-500/40 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-850 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="w-full py-3 text-center text-sm font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg shadow-md"
                >
                  Schedule Consultation
                </Link>

                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                    <span>IMA Certified • Confidential Advisory</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                    <span>{SITE_CONFIG.location.phone}</span>
                    <span>{SITE_CONFIG.location.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
