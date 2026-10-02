import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PieChart, 
  LineChart, 
  Briefcase, 
  Gauge, 
  Coins, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  Sparkles 
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Services: React.FC = () => {
  // Interactive Cost Recovery & ROI Estimator State
  const [revenueMillion, setRevenueMillion] = useState(40);
  const [operatingOverheadPct, setOperatingOverheadPct] = useState(28);

  // Derived Calculations
  const annualOverhead = (revenueMillion * 1000000 * (operatingOverheadPct / 100));
  const estimatedSavingsMin = Math.round(annualOverhead * 0.12);
  const estimatedSavingsMax = Math.round(annualOverhead * 0.18);
  const workingCapitalFreed = Math.round((revenueMillion * 1000000) * 0.045);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "PieChart": return <PieChart className="w-6 h-6" />;
      case "LineChart": return <LineChart className="w-6 h-6" />;
      case "Briefcase": return <Briefcase className="w-6 h-6" />;
      case "Gauge": return <Gauge className="w-6 h-6" />;
      case "Coins": return <Coins className="w-6 h-6" />;
      case "ShieldAlert": return <ShieldAlert className="w-6 h-6" />;
      default: return <PieChart className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      
      {/* 1. SERVICES HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 xl:px-16 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-radial-gradient dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              Strategic Advisory Capabilities
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Executive Financial Architecture & <span className="gold-gradient-text">Practice Areas</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Bespoke management accounting engagements engineered specifically for high-growth enterprises, private equity-backed portfolio companies, and corporate boards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {SITE_CONFIG.services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-md dark:shadow-none hover:shadow-2xl relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:bg-gold-500/10 group-hover:border-gold-500/40 transition-colors shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30 px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-gold-700 dark:group-hover:text-gold-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-850/50 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-700 dark:text-gold-400 block mb-1">
                      Expected Value Realization
                    </span>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {service.impactMetric}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 block font-mono">
                      Core Scope & Tangible Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-850">
                    <strong className="text-slate-800 dark:text-slate-300">Ideal Client Profile: </strong>
                    {service.idealFor}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all shadow-md"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROI & COST ARCHITECTURE ESTIMATOR WIDGET */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-925 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-gold-500/40 p-8 sm:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400">
                Diagnostic Modeling Engine
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
              Enterprise Capital Recovery & Margin Lift Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
              Model the empirical EBITDA and working capital liberation achievable through Activity-Based Costing (ABC) and cash conversion cycle optimization.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Annual Enterprise Revenue
                    </label>
                    <span className="text-sm font-bold font-mono text-gold-700 dark:text-gold-300">
                      ${revenueMillion}M ARR
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={revenueMillion}
                    onChange={(e) => setRevenueMillion(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>$10M</span>
                    <span>$80M</span>
                    <span>$150M</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Estimated Operating Overhead (SG&A + Indirect)
                    </label>
                    <span className="text-sm font-bold font-mono text-gold-700 dark:text-gold-300">
                      {operatingOverheadPct}% (${(annualOverhead / 1000000).toFixed(1)}M)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="45"
                    step="1"
                    value={operatingOverheadPct}
                    onChange={(e) => setOperatingOverheadPct(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>15%</span>
                    <span>30%</span>
                    <span>45%</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  *Estimates are indexed against verified historical outcomes achieved across Vance Advisory client engagements utilizing Activity-Based Costing and 13-week cash velocity frameworks.
                </div>
              </div>

              {/* Real-time Calculation Projection */}
              <div className="lg:col-span-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-gold-500/30 p-6 sm:p-8 space-y-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 font-mono block">
                  Projected Annual Capital Recapture
                </span>

                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white block">
                    ${(estimatedSavingsMin / 1000).toLocaleString()}k – ${(estimatedSavingsMax / 1000).toLocaleString()}k
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Estimated Direct EBITDA Margin Expansion (12% – 18%)
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-850 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Working Capital Freed:</span>
                    <span className="text-slate-900 dark:text-white font-bold font-mono text-sm">
                      ~${(workingCapitalFreed / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Forecast Variance:</span>
                    <span className="text-slate-900 dark:text-white font-bold font-mono text-sm">
                      &lt; 1.0% Threshold
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/contact?revenue=${revenueMillion}M&service=Activity-Based%20Costing`}
                    className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg block transition-all shadow-md"
                  >
                    Request Diagnostic for ${revenueMillion}M Entity
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT MODELS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2 font-mono">
              Structured Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Advisory Engagement Structures
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
              We offer flexible, high-impact retainers designed around executive priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 dark:text-gold-400 block">
                Tier I: Targeted Sprint
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                90-Day Cost & FP&A Diagnostic
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                A rapid forensic audit of your cost architecture, general ledger allocations, and cash conversion cycle, culminating in an actionable boardroom roadmap.
              </p>
              <div className="pt-2 text-xs text-slate-700 dark:text-slate-300">
                <strong>Timeline: </strong> 6 to 12 Weeks Intensive
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border-2 border-gold-500/60 shadow-xl space-y-4 relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gold-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                Most Requested
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 dark:text-gold-400 block">
                Tier II: Executive Governance
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Retained Fractional CFO & CMA
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ongoing monthly partnership. Elena Vance attends board meetings, manages lender covenants, directs the internal finance team, and updates the 13-week model.
              </p>
              <div className="pt-2 text-xs text-slate-700 dark:text-slate-300">
                <strong>Commitment: </strong> 6 or 12-Month Dedicated Retainer
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 dark:text-gold-400 block">
                Tier III: Transaction Advisory
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                M&A & Recapitalization Readiness
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pre-deal quality-of-earnings preparation, normalization of EBITDA add-backs, and clean-room carve-out financial modeling for PE sponsors and founders.
              </p>
              <div className="pt-2 text-xs text-slate-700 dark:text-slate-300">
                <strong>Format: </strong> Milestone & Transaction-Driven
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
