import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Calendar, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";
import { SITE_CONFIG, type InsightArticle } from "../config/siteConfig";

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ["All", "Cost Engineering", "FP&A Strategy", "Executive Governance"];

  const filteredArticles = selectedCategory === "All"
    ? SITE_CONFIG.insights
    : SITE_CONFIG.insights.filter(article => article.category === selectedCategory);

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-radial-gradient dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              Executive Financial Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Strategic Perspectives & <span className="gold-gradient-text">Thought Leadership</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Original analytical commentary on activity-based costing, liquidity velocity, and boardroom capital architecture authored by Elena Vance, CMA.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR BAR */}
      <section className="bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-900 py-4 px-4 sm:px-6 lg:px-8 sticky top-[72px] z-30 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-slate-900 text-gold-800 dark:text-gold-300 border border-gold-500/40 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-500 font-mono hidden md:inline">
            Showing {filteredArticles.length} Editorial Briefings
          </span>
        </div>
      </section>

      {/* 3. EDITORIAL ARTICLES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-925 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-md dark:shadow-none hover:-translate-y-1.5 hover:shadow-2xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded bg-gold-500/10 text-gold-800 dark:text-gold-300 border border-gold-500/25 font-mono text-[10px] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-gold-700 dark:group-hover:text-gold-200 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Key takeaway preview */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-1">
                      Key Takeaway
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                      "{article.keyTakeaways[0]}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-850 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 dark:text-gold-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span>Read Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FULL ARTICLE READING MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 border border-gold-500/40 rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-800 dark:text-gold-300 border border-gold-500/30 text-[10px] font-mono uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                  • {activeArticle.readTime}
                </span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-6 text-slate-700 dark:text-slate-300">
              <div className="space-y-3">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Published {activeArticle.date}</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-2 pt-1 text-xs text-gold-700 dark:text-gold-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authored by Elena Vance, CMA, CSCA</span>
                </div>
              </div>

              {/* Summary Highlight */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {activeArticle.summary}
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Executive Takeaways Box */}
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-gold-500/30 space-y-3 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400 font-mono">
                  Boardroom Takeaways & Implementation Guardrails
                </h4>
                <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200">
                  {activeArticle.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 dark:text-gold-400 mt-0.5 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeArticle.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-[11px] px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-750">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Vance Advisory Strategic Dispatch
              </span>
              <Link
                to="/contact"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-md"
              >
                Discuss This Topic With Elena
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
