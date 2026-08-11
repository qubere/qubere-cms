import React, { useState } from 'react';
import { 
  FileText, 
  Cpu, 
  Scale, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ExternalLink,
  ShieldCheck,
  Search,
  BookOpen,
  ArrowRight,
  Info,
  Terminal,
  HelpCircle
} from 'lucide-react';

export default function HtsReasoningTrace() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [activeStep, setActiveStep] = useState(3); // default step revealed

  const cases = [
    {
      id: 'lithium-ess',
      productName: 'Smart Industrial Lithium-Ion Energy Storage Cabinet (100kWh)',
      declaredValue: '$48,500 USD',
      origin: 'Vietnam (VN)',
      invoiceDescription: 'Integrated Battery Energy Storage System (BESS) w/ Liquid Cooling & Smart Inverter Unit, Model Q-ESS-100',
      finalHts: '8507.60.0000',
      headingTitle: 'Lithium-ion electric accumulators',
      dutyRate: '3.4% + 25% Section 301',
      pgaFlags: ['EPA (TSCA Title VI)', 'DOT (Hazmat Class 9)'],
      confidence: 99.4,
      steps: [
        {
          num: 1,
          title: 'Attribute & Material Extraction',
          agent: 'Document Parser Agent',
          status: 'verified',
          detail: 'Parsed technical spec sheet, Commercial Invoice #INV-88392, and packing list. Extracted 4 primary components: (1) LiFePO4 cells, (2) Liquid cooling manifold, (3) BMS control circuit, (4) Inverter module.',
          reasoning: 'Product presents a composite good under GRI 3(b). Identified primary functional purpose: Electrical energy storage rather than power conversion alone.'
        },
        {
          num: 2,
          title: 'General Rules of Interpretation (GRI 3b) Analysis',
          agent: 'Legal Classification Agent',
          status: 'verified',
          detail: 'Evaluated Heading 8504 (Static Converters) vs. Heading 8507 (Electric Accumulators). Applied GRI 3(b) "Essential Character" test.',
          reasoning: 'The battery cell assembly accounts for 78% of total unit manufacturing cost and 82% of physical weight. The essential character is derived from the energy accumulation function (Heading 8507).'
        },
        {
          num: 3,
          title: 'WCO & CBP CROSS Precedent Matching',
          agent: 'Precedent Matcher Agent',
          status: 'verified',
          detail: 'Searched CBP Customs Rulings Online Search System (CROSS) database for composite BESS units.',
          reasoning: 'Matched NY N315920 (Containerized ESS classified in 8507.60.0000) and HQ H294105. Overruled importer legacy suggestion (8504.40) based on CROSS precedent NY N315920.'
        },
        {
          num: 4,
          title: 'Section & Chapter Notes Validation',
          agent: 'Deterministic Audit Agent',
          status: 'verified',
          detail: 'Validated against Section XVI Note 3 (Composite machines) and Chapter 85 Note 9.',
          reasoning: 'Chapter 85 Note 9 explicitly retains lithium-ion accumulators under 8507.60 regardless of embedded battery management electronics. Verification passed 100% hard regulatory schema.'
        }
      ]
    },
    {
      id: 'smart-watch',
      productName: 'Rugged GPS Smartwatch w/ Optical Heart Rate & Cellular Modem',
      declaredValue: '$240 USD',
      origin: 'Taiwan (TW)',
      invoiceDescription: 'Wearable Fitness Tracker w/ AMOLED Touch Display, LTE Transceiver, and Optical Biometric Sensors',
      finalHts: '8517.62.0050',
      headingTitle: 'Machines for the reception, conversion and transmission or regeneration of voice, images or other data',
      dutyRate: '0.0% (Free)',
      pgaFlags: ['FCC (Radio Frequency)'],
      confidence: 98.9,
      steps: [
        {
          num: 1,
          title: 'Feature & Function Breakdown',
          agent: 'Document Parser Agent',
          status: 'verified',
          detail: 'Extracted attributes: Cellular radio (4G/LTE), Bluetooth 5.2, GPS receiver, PPG heart rate sensor, OLED display, ARM Cortex processor.',
          reasoning: 'Multi-function apparatus subject to GRI 3(b). Cellular data transmission capabilities trigger telecommunication heading considerations.'
        },
        {
          num: 2,
          title: 'GRI 3(b) vs. GRI 4 Headings Comparison',
          agent: 'Legal Classification Agent',
          status: 'verified',
          detail: 'Compared Heading 9031 (Measuring/checking instruments), Heading 9102 (Wristwatches), and Heading 8517 (Telecommunication apparatus).',
          reasoning: 'Pursuant to Chapter 91 Note 1(n), wristwatches with cellular data transceivers are excluded from Chapter 91 if the primary function is wireless data communication. Heading 8517 governs.'
        },
        {
          num: 3,
          title: 'CBP CROSS Precedent Verification',
          agent: 'Precedent Matcher Agent',
          status: 'verified',
          detail: 'Queried CROSS rulings for wearable cellular smartwatches with optical sensors.',
          reasoning: 'Found HQ H257947 and NY N283011. Both rulings confirm smartwatch devices containing LTE cellular transceivers are classified in 8517.62.0050.'
        },
        {
          num: 4,
          title: 'PGA & License Rule Engine',
          agent: 'Deterministic Audit Agent',
          status: 'verified',
          detail: 'Screened against FCC Title 47 CFR and FDA medical device definitions.',
          reasoning: 'Optical HR sensor classified as general wellness device (non-medical 510(k) exempt). Requires FCC Form 740 / RF device declaration flag at entry.'
        }
      ]
    }
  ];

  const current = cases[selectedCase];

  return (
    <div className="apple-card-light p-6 sm:p-8 space-y-6">
      
      {/* HEADER & SELECTOR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#0071E3] border border-blue-500/20 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Chain-of-Thought</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
            Live HTS Classification Reasoning Trace
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6E73]">
            No legacy software can produce a verifiable audit trail like this. See how Qubere proves its legal reasoning line-by-line.
          </p>
        </div>

        {/* Case Switcher */}
        <div className="flex items-center gap-2 bg-[#F5F5F7] p-1.5 rounded-xl border border-black/5 self-start md:self-auto">
          {cases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedCase(idx);
                setActiveStep(3);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCase === idx
                  ? 'bg-white text-[#0071E3] shadow-sm border border-black/5'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Case #{idx + 1}: {item.id === 'lithium-ess' ? 'BESS Storage Unit' : 'Cellular Smartwatch'}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT PRODUCT BANNER */}
      <div className="bg-[#FAFAFC] p-4 sm:p-5 rounded-2xl border border-black/5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-mono text-[#6E6E73] flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#0071E3]" />
            Source: Commercial Invoice Line Item
          </span>
          <span className="bg-emerald-500/10 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold">
            {current.confidence}% AI Confidence Score
          </span>
        </div>
        <div>
          <h4 className="text-base font-bold text-[#1D1D1F]">{current.productName}</h4>
          <p className="text-xs text-[#6E6E73] mt-0.5">"{current.invoiceDescription}"</p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2 text-xs border-t border-black/5 text-[#1D1D1F]">
          <div><span className="text-[#86868B]">Declared Value:</span> <strong>{current.declaredValue}</strong></div>
          <div><span className="text-[#86868B]">Country of Origin:</span> <strong>{current.origin}</strong></div>
        </div>
      </div>

      {/* REASONING STEPS PROGRESSION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-[#1D1D1F]">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-[#0071E3]" />
            Agent Decision Steps ({current.steps.length} Milestones)
          </span>
          <span className="text-[#86868B] font-normal">Click any step to inspect evidence</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {current.steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div 
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-white border-[#0071E3] shadow-md ring-2 ring-[#0071E3]/10' 
                    : 'bg-[#FAFAFC] border-black/5 hover:border-black/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected 
                        ? 'bg-[#0071E3] text-white' 
                        : 'bg-[#E8E8ED] text-[#1D1D1F]'
                    }`}>
                      {step.num}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-bold text-[#1D1D1F]">{step.title}</h5>
                        <span className="text-[10px] font-mono bg-blue-50 text-[#0071E3] px-2 py-0.5 rounded border border-blue-100">
                          {step.agent}
                        </span>
                      </div>
                      <p className="text-xs text-[#6E6E73] mt-1">{step.detail}</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                </div>

                {/* Expanded Chain of Thought Detail */}
                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-black/5 space-y-2 text-xs bg-[#0071E3]/5 p-3 rounded-lg">
                    <div className="font-bold text-[#0071E3] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Legal Reasoning & Regulatory Precedent:
                    </div>
                    <p className="text-[#1D1D1F] leading-relaxed font-mono text-[11px]">
                      {step.reasoning}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL OUTPUT CLASSIFICATION CARD */}
      <div className="bg-[#1D1D1F] text-white p-5 rounded-2xl space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0071E3]" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Deterministic Classification Result
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
            Filing Ready • 100% Reasonable Care
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 border-t border-white/10">
          <div>
            <div className="text-[11px] text-gray-400">Proposed HTS Code</div>
            <div className="text-2xl font-mono font-extrabold text-white mt-0.5">{current.finalHts}</div>
            <div className="text-xs text-gray-300 mt-1 line-clamp-1">{current.headingTitle}</div>
          </div>

          <div>
            <div className="text-[11px] text-gray-400">Duty Rate & Tariff Exposure</div>
            <div className="text-base font-bold text-amber-300 mt-0.5">{current.dutyRate}</div>
            <div className="text-xs text-gray-400 mt-1">Calculated via Section 301 Engine</div>
          </div>

          <div>
            <div className="text-[11px] text-gray-400">PGA Regulatory Flags</div>
            <div className="flex flex-wrap gap-1 mt-1">
              {current.pgaFlags.map((flag, i) => (
                <span key={i} className="text-[10px] bg-blue-900/60 text-blue-200 border border-blue-700/50 px-2 py-0.5 rounded font-mono">
                  {flag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#0071E3]" />
            <span>Legacy players (Flexport, Customs City) output static codes without chain-of-thought proof. Qubere proves every line item.</span>
          </div>
        </div>
      </div>

    </div>
  );
}
