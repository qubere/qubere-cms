import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenModal }) {
  const handleNavClick = (e, target) => {
    e.preventDefault();
    setActiveTab(target);
  };

  return (
    <footer className="border-t border-black/5 bg-[#F5F5F7] py-12 text-xs text-[#86868B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3]">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[#1D1D1F]">Qubere</span>
          <span className="text-black/10">|</span>
          <span className="font-medium">Enterprise AI for Global Trade & Customs Compliance</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 font-semibold">
          <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-[#1D1D1F] transition-colors">
            Overview
          </a>
          <a href="/product" onClick={(e) => handleNavClick(e, 'product')} className="hover:text-[#1D1D1F] transition-colors">
            Product
          </a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'team')} className="hover:text-[#1D1D1F] transition-colors">
            About & Leadership
          </a>
          <a href="/blog" onClick={(e) => handleNavClick(e, 'blog')} className="hover:text-[#1D1D1F] transition-colors">
            Research & Blog
          </a>
          <a href="/blog/trade-knowledge-graph" onClick={(e) => handleNavClick(e, 'trade-knowledge-graph')} className="hover:text-[#0071E3] font-bold transition-colors">
            Trade Knowledge Graph
          </a>
          <a href="https://demo-app.qubere.ai" target="_blank" rel="noopener noreferrer" className="text-[#0071E3] hover:underline flex items-center gap-1 font-bold">
            <span>Log In to App</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-medium">
          © {new Date().getFullYear()} Qubere Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

