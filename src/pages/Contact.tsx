import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  ChevronDown, 
  Sparkles,
  Lock,
  ArrowRight
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  // Controlled Form State
  const [formData, setFormData] = useState({
    fullName: "",
    corporateEmail: "",
    phone: "",
    company: "",
    revenueTier: SITE_CONFIG.consultation.revenueTiers[1],
    serviceInterest: SITE_CONFIG.consultation.serviceInterests[0],
    meetingFormat: "Suite 400 In-Person (Financial District)",
    timeline: SITE_CONFIG.consultation.timelineOptions[0],
    notes: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Initialize service interest from URL query parameter if available
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = SITE_CONFIG.consultation.serviceInterests.find(
        s => s.toLowerCase().includes(serviceParam.toLowerCase()) || serviceParam.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData(prev => ({ ...prev, serviceInterest: match }));
      }
    }
    const revenueParam = searchParams.get("revenue");
    if (revenueParam) {
      setFormData(prev => ({ ...prev, notes: `Initial diagnostic requested for ${revenueParam} ARR entity.` }));
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.corporateEmail.trim()) {
      newErrors.corporateEmail = "Corporate email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.corporateEmail)) {
      newErrors.corporateEmail = "Please enter a valid corporate email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company / organization name is required";
    if (!formData.phone.trim()) newErrors.phone = "Direct contact number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const faqs = [
    {
      q: "What is the typical retainer or fee architecture?",
      a: "Engagements are structured either as 90-day diagnostic sprints ($18k–$35k fixed scope) or ongoing executive retainers ($6k–$15k/month depending on enterprise complexity, board attendance frequency, and 13-week model updates). We do not bill ambiguous hourly fees."
    },
    {
      q: "How does Vance Advisory handle non-disclosure and conflict of interest checks?",
      a: "Before reviewing confidential ledgers or data rooms, a mutual Non-Disclosure Agreement (NDA) is executed. We enforce strict non-compete buffers preventing simultaneous engagement with direct industry competitors."
    },
    {
      q: "Does Elena Vance travel for on-site board meetings or transactions?",
      a: "Yes. While headquarters is located at Suite 400 in Metropolitan City, Elena routinely travels for board presentations, bank syndication meetings, and M&A negotiations across North America."
    },
    {
      q: "How does Elena Vance work alongside our existing external CPA firm?",
      a: "Elena operates as your internal strategic management accountant and fractional CFO. She does not replace your external CPA tax filer or auditor; rather, she elevates your internal numbers so your external CPA receives immaculate, pre-audited schedules."
    }
  ];

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      
      {/* 1. CONTACT HEADER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 xl:px-16 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-radial-gradient dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Lock className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
              Confidential Executive Consultation
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Direct Engagement & <span className="gold-gradient-text">Advisory Diagnostic</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Schedule a preliminary consultation with Elena Vance, CMA. All inquiries are received under immediate fiduciary non-disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & CONTACT DETAILS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Consultation Booking Form */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xl dark:shadow-2xl relative">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 mx-auto flex items-center justify-center text-gold-600 dark:text-gold-400 shadow-[0_0_30px_rgba(197,157,51,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                    Consultation Request Lodged
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong>. Elena Vance's executive concierge will review your briefing and contact you at <span className="text-gold-700 dark:text-gold-300 font-semibold">{formData.corporateEmail}</span> within one business day with calendar availability.
                  </p>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto shadow-sm">
                    <span className="font-semibold text-slate-900 dark:text-slate-300 block mb-1">Meeting Preference:</span>
                    <span>{formData.meetingFormat} • {formData.serviceInterest}</span>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Briefing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                      Executive Intake Questionnaire
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Please provide baseline corporate details to prepare our preliminary diagnostic.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name & Title *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Katherine Hayes, Chief Executive Officer"
                        className={`w-full bg-white dark:bg-slate-950 border ${errors.fullName ? "border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-gold-500/60"} rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={formData.corporateEmail}
                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                        placeholder="khayes@organization.com"
                        className={`w-full bg-white dark:bg-slate-950 border ${errors.corporateEmail ? "border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-gold-500/60"} rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {errors.corporateEmail && (
                        <span className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.corporateEmail}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Hayes Industrial Holdings"
                        className={`w-full bg-white dark:bg-slate-950 border ${errors.company ? "border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-gold-500/60"} rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Direct Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full bg-white dark:bg-slate-950 border ${errors.phone ? "border-rose-500" : "border-slate-300 dark:border-slate-800 focus:border-gold-500/60"} rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Annual Revenue Scale
                      </label>
                      <select
                        value={formData.revenueTier}
                        onChange={(e) => setFormData({ ...formData, revenueTier: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-gold-500/60 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none"
                      >
                        {SITE_CONFIG.consultation.revenueTiers.map((tier, idx) => (
                          <option key={idx} value={tier}>{tier}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Primary Advisory Area
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-gold-500/60 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none"
                      >
                        {SITE_CONFIG.consultation.serviceInterests.map((svc, idx) => (
                          <option key={idx} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Meeting Format Preference
                      </label>
                      <select
                        value={formData.meetingFormat}
                        onChange={(e) => setFormData({ ...formData, meetingFormat: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-gold-500/60 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none"
                      >
                        <option value="Suite 400 In-Person (Financial District)">
                          Suite 400 In-Person (Sovereign Tower)
                        </option>
                        <option value="Encrypted Video Telepresence">
                          Encrypted Video Telepresence (Air-gapped)
                        </option>
                        <option value="Executive Teleconference Briefing">
                          Direct Executive Teleconference Call
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Target Engagement Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-gold-500/60 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none"
                      >
                        {SITE_CONFIG.consultation.timelineOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Confidential Strategic Objectives or Context
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Outline key operational challenges, margin targets, or upcoming transaction timelines..."
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-gold-500/60 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                    <span>All submissions are encrypted in transit and subject to immediate bilateral NDA protections.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-slate-950 gold-gradient-button rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Encrypting & Transmitting..." : "Transmit Consultation Request"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Executive Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Office Box */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 space-y-6 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 block">
                  Direct Executive Desks
                </span>
                
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                  Headquarters & Concierge
                </h3>

                <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-gold-600 dark:text-gold-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block text-sm">{SITE_CONFIG.location.building}</strong>
                      <span>{SITE_CONFIG.location.suite}, {SITE_CONFIG.location.district}</span>
                      <span className="block text-slate-500 dark:text-slate-400">{SITE_CONFIG.location.city}, {SITE_CONFIG.location.statePostal}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-600 dark:text-gold-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Primary Advisory Desk:</span>
                      <a href={`tel:${SITE_CONFIG.location.phone}`} className="text-slate-900 dark:text-white font-semibold hover:text-gold-700 dark:hover:text-gold-300 text-sm">
                        {SITE_CONFIG.location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-600 dark:text-gold-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Confidential Inquiries:</span>
                      <a href={`mailto:${SITE_CONFIG.location.email}`} className="text-slate-900 dark:text-white font-semibold hover:text-gold-700 dark:hover:text-gold-300 text-sm">
                        {SITE_CONFIG.location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <Clock className="w-5 h-5 text-slate-400 dark:text-slate-500 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <span className="text-slate-800 dark:text-slate-200 font-medium block">Advisory Hours</span>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                        Monday – Thursday: 8:00 AM – 6:30 PM EST<br />
                        Friday: 8:00 AM – 4:00 PM EST<br />
                        <span className="text-gold-700 dark:text-gold-400 font-medium">Weekends: Boardroom Emergency Retainer Only</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suite 400 Invitation Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900/60 border border-gold-500/30 p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-gold-800 dark:text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                  <span>Grand Opening Invitation</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Complimentary parking valet and private concierge escort provided for all in-person visitors to Suite 400.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE FAQ ACCORDION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-925 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-700 dark:text-gold-400 block mb-2">
              Frequently Addressed Matters
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
              Executive Governance & Engagement Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white font-serif">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gold-600 dark:text-gold-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 pt-4 bg-slate-50/50 dark:bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
