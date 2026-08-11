import React from 'react';
import KnowledgeGraph from '../components/KnowledgeGraph';
import AgentSimulator from '../components/AgentSimulator';
import HtsReasoningTrace from '../components/HtsReasoningTrace';
import { 
  ShieldCheck, 
  Shield,
  Sparkles, 
  ArrowRight, 
  Cpu, 
  FileText, 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Database,
  Lock,
  ChevronRight,
  Scale,
  Award,
  Box,
  Clock,
  Building2,
  Newspaper,
  AlertTriangle,
  Zap,
  XCircle,
  HelpCircle,
  Info
} from 'lucide-react';

export default function LandingPage({ setActiveTab, onOpenModal }) {
  const stats = [
    { value: "$5.3T", label: "US Annual Trade Volume", sub: "Importers facing complex CBP tariff compliance" },
    { value: "24/7/365", label: "Agentic Filing Speed", sub: "Shipments processed continuously without night delays" },
    { value: "0", label: "Headcount Needed to Scale", sub: "White-label agentic capacity for 3PLs & forwarders" },
    { value: "100%", label: "Reasonable Care Defense", sub: "Transparent chain-of-thought audit trail for CBP" },
  ];

  const personaMessages = [
    {
      target: "For Importers & Shippers",
      badge: "Importer Velocity",
      icon: Clock,
      headline: "Clear shipments around the clock",
      quote: "Your shipments clear faster because agents work the file 24/7, not just during business hours.",
      detail: "Eliminate weekend port holds and overnight queue backlogs. Autonomous agents parse commercial invoices, propose tariffs, and prep entry summaries the instant docs arrive."
    },
    {
      target: "For 3PLs & Freight Forwarders",
      badge: "3PL Scalability",
      icon: Building2,
      headline: "Scale customs capacity without headcount",
      quote: "White-label a customs agent that scales with your volume without headcount.",
      detail: "Deliver full-service customs clearance under your brand. Handle peak season volume surges effortlessly without scrambling to recruit licensed customs brokers."
    },
    {
      target: "For the Industry & Press",
      badge: "Industry Milestone",
      icon: Newspaper,
      headline: "The agentic workforce shift",
      quote: "First customs broker where agents outnumber people.",
      detail: "Customs brokerage is a licensed, regulated profession. Qubere marks the defining moment where digital agents execute the operational heavy lifting under human broker governance."
    }
  ];

  const competitiveComparison = [
    {
      feature: "Core Architecture",
      legacy: "Bolting AI LLM chatbots onto legacy workflow software",
      qubere: "The Agents ARE the workflow from the ground up",
      highlight: true
    },
    {
      feature: "Processing Velocity",
      legacy: "Restricted to 9-to-5 human business hours & queue delays",
      qubere: "24/7/365 continuous multi-agent entry processing",
      highlight: false
    },
    {
      feature: "HTS Tariff Classification",
      legacy: "Black-box suggestions or static code lookups",
      qubere: "Step-by-step GRI & CROSS ruling chain-of-thought trace",
      highlight: true
    },
    {
      feature: "3PL White-Label Expansion",
      legacy: "Requires hiring more licensed human customs brokers",
      qubere: "Instant white-label agentic capacity with zero headcount",
      highlight: false
    },
    {
      feature: "Regulatory Governance",
      legacy: "Manual human double-keying and fragmented emails",
      qubere: "Deterministic rules engine enforcing 19 U.S.C. § 1484",
      highlight: false
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 md:pt-14 text-center max-w-5xl mx-auto px-4 space-y-6">
        
        {/* Category Naming Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-bold tracking-wide uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>The First Agentic Customs Broker</span>
        </div>

        {/* Main Headline (H1) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-[1.12]">
          Customs brokerage is a licensed profession. <br className="hidden sm:inline" />
          <span className="apple-blue-text-light">Our agents do the work.</span>
        </h1>

        {/* Hero Copy (Paragraph) */}
        <p className="text-base sm:text-lg text-[#6E6E73] max-w-3xl mx-auto font-normal leading-relaxed">
          Legacy players bolt AI onto software. Qubere’s agents <em>are</em> the workflow. We process import files 24/7, classify items with verifiable reasoning traces, and deliver zero-headcount scale for global trade.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenModal('demo')}
            className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Schedule Agentic Broker Demo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <a
            href="https://demo-app.qubere.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FAFAFC] text-[#1D1D1F] font-semibold text-xs sm:text-sm border border-black/10 shadow-sm transition-all flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-[#0071E3]" />
            <span>Log In to Platform</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-black/10 text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="apple-card-light p-5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#1D1D1F] mt-1">{stat.label}</div>
              <div className="text-[11px] text-[#86868B] mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MESSAGE ARCHITECTURE SECTION: THREE PERSONAS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[#6E6E73] text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-[#0071E3]" />
            <span>Value Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Built for Importers, 3PLs, and Trade Leaders
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Why shifting from software-assisted filing to an agentic customs broker changes everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personaMessages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="apple-card-light p-6 flex flex-col justify-between space-y-4 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#0071E3] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase tracking-wide">
                      {item.target}
                    </span>
                    <Icon className="w-5 h-5 text-[#0071E3]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1D1D1F] leading-snug">
                    {item.headline}
                  </h3>

                  <div className="p-4 rounded-xl bg-[#0071E3]/5 border-l-4 border-[#0071E3]">
                    <p className="text-xs sm:text-sm font-semibold text-[#1D1D1F] italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#0071E3]">
                  <span>Agentic Advantage</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* THE COMPETITIVE WEDGE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="apple-card-light p-8 sm:p-10 space-y-8 bg-gradient-to-b from-white to-[#FAFAFC]">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-amber-600" />
              <span>Structural Competitive Wedge</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
              Legacy players bolt AI onto software. <br />
              <span className="apple-blue-text-light">Qubere's agents ARE the workflow.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Flexport, Customs City, and legacy software providers are attempting to append AI assistant plugins onto 20-year-old workflow software. Qubere was engineered from the ground up as the first agentic customs broker. It's a structural claim legacy competitors cannot copy without rebuilding their systems from scratch.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-black/10 text-[#86868B] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-bold">Operational Capability</th>
                  <th className="py-3 px-4 font-bold">Legacy Software + AI Plugin (Flexport, etc.)</th>
                  <th className="py-3 px-4 font-bold text-[#0071E3] bg-blue-50/50 rounded-t-lg">Qubere Agentic Customs Broker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {competitiveComparison.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-blue-50/20' : ''}>
                    <td className="py-4 px-4 font-bold text-[#1D1D1F] flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#0071E3]" />
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-[#6E6E73]">
                      <span className="inline-flex items-center gap-1.5 text-red-600 font-medium">
                        <XCircle className="w-3.5 h-3.5 shrink-0" />
                        {row.legacy}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#1D1D1F] font-semibold bg-blue-50/30">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {row.qubere}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FEATURED INTERACTIVE HTS REASONING TRACE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <HtsReasoningTrace />
      </section>

      {/* MULTI-AGENT WORKFLOW SIMULATOR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sub-Second Multi-Agent Execution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Specialized Customs Agents Operating 24/7
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            See how discrete agents validate product attributes, origin rules, and PGA requirements continuously.
          </p>
        </div>

        <AgentSimulator />
      </section>

      {/* INTERACTIVE KNOWLEDGE GRAPH */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[#6E6E73] text-xs font-semibold">
            <Database className="w-3.5 h-3.5 text-[#0071E3]" />
            <span>Interactive Technology Demo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Trade Knowledge Graph Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Drag, click, and inspect real-time relationships between HS codes, regulations, suppliers, and autonomous agent decision loops.
          </p>
        </div>

        <KnowledgeGraph />
      </section>

      {/* CONTENT THAT BUILDS THE MOAT: HONESTY ABOUT LIMITS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="apple-card-light p-8 sm:p-10 space-y-8 bg-gradient-to-br from-white via-[#FAFAFC] to-[#F5F5F7] border-black/10">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0071E3] border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Building the Compliance Moat</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              What Our Agents Can—and Can’t—Do Yet
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Customs brokerage is a highly regulated, licensed profession governed by 19 U.S.C. § 1484. In a compliance-sensitive space, <strong>honesty about operational limits builds far more trust than generic AI hype.</strong> Here is our transparent boundary model:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* What Agents Do Today */}
            <div className="bg-emerald-50/50 border border-emerald-200/80 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Autonomous Agent Capabilities (24/7 Operating)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#1D1D1F]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>HTS & Schedule B Classification:</strong> Autonomous tariff proposals backed by GRI 1 & GRI 3(b) chain-of-thought traces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Partner Government Agency (PGA) Screening:</strong> Automated flags for FDA, EPA TSCA, FCC, and USDA requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Cross-Document Reconciliation:</strong> Sub-second verification of Commercial Invoice, Packing List, and BOL data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Duty & Landed Cost Calculation:</strong> Real-time Section 301/232 tariff calculations and 7501 summary assembly.</span>
                </li>
              </ul>
            </div>

            {/* What Still Requires Licensed Human Brokers */}
            <div className="bg-amber-50/50 border border-amber-200/80 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>What Requires Licensed Human Broker Oversight (Current Limits)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#1D1D1F]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Prior Disclosures (19 U.S.C. § 1592):</strong> Voluntary disclosures of historic importer errors require specialized legal counsel and licensed broker strategy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Formal Binding Ruling Requests:</strong> Drafting strategic CBP eRulings applications for novel or unclassified products.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>CBP Administrative Protests (19 U.S.C. § 1514):</strong> Formal legal appeals of CBP decisions and liquidated entry disputes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Complex Anti-Dumping / Countervailing Duty (ADD/CVD) Petitions:</strong> High-risk scope ruling determinations requiring custom trade attorney filings.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-white border border-black/10 flex items-center gap-3 text-xs text-[#6E6E73]">
            <Info className="w-5 h-5 text-[#0071E3] shrink-0" />
            <span>
              By automating 95%+ of routine entry tasks 24/7, Qubere frees licensed customs brokers to focus exclusively on complex legal strategy and edge cases.
            </span>
          </div>

        </div>
      </section>

      {/* PRODUCT DEMO CALL TO ACTION CARD */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="apple-card-light p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0071E3] border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The First Agentic Customs Broker</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Ready to Experience Agentic Customs Operations?
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto leading-relaxed font-medium">
            Join leading freight forwarders, 3PLs, and global importers clearing shipments 24/7 with Qubere’s autonomous agent workforce.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenModal('demo')}
              className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Agentic Broker Demo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="https://demo-app.qubere.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F] font-semibold text-xs sm:text-sm border border-black/10 transition-all"
            >
              Log In to Platform
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
