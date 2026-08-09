import React, { useState } from 'react';
import { Shield, ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', href: '/', label: 'Overview' },
    { id: 'product', href: '/product', label: 'Product' },
    { id: 'team', href: '/about', label: 'Why Qubere' },
    { id: 'blog', href: '/blog', label: 'Research & Blog' },
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setActiveTab(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/"
          onClick={(e) => handleNavClick(e, 'home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 flex items-center justify-center group-hover:bg-[#0071E3]/20 transition-all">
            <Shield className="w-4 h-4 text-[#0071E3]" />
          </div>
          <span className="text-lg font-extrabold text-[#1D1D1F] tracking-tight group-hover:text-[#0071E3] transition-colors">
            Qubere
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#E8E8ED]/60 p-1 rounded-full border border-black/5">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === link.id
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="https://demo-app.qubere.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#1D1D1F] hover:bg-black/5 border border-black/10 transition-all flex items-center gap-1.5"
          >
            <span>Log In</span>
          </a>
          <button
            onClick={() => onOpenModal('demo')}
            className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-md shadow-blue-500/15 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Schedule Demo</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-black/5 border border-black/10 text-[#1D1D1F]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white p-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === link.id
                  ? 'bg-[#1D1D1F] text-white'
                  : 'text-[#1D1D1F] hover:bg-black/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-black/5 space-y-2">
            <a
              href="https://demo-app.qubere.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 text-center rounded-full text-xs font-semibold bg-black/5 text-[#1D1D1F] border border-black/10"
            >
              Log In to Platform
            </a>
            <button
              onClick={() => {
                onOpenModal('demo');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-full text-xs font-bold bg-[#0071E3] text-white"
            >
              Schedule Enterprise Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

