export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  impactMetric: string;
  idealFor: string;
  badge?: string;
}

export interface MilestoneItem {
  year: string;
  role: string;
  institution: string;
  description: string;
  highlights: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'FP&A Strategy' | 'Cost Engineering' | 'Executive Governance' | 'Capital Advisory';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  segment: string;
  highlight: string;
}

export interface OfficeFeature {
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  icon: string;
  image: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Elena Vance",
    subtitle: "Management Accounting & Advisory",
    logo: {
      dark: "/logo-dark.svg",
      light: "/logo-light.svg",
    }
  },
  practitioner: {
    name: "Elena Vance",
    credentials: "CMA, CSCA",
    designation: "Certified Management Accountant & Managing Principal",
    bioHeadline: "Architecting fiscal resilience and capital efficiency for high-stakes enterprise leaders.",
    summary: "Elena Vance has spent over eighteen years orchestrating multi-million dollar margin turnarounds, architecting activity-based cost models, and advising executive boards across North America. As a Certified Management Accountant (CMA), her mandate transcends historical compliance: she operates as an offensive strategic partner to CEOs, private equity sponsors, and boards who demand predictive clarity.",
    fullBio: [
      "With a career rooted in complex industrial manufacturing, SaaS unit economics, and multi-entity corporate restructuring, Elena brings an engineering-grade precision to the balance sheet. She holds active CMA and CSCA (Certified in Strategy and Competitive Analysis) credentials through the Institute of Management Accountants (IMA).",
      "Prior to founding Vance Management Accounting & Strategic Advisory, Elena served as Vice President of Financial Planning & Strategic Analysis at a $650M multi-national logistics enterprise, where she engineered zero-based budgeting protocols that reclaimed 14.8% in EBITDA operating margins within 18 months.",
      "Her new private advisory office in Metropolitan City's Financial District represents the realization of a bespoke advisory model: direct, un-delegated access to senior strategic accounting intellect, free from billable-hour churn or junior staff pass-offs."
    ],
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    signatureQuote: "Accounting tells you where capital flowed yesterday. Management accounting dictates where capital must conquer tomorrow.",
    certifications: [
      {
        acronym: "CMA",
        title: "Certified Management Accountant",
        issuer: "Institute of Management Accountants (IMA)",
        description: "Global gold standard validating mastery of advanced financial planning, analysis, performance metrics, and professional ethics."
      },
      {
        acronym: "CSCA",
        title: "Certified in Strategy and Competitive Analysis",
        issuer: "Institute of Management Accountants (IMA)",
        description: "Specialized post-CMA credential demonstrating strategic synthesis, competitive landscape dissection, and sustainable strategy formulation."
      },
      {
        acronym: "FPA",
        title: "Advanced Financial Modeling Accreditation",
        issuer: "Wall Street Prep & Corporate Finance Institute",
        description: "Institutional-grade three-statement dynamic forecasting, debt schedule covenants, and M&A consolidation modeling."
      }
    ]
  },

  practice: {
    name: "Vance Management Accounting & Strategic Advisory",
    tagline: "Executive Cost Architecture • Predictive FP&A • Boardroom Advisory",
    established: "2026",
    mission: "Empowering visionary executives to turn fragmented financial data into unyielding competitive moats and predictable free cash flow.",
    keyMetrics: [
      { value: "$420M+", label: "Capital Allocation Analyzed" },
      { value: "18+", label: "Years Strategic FP&A Mastery" },
      { value: "99.4%", label: "Forecast Accuracy Threshold" },
      { value: "14.8%", label: "Average EBITDA Margin Lift" }
    ],
    pillars: [
      {
        title: "Predictive FP&A & 13-Week Cash Flow",
        description: "Dynamic driver-based models that anticipate liquidity inflection points long before they trigger operational distress.",
        icon: "TrendingUp"
      },
      {
        title: "Granular Cost Architecture & ABC",
        description: "Deconstructing opaque overhead to uncover true product, client, and operational unit economics through Activity-Based Costing.",
        icon: "Layers"
      },
      {
        title: "Internal Controls & Capital Governance",
        description: "Institutional-grade COSO frameworks designed to eliminate leakage, fraud risk, and regulatory vulnerability.",
        icon: "ShieldCheck"
      }
    ]
  },

  location: {
    building: "The Sovereign Financial Tower",
    suite: "Suite 400",
    district: "Financial District",
    city: "Metropolitan City",
    statePostal: "MC 10004",
    fullAddress: "Suite 400, The Sovereign Tower, Financial District, Metropolitan City, MC 10004",
    phone: "+1 (555) 234-5678",
    email: "office@vancecma.com",
    conciergeEmail: "concierge@vancecma.com",
    hours: [
      { days: "Monday – Thursday", time: "08:00 AM – 06:30 PM EST" },
      { days: "Friday", time: "08:00 AM – 04:00 PM EST" },
      { days: "Saturday – Sunday", time: "By Executive Appointment Only" }
    ],
    transit: "Subway: Line 1, 4, 5 (Wall St / Financial Center) • Valet parking accessible via North Concourse",
    coordinates: { lat: 40.7075, lng: -74.0090 }
  },

  featuredDispatch: {
    headline: "GST Compliance & Strategic Tax Advisory",
    subheadline: "Empirical Tax Engineering & Corporate Governance",
    announcement: "Bespoke Goods & Services Tax (GST) architecture, Input Tax Credit (ITC) reconciliation, activity-based costing, and 13-week cash forecasting for high-growth enterprises.",
    date: "Active Practice",
    receptionDetails: "Private strategy briefings and tax diagnostic sessions are currently being scheduled for mid-market founders, PE operating partners, and C-level executives."
  },
  // Maintained for backward compatibility
  grandOpening: {
    headline: "GST Compliance & Strategic Tax Advisory",
    subheadline: "Empirical Tax Engineering & Corporate Governance",
    announcement: "Bespoke Goods & Services Tax (GST) architecture, Input Tax Credit (ITC) reconciliation, activity-based costing, and 13-week cash forecasting for high-growth enterprises.",
    date: "Active Practice",
    receptionDetails: "Private strategy briefings and tax diagnostic sessions are currently being scheduled for mid-market founders, PE operating partners, and C-level executives."
  },

  officeFeatures: [
    {
      title: "The Strategic Boardroom",
      subtitle: "Capacity: 14 Principals",
      description: "Equipped with dual 85-inch 4K analytical displays, encrypted telepresence, and acoustic isolation for high-stakes M&A and board strategy deliberations.",
      specs: ["Acoustic Rating STC-55", "Encrypted Dual Telepresence", "Live Financial Dashboard Projection"],
      icon: "Users",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Confidential Financial Vault",
      subtitle: "Strict Discretion & Forensic Privacy",
      description: "Dedicated climate-controlled secure repository for proprietary physical records, compliance audits, and sensitive capitalization documents.",
      specs: ["Biometric Access Control", "Air-gapped Client Terminals", "Clean-Desk Forensic Chamber"],
      icon: "Lock",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Executive Client Salon & Lounge",
      subtitle: "Comfort Meets Discretion",
      description: "A refined hospitality lounge providing artisanal espresso, private teleconference booths, and dedicated concierge reception.",
      specs: ["Private Concierge Greeter", "Curated Cigar & Single Malt Library", "Secured High-Bandwidth Wi-Fi"],
      icon: "Coffee",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
    }
  ] as OfficeFeature[],

  services: [
    {
      id: "gst-tax-advisory",
      title: "GST & Corporate Tax Advisory",
      badge: "Featured Service",
      shortDesc: "Strategic GST filing, Input Tax Credit (ITC) reconciliation, and corporate indirect tax optimization.",
      fullDesc: "Navigating complex Goods & Services Tax (GST) regulations, cross-border transactions, and ITC reconciliation demands engineering-grade precision. We structure tax-efficient workflows that maximize input tax recovery, prevent audit penalties, and maintain seamless monthly compliance.",
      iconName: "ShieldAlert",
      impactMetric: "Zero-penalty compliance & max Input Tax Credit (ITC) recovery",
      idealFor: "High-growth enterprises, multi-state B2B entities, importers/exporters, and mid-market corporations.",
      deliverables: [
        "GST Return Architecture & ITC Reconciliation Audit",
        "Indirect Tax Liability & Exposure Diagnostic",
        "Audit-Ready Tax Ledger Controls & Compliance Blueprint",
        "Cross-Border & Inter-State GST Optimization"
      ]
    },
    {
      id: "cost-architecture",
      title: "Strategic Cost Architecture & ABC",
      badge: "Core Specialization",
      shortDesc: "Deconstruct buried overhead to pinpoint the true cost-to-serve per SKU, client, and operational channel.",
      fullDesc: "Traditional absorption accounting allocates overhead using coarse averages, leading to silent subsidization of money-losing clients and products. We build bespoke Activity-Based Costing (ABC) models that expose hidden operational friction, optimize vendor spend, and re-engineer unit-level gross margins.",
      iconName: "PieChart",
      impactMetric: "Avg. 18-24% margin expansion on target product lines",
      idealFor: "Manufacturing, logistics, multi-channel distribution, and B2B tech organizations with complex cost structures.",
      deliverables: [
        "Granular Activity-Based Costing (ABC) Ledger Matrix",
        "Client & Product Profitability Waterfall Models",
        "Zero-Base Overhead Rationalization Audit",
        "Direct Labor vs. Indirect Absorption Sensitivity Curves"
      ]
    },
    {
      id: "predictive-fpa",
      title: "Enterprise FP&A & 13-Week Cash Forecasts",
      badge: "Liquidity Resilience",
      shortDesc: "Forward-looking scenario engines that replace backward-looking book reports with high-fidelity cash velocity insight.",
      fullDesc: "Cash is the lifeblood of enterprise sovereignty. We construct proprietary 13-week rolling cash forecasts and three-statement financial models tailored to your debt covenants, working capital seasonality, and growth CAPEX demands.",
      iconName: "LineChart",
      impactMetric: "99.4% average 30-day cash forecasting precision",
      idealFor: "Firms navigating rapid scaling, post-acquisition leverage, cyclical troughs, or debt refinancing.",
      deliverables: [
        "Dynamic 13-Week Rolling Cash Flow Model (Direct Method)",
        "Driver-Based 3-Statement Budgeting Framework",
        "Monte Carlo Sensitivity & Downside Breakeven Engine",
        "Bank Covenant Compliance & Runway Monitor"
      ]
    },
    {
      id: "fractional-cfo",
      title: "Fractional CFO & Board Advisory",
      badge: "Executive Leadership",
      shortDesc: "High-caliber financial stewardship in the boardroom without the seven-figure overhead of a full-time executive.",
      fullDesc: "Elena Vance serves as your dedicated strategic finance confidante—participating directly in board meetings, steering audit committees, presenting to lenders, and structuring capital calls with unwavering executive poise.",
      iconName: "Briefcase",
      impactMetric: "Institutional-grade financial governance for mid-market CEOs",
      idealFor: "Middle-market enterprises ($15M–$150M ARR), sponsor-backed portfolio companies, and family offices.",
      deliverables: [
        "Monthly Board-Pack Creation & Executive Commentary",
        "Lender & Creditor Negotiation Support",
        "Finance Team Upskilling & Hiring Oversight",
        "Capital Structure Optimization & Working Capital Policies"
      ]
    },
    {
      id: "kpi-dashboards",
      title: "C-Suite KPI Cockpits & Decision Architecture",
      badge: "Real-Time Intelligence",
      shortDesc: "Transform raw ERP and ledger chaos into an intuitive visual command center for executive leadership.",
      fullDesc: "Most executive dashboards are cluttered with vanity metrics. We distill your entire operational cadence into 6–8 critical leading indicators (CLIs) that highlight operational variance before it infects quarterly earnings.",
      iconName: "Gauge",
      impactMetric: "Reduces executive report review cycle from 12 days to real-time",
      idealFor: "CEOs and COOs frustrated with laggy month-end financial packages.",
      deliverables: [
        "Executive Single-Pane-of-Glass Financial Cockpit",
        "Daily Cash & Margin Velocity Trackers",
        "Automated Variance Alerting & Standard Deviation Guardrails",
        "ERP Integration & BI Data Cleansing Blueprint"
      ]
    },
    {
      id: "working-capital",
      title: "Working Capital Engineering & DSO Compression",
      badge: "Balance Sheet Optimization",
      shortDesc: "Unlock millions in trapped liquidity across Accounts Receivable, Inventory, and Accounts Payable.",
      fullDesc: "Through rigorous Cash Conversion Cycle (CCC) analysis, we diagnose structural collection bottlenecks, renegotiate vendor supplier terms, and calibrate inventory safety buffers without risking stockouts.",
      iconName: "Coins",
      impactMetric: "Average 14-day compression in Cash Conversion Cycle",
      idealFor: "Inventory-heavy, distribution, or milestone-billing B2B businesses.",
      deliverables: [
        "Cash Conversion Cycle (CCC) Deep-Dive Diagnostic",
        "DSO (Days Sales Outstanding) Acceleration Protocol",
        "Vendor Terms & Early-Payment Discount ROI Matrix",
        "Obsolete Inventory Write-Down & Recovery Strategy"
      ]
    },
    {
      id: "governance-controls",
      title: "Internal Controls & Forensic Risk Governance",
      badge: "Fiduciary Defense",
      shortDesc: "Armor your business against internal leakage, wire fraud, and audit deficiencies with COSO-aligned controls.",
      fullDesc: "As an enterprise scales, loose authorization policies create existential vulnerabilities. We construct impenetrable segregation of duties, delegation of authority matrices, and continuous internal control audits.",
      iconName: "ShieldAlert",
      impactMetric: "100% clean audit trail readiness across 40+ engagements",
      idealFor: "Companies preparing for institutional debt, audit compliance, or PE due diligence.",
      deliverables: [
        "COSO-Compliant Internal Control Matrix",
        "Delegation of Financial Authority (DOFA) Framework",
        "Treasury & Dual-Control Wire Security Protocols",
        "Pre-Audit Due Diligence Readiness Dossier"
      ]
    }
  ] as ServiceItem[],

  milestones: [
    {
      year: "2026",
      role: "Founder & Managing Principal",
      institution: "Vance Management Accounting & Strategic Advisory",
      description: "Opened the premier corporate office at Suite 400, Sovereign Tower in Metropolitan City, serving private equity, manufacturing, and middle-market leadership.",
      highlights: ["Inauguration of Suite 400", "Advising $100M+ client portfolios"]
    },
    {
      year: "2021 – 2025",
      role: "Vice President of FP&A & Strategic Operations",
      institution: "TransContinental Logistics Group ($650M Entity)",
      description: "Directed a corporate finance team of 18 analysts, leading a company-wide restructuring and rolling cash forecast that elevated EBITDA margins from 7.2% to 14.8%.",
      highlights: ["Managed $650M enterprise budget", "Led multi-bank syndicated covenant renegotiations"]
    },
    {
      year: "2018",
      role: "Dual Credential Conferred (CMA & CSCA)",
      institution: "Institute of Management Accountants (IMA)",
      description: "Earned the Certified Management Accountant designation with top-percentile ranking, followed immediately by the post-graduate CSCA strategic qualification.",
      highlights: ["Top 5% score nationally on Part 2 Strategic Finance", "IMA Member in Good Standing"]
    },
    {
      year: "2014 – 2020",
      role: "Director of Cost Architecture & Operational Finance",
      institution: "Apex Advanced Manufacturing Corp.",
      description: "Spearheaded Activity-Based Costing adoption across six manufacturing facilities, eliminating $9.4M in unallocated overhead losses.",
      highlights: ["Designed enterprise standard costing system", "Direct liaison to Board Audit Committee"]
    },
    {
      year: "2008 – 2013",
      role: "Senior Financial Analyst & Corporate Controller",
      institution: "Pinnacle Capital & Industrial Holdings",
      description: "Built three-statement models, managed general ledger closures, conducted vendor pricing forensics, and supervised external audit handoffs.",
      highlights: ["Conducted 12 M&A financial consolidations", "Promoted twice in 4 years"]
    }
  ] as MilestoneItem[],

  cmaRigorComparison: {
    title: "The CMA Strategic Edge: Why Management Accounting Differs",
    subtitle: "Traditional compliance accounting looks in the rearview mirror. Elena Vance, CMA designs the road ahead.",
    comparisonPoints: [
      {
        dimension: "Temporal Focus",
        traditional: "Historical & Backward-Looking (What happened last quarter?)",
        cma: "Predictive & Prescriptive (Where will capital be generated next quarter?)"
      },
      {
        dimension: "Primary Objective",
        traditional: "Tax compliance, statutory filing, and GAAP statutory record keeping",
        cma: "Value creation, EBITDA margin expansion, and capital allocation strategy"
      },
      {
        dimension: "Costing Methodology",
        traditional: "Broad overhead allocation across average department headcounts",
        cma: "Activity-Based Costing (ABC) isolating true unit-level cost drivers"
      },
      {
        dimension: "Reporting Cadence",
        traditional: "Standard static monthly close 15-20 days after month-end",
        cma: "Dynamic 13-week rolling cash forecasts & real-time executive cockpits"
      },
      {
        dimension: "Boardroom Role",
        traditional: "Scorekeeper presenting balance sheets",
        cma: "Strategic offensive co-pilot driving M&A, CAPEX, and pricing architecture"
      }
    ]
  },

  insights: [
    {
      id: "zero-base-cost-modeling",
      title: "Beyond the Balance Sheet: Zero-Base Cost Modeling for Modern Enterprise Margins",
      category: "Cost Engineering",
      readTime: "7 min read",
      date: "September 2026",
      summary: "Why traditional percentage-increment budgeting silently institutionalizes operational waste, and how mid-market firms can reconstruct expenses from zero to safeguard margins.",
      content: [
        "In the typical corporate planning cycle, department leaders look at last year's expenditures and blindly tack on a 3% to 5% inflationary buffer. Over a three-to-five year horizon, this administrative inertia calcifies bloated software subscriptions, redundant vendor retainers, and obsolete operational overhead.",
        "Zero-Base Cost Modeling (ZBCM) flips the burden of proof. Every dollar requested must justify its explicit return on invested capital. At Vance Advisory, we don't look at budget variances as mere accounting anomalies; we treat them as capital leakages that erode enterprise valuation multiples.",
        "By enforcing activity-based drivers rather than departmental headcounts, organizations routinely uncover 12% to 18% in addressable overhead within the first 90 days. This capital can then be redeployed into high-yield expansion, automation, or direct equity distributions."
      ],
      keyTakeaways: [
        "Incremental budgeting rewards inefficiencies by indexing against historical mistakes.",
        "Zero-Base Costing links every general ledger entry directly to operational outputs.",
        "Typical mid-market implementation uncovers 12-18% in non-essential recurring overhead."
      ],
      tags: ["Cost Architecture", "EBITDA Optimization", "Zero-Base Budgeting"]
    },
    {
      id: "thirteen-week-cash-forecast",
      title: "The Anatomy of a Rolling 13-Week Cash Forecast: The CFO's Survival Compass",
      category: "FP&A Strategy",
      readTime: "6 min read",
      date: "August 2026",
      summary: "A GAAP balance sheet will tell you if you are solvent on paper; only a direct-method 13-week rolling cash model will tell you if you will meet payroll in November.",
      content: [
        "Accrual accounting is indispensable for compliance, but it routinely obfuscates immediate liquidity peril. A firm can post record quarterly GAAP net income while hurtling directly toward an overdraft crisis if milestone billings stall or inventory turns decelerate.",
        "The 13-week rolling cash flow model represents the empirical heartbeat of corporate treasury. Spanning exactly one fiscal quarter, it bridges the gap between daily bank balance firefighting and high-level 5-year strategic plans.",
        "In this analysis, Elena Vance details the exact architecture of direct cash receipts versus disbursements, timing lags in customer collections (DSO), and the implementation of dynamic variance checks that maintain a 99%+ accuracy standard."
      ],
      keyTakeaways: [
        "Paper profitability does not equal spendable liquidity in high-growth environments.",
        "The 13-week timeframe corresponds exactly to the behavioral payment cycle of modern B2B receivables.",
        "Continuous feedback loops between forecasted collections and actual bank lockbox receipts prevent covenant breaches."
      ],
      tags: ["Cash Flow", "Treasury", "Predictive FP&A", "Working Capital"]
    },
    {
      id: "boardroom-internal-controls",
      title: "Decoupling Overhead: Modern Activity-Based Costing for High-Growth Firms",
      category: "Executive Governance",
      readTime: "8 min read",
      date: "July 2026",
      summary: "How rapid organizational scale quietly erodes unit margins—and why executive leadership must install forensic attribution before pursuing additional top-line revenue.",
      content: [
        "Growth for the sake of growth is the ideology of a cancer cell. Many middle-market enterprises celebrate a 40% year-over-year revenue surge, only to discover at fiscal year-end that bottom-line cash contracted. This is the classic 'scale trap'.",
        "As product lines proliferate and custom client requests are accommodated, indirect costs skyrocket: specialized packaging, non-standard customer support, rush freight charges, and administrative exceptions. Without Activity-Based Costing, these costs are dumped into general administrative pools.",
        "Elena Vance illustrates how to construct an attribution model that reveals your 'whale clients'—the 10% of customers who quietly generate 90% of your actual profit, while identifying the high-maintenance accounts that drain team morale and destroy margin."
      ],
      keyTakeaways: [
        "Top-line expansion without cost attribution frequently accelerates margin destruction.",
        "Traditional gross margin hides customer-level cost-to-serve disparities.",
        "Pruning or repricing the bottom 15% of margin-dilutive accounts instantly boosts enterprise cash flow."
      ],
      tags: ["Activity-Based Costing", "Board Governance", "Pricing Architecture"]
    }
  ] as InsightArticle[],

  testimonials: [
    {
      id: "1",
      quote: "Elena Vance reconstructed our entire cost architecture ahead of our Series B recapitalization. Her activity-based costing models identified $3.2M in recurring margin dilution that our previous audit firm simply failed to see. She is an executive asset in the truest sense.",
      author: "Marcus Sterling",
      title: "Chief Executive Officer",
      company: "Sterling Industrial Robotics",
      segment: "Industrial Tech ($85M ARR)",
      highlight: "$3.2M Margin Recaptured"
    },
    {
      id: "2",
      quote: "As a private equity operating partner, I demand financial clarity that holds up to institutional scrutiny. Elena's 13-week cash forecasting model is the most precise tool in our portfolio companies' arsenals. Her presence at our board table is invaluable.",
      author: "Vivienne Laurent",
      title: "Operating Managing Director",
      company: "Aegis Horizon Private Capital",
      segment: "Middle-Market PE Sponsor",
      highlight: "Institutional Board Governance"
    },
    {
      id: "3",
      quote: "Transitioning our accounting from standard backward-looking reporting to Elena's forward-looking FP&A cockpit was like turning on high-beams on a dark highway. We cut our monthly review cycle by 70% and doubled our free cash flow conversion.",
      author: "David Chen",
      title: "Founder & Chairman",
      company: "AeroDynamics Global Distribution",
      segment: "Global Supply Chain ($120M Rev)",
      highlight: "2x Free Cash Flow Lift"
    }
  ] as TestimonialItem[],

  consultation: {
    headline: "Schedule a Confidential Strategic Consultation",
    subheadline: "Directly engage Elena Vance, CMA for a preliminary diagnostic of your organization's capital structure and cost architecture.",
    revenueTiers: [
      "Emerging Enterprise ($5M – $15M ARR)",
      "Mid-Market ($15M – $50M ARR)",
      "Upper Mid-Market ($50M – $200M ARR)",
      "Corporate / Sponsor Portfolio ($200M+ ARR)",
      "Private Equity / Family Office Advisory"
    ],
    serviceInterests: [
      "Activity-Based Costing & Margin Architecture",
      "13-Week Rolling Cash Flow & FP&A Modeling",
      "Fractional CFO & Board Advisory Retainer",
      "C-Suite KPI Command Center & BI Integration",
      "Working Capital / CCC Compression Diagnostic",
      "New Office Suite 400 In-Person Briefing"
    ],
    timelineOptions: [
      "Immediate (Next 14 Days)",
      "Within 30–60 Days",
      "Next Fiscal Quarter Planning",
      "Exploratory Discretionary Briefing"
    ]
  },

  developerCredit: {
    title: "Engineered by Vance Digital Atelier",
    subtitle: "High-Performance Executive Web Craftsmanship",
    url: "https://vancecma.com/studio",
    tagline: "Precision frontend engineering for elite corporate & financial advisory."
  },

  legal: {
    copyright: `© ${new Date().getFullYear()} Vance Management Accounting & Strategic Advisory LLC. All Rights Reserved.`,
    disclaimer: "Vance Management Accounting & Strategic Advisory provides strategic management accounting, financial planning & analysis (FP&A), and business advisory services. We do not provide public attestation, audit opinions on public filings, or public assurance engagements reserved exclusively for licensed CPA firms under statutory jurisdiction."
  }
};
