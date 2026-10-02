import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  PieChart, 
  LineChart, 
  Briefcase, 
  Building2, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Quote, 
  ArrowUpRight
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState<'traditional' | 'cma'>('cma');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden transition-colors duration-300">
      
      {/* 1. EXECUTIVE HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-12 xl:px-16 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-radial-gradient dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        
        {/* Subtle decorative grid background & gold atmospheric glow */}
        <div className="absolute inset-0 bg-subtle-grid bg-[size:40px_40px] opacity-20 dark:opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Top Pill / Trust Seal */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-gold-500/40 shadow-md dark:shadow-lg text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-gold-500 dark:bg-gold-400 animate-ping" />
                <span className="text-gold-700 dark:text-gold-300 font-semibold tracking-wider uppercase text-[11px]">
                  Elena Vance, CMA, CSCA
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-slate-600 dark:text-slate-300">GST Advisory & Executive FP&A • Suite 400</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
            >
              Architecting <span className="gold-gradient-text">Fiscal Resilience</span> & Enterprise Capital Alpha.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-10 max-w-3xl"
            >
              Senior strategic management accounting, predictive 13-week FP&A cash velocity models, and activity-based cost architecture for CEOs, private equity sponsors, and boards who reject backward-looking compliance.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Request Executive Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/office"
                className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-300 dark:border-slate-700 hover:border-gold-500/50 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Tour Suite 400 Office</span>
                <Building2 className="w-4 h-4 text-gold-600 dark:text-gold-400" />
              </Link>
            </motion.div>

            {/* Trust Indicators / Certifications Bar */}
            <motion.div 
              variants={itemVariants}
              className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-850/80 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-600 dark:text-slate-400 text-xs"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-300">IMA Active Member</span>
                <span className="text-slate-500 dark:text-slate-400">#1084221</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-300">Dual Credentialed:</span>
                <span className="text-slate-500 dark:text-slate-400">CMA & CSCA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-300">Middle-Market Focus:</span>
                <span className="text-slate-500 dark:text-slate-400">$15M – $200M ARR</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. EXECUTIVE METRICS STRIP */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 py-12 px-4 sm:px-6 lg:px-12 xl:px-16 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-850">
            {SITE_CONFIG.practice.keyMetrics.map((metric, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center ${idx > 0 ? "pt-6 lg:pt-0 lg:pl-8" : ""}`}>
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-tight mb-1">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED ADVISORY & GST SPOTLIGHT */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-100 dark:bg-slate-925 border-b border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="rounded-2xl bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-gold-500/30 p-8 sm:p-12 relative overflow-hidden shadow-xl dark:shadow-2xl">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Featured Advisory Capabilities
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                  GST Compliance & Strategic Tax Architecture
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Bespoke Goods & Services Tax (GST) return architecture, Input Tax Credit (ITC) reconciliation, activity-based costing, and 13-week rolling cash forecasting for enterprise leaders.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-medium">
                    <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                    GST & Indirect Tax Compliance
                  </span>
                  <span>•</span>
                  <span>Activity-Based Costing</span>
                  <span>•</span>
                  <span className="text-gold-700 dark:text-gold-300 font-medium">13-Week Cash Velocity Modeling</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  to="/services"
                  className="px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all shadow-lg"
                >
                  Explore Practice Areas & GST
                </Link>
                <Link
                  to="/contact?service=GST%20%26%20Corporate%20Tax%20Advisory"
                  className="px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-880 border border-slate-300 dark:border-slate-700 rounded-lg transition-all"
                >
                  Schedule Tax Diagnostic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CMA STRATEGIC EDGE (INTERACTIVE COMPARISON) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
              The Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              {SITE_CONFIG.cmaRigorComparison.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {SITE_CONFIG.cmaRigorComparison.subtitle}
            </p>

            {/* Mobile Tab Switcher */}
            <div className="mt-8 inline-flex p-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 md:hidden">
              <button
                onClick={() => setActiveTab('cma')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'cma'
                    ? 'bg-gold-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Elena Vance, CMA
              </button>
              <button
                onClick={() => setActiveTab('traditional')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'traditional'
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Traditional Accounting
              </button>
            </div>
          </div>

          {/* Desktop Side-by-Side Comparison Table */}
          <div className="hidden md:block rounded-xl border border-slate-200 dark:border-slate-850 overflow-hidden bg-white dark:bg-slate-900/40 backdrop-blur-sm shadow-lg dark:shadow-xl">
            <div className="grid grid-cols-12 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold uppercase tracking-wider py-4 px-6">
              <div className="col-span-3 text-slate-600 dark:text-slate-400">Strategic Dimension</div>
              <div className="col-span-4 text-slate-600 dark:text-slate-400">Conventional Bookkeeping / Compliance</div>
              <div className="col-span-5 text-gold-700 dark:text-gold-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Elena Vance, CMA Advisory Model
              </div>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-850">
              {SITE_CONFIG.cmaRigorComparison.comparisonPoints.map((point, index) => (
                <div key={index} className="grid grid-cols-12 py-5 px-6 items-center text-sm hover:bg-slate-50 dark:hover:bg-slate-850/40 transition-colors">
                  <div className="col-span-3 font-semibold text-slate-900 dark:text-slate-200">
                    {point.dimension}
                  </div>
                  <div className="col-span-4 text-slate-500 dark:text-slate-400 pr-6 flex items-start gap-2">
                    <span className="text-slate-400 dark:text-slate-600 mt-1 font-mono text-xs">✕</span>
                    <span>{point.traditional}</span>
                  </div>
                  <div className="col-span-5 text-slate-900 dark:text-white font-medium pl-2 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-800 dark:text-gold-100">{point.cma}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Comparison View */}
          <div className="md:hidden space-y-4">
            {SITE_CONFIG.cmaRigorComparison.comparisonPoints.map((point, index) => (
              <div key={index} className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400 font-mono">
                  {point.dimension}
                </h4>
                {activeTab === 'cma' ? (
                  <div className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                    <span>{point.cma}</span>
                  </div>
                ) : (
                  <div className="text-sm text-slate-500 dark:text-slate-400 pl-2 border-l-2 border-slate-300 dark:border-slate-700">
                    {point.traditional}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRACTICE AREAS SNAPSHOT CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-100 dark:bg-slate-925 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
                Executive Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                Practice Areas & Advisory Solutions
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400 hover:text-gold-800 dark:hover:text-gold-300 transition-colors group"
            >
              <span>View All 6 Core Practices & Deliverables</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SITE_CONFIG.services.slice(0, 3).map((service) => {
              const IconComponent = 
                service.iconName === 'PieChart' ? PieChart :
                service.iconName === 'LineChart' ? LineChart : Briefcase;

              return (
                <div
                  key={service.id}
                  className="rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md dark:shadow-none hover:shadow-xl group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:bg-gold-500/10 group-hover:border-gold-500/40 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-200 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                        Signature Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {service.deliverables.slice(0, 2).map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-gold-600 dark:text-gold-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-850 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      {service.impactMetric.split(' ')[0]} {service.impactMetric.split(' ')[1]}
                    </span>
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-gold-700 dark:text-gold-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 border border-gold-500/40 text-gold-800 dark:text-gold-300 hover:text-gold-900 dark:hover:text-gold-200 text-xs font-semibold uppercase tracking-widest transition-all shadow-sm"
            >
              <span>Explore All Practice Areas & Cost Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PRACTITIONER SPOTLIGHT: ELENA VANCE, CMA */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gold-500/10 rounded-2xl filter blur-xl transform -rotate-2" />
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-slate-900">
                  <img
                    src={SITE_CONFIG.practitioner.avatarUrl}
                    alt={SITE_CONFIG.practitioner.name}
                    className="w-full h-[460px] object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40 rounded-full inline-block mb-2">
                      Managing Principal
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {SITE_CONFIG.practitioner.name}
                    </h3>
                    <p className="text-xs text-gold-400 font-medium">
                      {SITE_CONFIG.practitioner.credentials} • Certified Management Accountant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative & Authority Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 font-mono">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                Direct Principal Access. <br />
                <span className="gold-gradient-text">Zero Delegated Junior Churn.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {SITE_CONFIG.practitioner.summary}
              </p>

              <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 italic text-slate-700 dark:text-slate-300 text-sm border-l-4 border-l-gold-500 shadow-sm">
                "{SITE_CONFIG.practitioner.signatureQuote}"
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 shadow-sm">
                  <span className="text-gold-700 dark:text-gold-400 font-serif font-bold text-lg block">18+ Years</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">FP&A Leadership & Fortune 500 VP Operations</span>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 shadow-sm">
                  <span className="text-gold-700 dark:text-gold-400 font-serif font-bold text-lg block">$650M Entity Scale</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Direct Budget Stewardship & Bank Covenants</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 border border-gold-500/40 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Read Full Executive Bio & Credentials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL MARQUEE & EXECUTIVE ENDORSEMENTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-100 dark:bg-slate-925 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
              Verified Executive Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Testimonies from the Boardroom
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
              Feedback from private equity operating partners, manufacturing CEOs, and venture sponsors.
            </p>
          </div>

          {/* Interactive Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl dark:shadow-2xl overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-200 dark:text-slate-800 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-bold uppercase tracking-wider">
                  Impact Highlight: {SITE_CONFIG.testimonials[activeTestimonial].highlight}
                </span>

                <p className="text-base sm:text-lg lg:text-xl text-slate-800 dark:text-slate-100 font-serif italic leading-relaxed">
                  "{SITE_CONFIG.testimonials[activeTestimonial].quote}"
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">
                      {SITE_CONFIG.testimonials[activeTestimonial].author}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {SITE_CONFIG.testimonials[activeTestimonial].title}, {SITE_CONFIG.testimonials[activeTestimonial].company}
                    </p>
                    <span className="text-[10px] text-gold-700 dark:text-gold-400/80 font-mono">
                      {SITE_CONFIG.testimonials[activeTestimonial].segment}
                    </span>
                  </div>

                  {/* Switcher Buttons */}
                  <div className="flex items-center gap-2">
                    {SITE_CONFIG.testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeTestimonial === idx 
                            ? "bg-gold-500 dark:bg-gold-400 w-8" 
                            : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                        }`}
                        aria-label={`View testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL EXECUTIVE CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-5xl mx-auto rounded-2xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-850 dark:to-slate-950 border border-gold-500/40 p-8 sm:p-14 text-center relative shadow-xl dark:shadow-2xl">
          <div className="space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 font-mono block">
              Private Executive Retainers & Briefings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Ready to Upgrade from Rearview Bookkeeping to Forward-Looking Capital Alpha?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential preliminary diagnostic with Elena Vance, CMA. Available in-person at Suite 400 or via secure high-bandwidth telepresence.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all shadow-xl"
              >
                Schedule Diagnostic Consultation
              </Link>
              <Link
                to="/office"
                className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-800 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-750 rounded-lg transition-all"
              >
                Visit Suite 400 Office
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
