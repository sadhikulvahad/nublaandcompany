import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  TrendingUp, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Sparkles 
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      
      {/* 1. ABOUT HEADER BANNER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 xl:px-16 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-radial-gradient dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              Executive Profile & Credential Authority
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Elena Vance, <span className="gold-gradient-text">CMA, CSCA</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Managing Principal of Vance Management Accounting & Strategic Advisory. Dedicated to transforming corporate financial statements into forward-looking competitive moats.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE BIOGRAPHY & PHILOSOPHY */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Portrait & Credentials Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-slate-900 relative">
                <img
                  src={SITE_CONFIG.practitioner.avatarUrl}
                  alt={SITE_CONFIG.practitioner.name}
                  className="w-full h-[480px] object-cover object-top filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-mono block">
                    Institute of Management Accountants
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Elena Vance, CMA
                  </h3>
                  <p className="text-xs text-slate-300">
                    Managing Principal • Financial District Office
                  </p>
                </div>
              </div>

              {/* Verified Credentials Box */}
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-2 font-mono">
                  <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                  Accredited Designations
                </h4>
                <div className="space-y-3">
                  {SITE_CONFIG.practitioner.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="pb-3 border-b border-slate-200 dark:border-slate-850 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{cert.title}</span>
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-gold-500/20 text-gold-800 dark:text-gold-300 rounded border border-gold-500/30">
                          {cert.acronym}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1 font-medium">{cert.issuer}</span>
                      <p className="text-xs text-slate-600 dark:text-slate-500 leading-normal">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Narrative Story & Career Evolution */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 font-mono">
                The Advisory Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                Precision Cost Architecture Meets Board-Level Strategic Vision
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                {SITE_CONFIG.practitioner.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Callout Quote Box */}
              <div className="p-6 rounded-xl bg-slate-100 dark:bg-slate-900 border-l-4 border-l-gold-500 border border-slate-200 dark:border-slate-800 italic text-slate-900 dark:text-white text-base sm:text-lg font-serif shadow-sm">
                "{SITE_CONFIG.practitioner.signatureQuote}"
              </div>

              {/* The Three Operating Commitments */}
              <div className="pt-4 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono">
                  The Vance Standard of Client Engagement
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 space-y-2 shadow-sm">
                    <span className="font-semibold text-slate-900 dark:text-white block">100% Principal Execution</span>
                    <p className="text-slate-600 dark:text-slate-400">
                      No delegation to junior associates. Your enterprise financial architecture is handled exclusively by Elena Vance.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 space-y-2 shadow-sm">
                    <span className="font-semibold text-slate-900 dark:text-white block">Strict Fiduciary Non-Disclosure</span>
                    <p className="text-slate-600 dark:text-slate-400">
                      Institutional air-gapped terminals and strict non-compete buffers ensure proprietary strategy never leaks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all shadow-md"
                >
                  <span>Inquire for Advisory Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CMA RIGOR BREAKDOWN: 3 PILLARS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-100 dark:bg-slate-925 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
              Academic & Operational Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              The Three Pillars of CMA Rigor
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
              Certified Management Accountants are tested, certified, and governed under the highest international standards of strategic financial leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-850 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                1. Predictive FP&A & Scenario Modeling
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Mastery over 13-week rolling cash forecasts, Monte Carlo sensitivity engines, capital allocation hurdles (WACC), and debt covenant stress tests.
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Variance Analysis & Forecast Precision</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>M&A Strategic Integration Models</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-850 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                2. Activity-Based Cost Architecture
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                De-averaging general overhead into empirical cost pools and cost drivers. Uncovering customer and product profitability to eliminate margin dilution.
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Cost-Volume-Profit (CVP) Sensitivity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Zero-Base Expenditure Rationalization</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 transition-all space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-850 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                3. Internal Controls & Capital Governance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Designing COSO-compliant control environments, treasury wire verification, segregation of financial duties, and comprehensive fiduciary risk mitigation.
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Enterprise Risk Management (ERM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Institutional Pre-Audit Readiness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAREER MILESTONES TIMELINE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
              Eighteen Years of Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Career Milestone Timeline
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
            {SITE_CONFIG.milestones.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-gold-500 group-hover:bg-gold-400 transition-colors shadow-md" />
                
                {/* Year Badge */}
                <div className="md:absolute md:-left-32 md:top-0 md:text-right w-24">
                  <span className="text-xs font-mono font-bold text-gold-800 dark:text-gold-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 inline-block shadow-sm">
                    {item.year}
                  </span>
                </div>

                <div className="rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-850 p-6 space-y-3 hover:border-gold-500/30 transition-all shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif">
                      {item.role}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {item.institution}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.highlights.map((hl, hIdx) => (
                      <span key={hIdx} className="text-[11px] px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-750">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ETHICS & FIDUCIARY CHARTER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-925 transition-colors duration-300">
        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-gold-500/30 p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 mx-auto flex items-center justify-center text-gold-600 dark:text-gold-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            The IMA Statement of Ethical Professional Practice
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Elena Vance adheres strictly to the four core ethical principles of the Institute of Management Accountants: <strong>Competence, Confidentiality, Integrity, and Credibility</strong>. All engagements are sealed with bilateral non-disclosure agreements prior to reviewing proprietary ledgers.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all"
            >
              <span>Initiate Confidential Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
