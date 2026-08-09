/**
 * @file App.jsx
 * @author Rachit Lohani
 * @description Main application controller and routing entry point for Qubere landing site.
 * Supports clean HTML5 pushState routing with pre-rendered fallback support.
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

import LandingPage from './pages/LandingPage';
import ThesisPage from './pages/ThesisPage';
import TeamPage from './pages/TeamPage';
import AiCustomsCompliancePage from './pages/AiCustomsCompliancePage';
import UsImportEntryReadinessPage from './pages/UsImportEntryReadinessPage';
import EvidenceBackedAiArticlePage from './pages/EvidenceBackedAiArticlePage';
import TradeKnowledgeGraphBlogPage from './pages/TradeKnowledgeGraphBlogPage';
import BlogHubPage from './pages/BlogHubPage';
import ProductSuitePage from './pages/ProductSuitePage';
import LogicalArchitecturePage from './pages/LogicalArchitecturePage';
import KnowledgeGraph from './components/KnowledgeGraph';

export const ROUTE_MAP = {
  '/': 'home',
  '/product': 'product',
  '/about': 'team',
  '/team': 'team',
  '/blog': 'blog',
  '/blog/trade-knowledge-graph': 'trade-knowledge-graph',
  '/blog/architecture': 'architecture',
  '/blog/evidence-backed-ai': 'evidence-backed-ai',
  '/blog/ai-customs-compliance': 'ai-customs-compliance',
  '/blog/us-import-entry-readiness': 'us-import-entry-readiness',
  '/graph': 'graph',
  '/thesis': 'thesis',
  // legacy paths for fallback compatibility
  '/trade-knowledge-graph': 'trade-knowledge-graph',
  '/architecture': 'architecture',
  '/evidence-backed-ai': 'evidence-backed-ai',
  '/ai-customs-compliance': 'ai-customs-compliance',
  '/us-import-entry-readiness': 'us-import-entry-readiness',
};

export const TAB_TO_PATH = {
  'home': '/',
  'product': '/product',
  'team': '/about',
  'blog': '/blog',
  'trade-knowledge-graph': '/blog/trade-knowledge-graph',
  'architecture': '/blog/architecture',
  'evidence-backed-ai': '/blog/evidence-backed-ai',
  'ai-customs-compliance': '/blog/ai-customs-compliance',
  'us-import-entry-readiness': '/blog/us-import-entry-readiness',
  'graph': '/graph',
  'thesis': '/thesis',
};

export function getTabFromLocation() {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (ROUTE_MAP[path]) {
    return ROUTE_MAP[path];
  }
  const hash = window.location.hash.replace('#', '');
  if (hash && TAB_TO_PATH[hash]) {
    return hash;
  }
  return 'home';
}

export default function App() {
  const [activeTab, setActiveTabState] = useState(getTabFromLocation);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('demo');

  const setActiveTab = (target) => {
    const targetTab = ROUTE_MAP[target] || target;
    const targetPath = TAB_TO_PATH[targetTab] || (target.startsWith('/') ? target : '/');
    
    setActiveTabState(targetTab);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', targetPath);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setActiveTabState(getTabFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenModal = (mode = 'demo') => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col justify-between selection:bg-blue-500/20 selection:text-[#0071E3]">
      <div>
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenModal={handleOpenModal} 
        />

        <main className="pt-6">
          {activeTab === 'home' && (
            <LandingPage 
              setActiveTab={setActiveTab} 
              onOpenModal={handleOpenModal} 
            />
          )}

          {activeTab === 'architecture' && (
            <LogicalArchitecturePage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'ai-customs-compliance' && (
            <AiCustomsCompliancePage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'us-import-entry-readiness' && (
            <UsImportEntryReadinessPage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'evidence-backed-ai' && (
            <EvidenceBackedAiArticlePage onOpenModal={handleOpenModal} />
          )}

          {(activeTab === 'blog' || activeTab === 'blog-hub') && (
            <BlogHubPage setActiveTab={setActiveTab} onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'product' && (
            <ProductSuitePage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'trade-knowledge-graph' && (
            <TradeKnowledgeGraphBlogPage onOpenModal={handleOpenModal} />
          )}

          {activeTab === 'graph' && (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
                  Interactive Knowledge Graph
                </h1>
                <p className="text-xs sm:text-sm text-[#86868B] max-w-xl mx-auto">
                  Drag nodes, explore connected regulations, suppliers, and autonomous agent decision loops.
                </p>
              </div>
              <KnowledgeGraph />
            </div>
          )}

          {activeTab === 'thesis' && (
            <ThesisPage 
              setActiveTab={setActiveTab} 
              onOpenModal={handleOpenModal} 
            />
          )}

          {activeTab === 'team' && (
            <TeamPage onOpenModal={handleOpenModal} />
          )}
        </main>
      </div>

      <Footer 
        setActiveTab={setActiveTab} 
        onOpenModal={handleOpenModal} 
      />

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode={modalMode} 
      />
    </div>
  );
}

