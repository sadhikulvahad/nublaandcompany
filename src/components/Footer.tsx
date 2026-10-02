import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Code
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-600 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-200 dark:border-slate-850 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />

      {/* Top Advisory Banner */}
      <div className="border-b border-slate-200 dark:border-slate-900 py-10 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-slate-900 dark:text-white font-serif font-semibold text-lg">
                  GST & Corporate Financial Advisory
                </h4>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-800 dark:text-gold-300 border border-gold-500/40 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-2.5 h-2.5" />
                  Premier Advisory
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Strategic GST compliance, activity-based cost architecture, and 13-week cash liquidity advisory for corporate leaders.
              </p>
            </div>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 border border-gold-500/40 hover:border-gold-500/70 text-gold-800 dark:text-gold-300 hover:text-gold-900 dark:hover:text-gold-200 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            Explore Practice Areas
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Practitioner & Practice Overview */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center border border-gold-500/40 shadow-sm">
                <img 
                  src={SITE_CONFIG.brand.logo.dark} 
                  alt={`${SITE_CONFIG.practitioner.name} Dark Logo`}
                  className="hidden dark:block w-full h-full object-cover"
                />
                <img 
                  src={SITE_CONFIG.brand.logo.light} 
                  alt={`${SITE_CONFIG.practitioner.name} Light Logo`}
                  className="block dark:hidden w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-slate-900 dark:text-white font-bold tracking-tight text-base block">
                  {SITE_CONFIG.practitioner.name}, {SITE_CONFIG.practitioner.credentials}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-700 dark:text-gold-400 font-medium block">
                  {SITE_CONFIG.practice.name}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {SITE_CONFIG.practitioner.bioHeadline} Dedicated to institutional cost architecture, 13-week cash liquidity, and predictive board-level FP&A.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                <span className="text-[11px] font-medium">IMA Certified Member in Good Standing</span>
              </div>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h5 className="text-slate-900 dark:text-white text-xs font-semibold uppercase tracking-wider mb-4 font-serif">
              Core Practice Areas
            </h5>
            <ul className="space-y-2.5 text-xs">
              {SITE_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <Link 
                    to="/services" 
                    className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-700 group-hover:bg-gold-500 dark:group-hover:bg-gold-400 transition-colors" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters & Concierge */}
          <div>
            <h5 className="text-slate-900 dark:text-white text-xs font-semibold uppercase tracking-wider mb-4 font-serif">
              Headquarters & Concierge
            </h5>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-900 dark:text-slate-200 font-medium block">{SITE_CONFIG.location.building}</span>
                  <span>{SITE_CONFIG.location.suite}, {SITE_CONFIG.location.district}</span>
                  <span className="block">{SITE_CONFIG.location.city}, {SITE_CONFIG.location.statePostal}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-600 dark:text-gold-500 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.location.phone}`} className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors">
                  {SITE_CONFIG.location.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-600 dark:text-gold-500 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.location.email}`} className="hover:text-gold-700 dark:hover:text-gold-300 transition-colors">
                  {SITE_CONFIG.location.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-[11px] leading-tight space-y-1">
                  <div>Mon–Thu: 8:00 AM – 6:30 PM EST</div>
                  <div>Fri: 8:00 AM – 4:00 PM EST</div>
                  <div className="text-gold-700 dark:text-gold-400/90 font-medium">Weekends: Executive Appointment Only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Executive Intelligence Dispatch */}
          <div>
            <h5 className="text-slate-900 dark:text-white text-xs font-semibold uppercase tracking-wider mb-4 font-serif">
              Quarterly Financial Dispatch
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Curated strategic analysis on activity-based costing, liquidity forecasting, and corporate governance for C-suite leaders.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="corporate.email@domain.com"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:border-gold-500/60 rounded-lg px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-slate-200 dark:bg-slate-850 hover:bg-slate-300 dark:hover:bg-slate-800 border border-gold-500/30 text-gold-800 dark:text-gold-300 hover:text-slate-900 dark:hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span>Receive Briefings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="mt-2.5 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscription confirmed. Discretion guaranteed.</span>
              </div>
            )}
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-900">
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            <strong className="text-slate-800 dark:text-slate-300 font-semibold">Regulatory Notice & Professional Scope: </strong>
            {SITE_CONFIG.legal.disclaimer}
          </p>
        </div>

        {/* Bottom Bar & Front-End Developer Craftsmanship Signature */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 dark:text-slate-400 text-[11px]">
            {SITE_CONFIG.legal.copyright}
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-500 dark:text-slate-400">
            <Link to="/about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">CMA Rigor</Link>
            <span>•</span>
            <Link to="/office" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Suite 400 Office</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Client Confidentiality</Link>
          </div>

          {/* Discreet, Elegant "Engineered by" signature */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 hover:border-gold-500/40 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 group shadow-sm">
            <Code className="w-3.5 h-3.5 text-gold-600 dark:text-gold-500/80 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors" />
            <span>
              Engineered by <strong className="text-slate-800 dark:text-slate-300 group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors font-medium">Vance Digital Atelier</strong>
            </span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Executive Web Craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
