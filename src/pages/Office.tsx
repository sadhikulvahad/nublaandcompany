import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Lock, 
  Coffee, 
  Car, 
  Navigation, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Office: React.FC = () => {
  const [activeSuiteTab, setActiveSuiteTab] = useState(0);

  const getSuiteIcon = (iconName: string) => {
    switch (iconName) {
      case "Users": return <Users className="w-5 h-5 text-gold-600 dark:text-gold-400" />;
      case "Lock": return <Lock className="w-5 h-5 text-gold-600 dark:text-gold-400" />;
      case "Coffee": return <Coffee className="w-5 h-5 text-gold-600 dark:text-gold-400" />;
      default: return <Building2 className="w-5 h-5 text-gold-600 dark:text-gold-400" />;
    }
  };

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      
      {/* 1. SUITE 400 HERO HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 xl:px-16 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-radial-gradient dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              Executive Advisory Headquarters
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              The <span className="gold-gradient-text">Suite 400</span> Advisory Office
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A private physical enclave at The Sovereign Financial Tower in Metropolitan City, purpose-built for executive confidentiality, forensic audits, and high-stakes capital strategy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GRAND OPENING ANNOUNCEMENT BANNER */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-100 dark:bg-slate-925 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-gold-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400 font-mono font-semibold">
                Executive Welcoming Protocol
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                Private Introductory Briefings & Concierge Tours
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {SITE_CONFIG.grandOpening.receptionDetails}
              </p>
            </div>
            <Link
              to="/contact?service=Suite%20400%20In-Person%20Briefing"
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all flex items-center gap-2 flex-shrink-0 shadow-md"
            >
              <span>Schedule Private Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL SUITE DETAILS & GALLERIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
              Designed for Discretion
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Architectural Highlights of Suite 400
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
              Explore the dedicated spaces crafted specifically for board presentations, encrypted analysis, and private executive dialogue.
            </p>

            {/* Suite Tab Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {SITE_CONFIG.officeFeatures.map((feat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSuiteTab(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                    activeSuiteTab === idx
                      ? "bg-gold-50 dark:bg-slate-900 border border-gold-500/50 text-gold-800 dark:text-gold-300 shadow-md"
                      : "bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {getSuiteIcon(feat.icon)}
                  <span>{feat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Suite Display */}
          {(() => {
            const activeFeature = SITE_CONFIG.officeFeatures[activeSuiteTab];
            return (
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl dark:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 h-80 lg:h-auto min-h-[380px] relative overflow-hidden">
                    <img
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-95 dark:brightness-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:hidden" />
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        {getSuiteIcon(activeFeature.icon)}
                        <span className="text-xs uppercase tracking-wider text-gold-700 dark:text-gold-400 font-mono font-medium">
                          {activeFeature.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                        {activeFeature.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {activeFeature.description}
                      </p>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                          Technical & Privacy Specifications:
                        </span>
                        <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                          {activeFeature.specs.map((spec, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400 hover:text-slate-900 dark:hover:text-gold-200 transition-colors"
                      >
                        <span>Reserve this suite for an upcoming session</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 4. INTERACTIVE MOCK MAP & LOCATION ESSENTIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-100 dark:bg-slate-925 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Interactive Mock Map Card */}
            <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl dark:shadow-2xl relative">
              {/* Mock Map Canvas Visual */}
              <div className="relative h-[420px] bg-slate-900 dark:bg-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                {/* Map Grid Pattern Background */}
                <div className="absolute inset-0 bg-subtle-grid bg-[size:28px_28px] opacity-30 pointer-events-none" />
                
                {/* Visual Street Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute top-1/3 left-0 right-0 h-3 bg-slate-700 transform -rotate-6" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-slate-700 transform -rotate-12" />
                  <div className="absolute bottom-1/4 left-0 right-0 h-4 bg-slate-700" />
                </div>

                {/* Map Header Status */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Coordinates: 40.7075° N, 74.0090° W</span>
                  </div>
                  <div className="px-3 py-1 rounded bg-slate-900/90 border border-gold-500/30 text-[11px] font-semibold text-gold-300">
                    Sovereign Tower Pinpoint
                  </div>
                </div>

                {/* The Map Marker / Pin */}
                <div className="relative z-10 mx-auto text-center transform -translate-y-4">
                  <div className="relative inline-block">
                    <div className="w-14 h-14 rounded-full bg-gold-500/20 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-[0_0_30px_rgba(197,157,51,0.6)] animate-pulse">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div className="mt-2 px-3 py-1 rounded-md bg-slate-950 border border-gold-500/40 text-xs font-bold text-white shadow-xl whitespace-nowrap">
                      Suite 400 • Vance Advisory
                    </div>
                  </div>
                </div>

                {/* Transit & Concourse Footnote */}
                <div className="relative z-10 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-gold-400" />
                    <span>Financial Center Transit Hub • Direct Concourse Access</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">2 min walk</span>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-500" />
                  {SITE_CONFIG.location.fullAddress}
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.location.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-700 dark:text-gold-400 hover:text-gold-900 dark:hover:text-gold-200 transition-colors font-medium flex items-center gap-1"
                >
                  <span>Open in External Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Practical Logistics & Operating Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 space-y-6 shadow-sm">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-1">
                    Visitor Logistics
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                    Access & Operating Hours
                  </h3>
                </div>

                {/* Operating Hours Table */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-800">
                    <Clock className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                    <span>Advisory Desk Schedule</span>
                  </div>
                  {SITE_CONFIG.location.hours.map((h, hIdx) => (
                    <div key={hIdx} className="flex justify-between items-center py-1">
                      <span className="text-slate-600 dark:text-slate-400">{h.days}</span>
                      <span className="font-mono text-slate-900 dark:text-white">{h.time}</span>
                    </div>
                  ))}
                </div>

                {/* Parking & Transit Details */}
                <div className="space-y-3 text-xs pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-200">
                    <Car className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                    <span>Valet & Transit Amenities</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Subway Lines 1, 4, 5 connect directly via the Sovereign Underground Concourse. Dedicated executive valet drop-off is stationed at the North Portico (West End).
                  </p>
                </div>

                {/* Security Protocol */}
                <div className="space-y-3 text-xs pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                    <span>Security & Check-in Clearance</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    All visitors must present government-issued photo identification at the ground-floor security concierge to receive an encrypted digital elevator pass for the 4th floor.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg block transition-all shadow-md"
                  >
                    Request Pre-Registration for Visit
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
