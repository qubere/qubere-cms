/**
 * @file routeMeta.js
 * @description Master SEO and prerender metadata map for all indexable Qubere routes.
 */

export const DOMAIN = 'https://qubere.ai';

export const routeMetaMap = {
  '/': {
    title: 'The First Agentic Customs Broker | Qubere',
    description: 'Qubere is the first agentic customs broker. Digital agents work import files 24/7, providing transparent HTS reasoning traces and zero-headcount scale for importers and 3PLs.',
    canonical: `${DOMAIN}/`,
    ogTitle: 'The First Agentic Customs Broker | Qubere',
    ogDescription: 'Qubere is the first agentic customs broker. Digital agents work import files 24/7, providing transparent HTS reasoning traces and zero-headcount scale for importers and 3PLs.',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Qubere',
      'url': DOMAIN,
      'logo': `${DOMAIN}/favicon.svg`,
      'description': 'AI customs compliance software for document-to-filing readiness.',
      'founders': [
        {
          '@type': 'Person',
          'name': 'Rachit Lohani',
          'jobTitle': 'Founder',
          'sameAs': 'https://www.linkedin.com/in/rachitlohani/'
        }
      ]
    }
  },
  '/product': {
    title: 'AI Customs Compliance Platform & Product Suite | Qubere',
    description: 'Explore Qubere\'s enterprise product suite: Customs Clearance Engine, Customs Brokerage OS, Trade Advisory Agent, Tariff Refunds, and Automated Auditing.',
    canonical: `${DOMAIN}/product`,
    ogTitle: 'AI Customs Compliance Platform & Product Suite | Qubere',
    ogDescription: 'Explore Qubere\'s enterprise product suite: Customs Clearance Engine, Customs Brokerage OS, Trade Advisory Agent, Tariff Refunds, and Automated Auditing.',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Qubere AI Customs Compliance Platform',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Web',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      }
    }
  },
  '/about': {
    title: 'About Qubere | Executive Leadership & Trade Compliance Pioneers',
    description: 'Meet the team behind Qubere. Founded by Rachit Lohani (former CPTO at E2open & Paylocity).',
    canonical: `${DOMAIN}/about`,
    ogTitle: 'About Qubere | Executive Leadership & Trade Compliance Pioneers',
    ogDescription: 'Meet the team behind Qubere. Founded by Rachit Lohani (former CPTO at E2open & Paylocity).',
    ogType: 'profile',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Qubere Leadership',
      'url': `${DOMAIN}/about`,
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Qubere',
        'founders': [
          {
            '@type': 'Person',
            'name': 'Rachit Lohani',
            'jobTitle': 'Founder',
            'description': 'Former CPTO at E2open and Paylocity; engineering leadership at Atlassian and Intuit.',
            'sameAs': 'https://www.linkedin.com/in/rachitlohani/'
          }
        ]
      }
    }
  },
  '/blog': {
    title: 'Customs Compliance & Trade AI Research | Qubere Blog',
    description: 'Technical whitepapers, trade knowledge graph research, and regulatory AI engineering breakdowns from the Qubere engineering team.',
    canonical: `${DOMAIN}/blog`,
    ogTitle: 'Customs Compliance & Trade AI Research | Qubere Blog',
    ogDescription: 'Technical whitepapers, trade knowledge graph research, and regulatory AI engineering breakdowns from the Qubere engineering team.',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Qubere Engineering & Research Blog',
      'url': `${DOMAIN}/blog`,
      'description': 'Technical insights on AI, trade knowledge graphs, and customs compliance.'
    }
  },
  '/blog/evidence-backed-ai': {
    title: 'Why Customs AI Must Be Evidence-Backed Before It Is Autonomous | Qubere',
    description: 'Learn why general LLMs risk penalties in customs compliance and how Qubere anchors every classification proposal in document bounding boxes and CROSS rulings.',
    canonical: `${DOMAIN}/blog/evidence-backed-ai`,
    ogTitle: 'Why Customs AI Must Be Evidence-Backed Before It Is Autonomous | Qubere',
    ogDescription: 'Learn why general LLMs risk penalties in customs compliance and how Qubere anchors every classification proposal in document bounding boxes and CROSS rulings.',
    ogType: 'article',
    publishedDate: '2026-08-08',
    authors: ['Rachit Lohani'],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Why Customs AI Must Be Evidence-Backed Before It Is Autonomous',
        'datePublished': '2026-08-08',
        'dateModified': '2026-08-08',
        'author': [
          { '@type': 'Person', 'name': 'Rachit Lohani', 'url': `${DOMAIN}/about` }
        ],
        'publisher': { '@type': 'Organization', 'name': 'Qubere', 'url': DOMAIN },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${DOMAIN}/blog/evidence-backed-ai` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${DOMAIN}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${DOMAIN}/blog` },
          { '@type': 'ListItem', 'position': 3, 'name': 'Evidence-Backed AI', 'item': `${DOMAIN}/blog/evidence-backed-ai` }
        ]
      }
    ]
  },
  '/blog/trade-knowledge-graph': {
    title: 'AI-Native Trade Knowledge Graphs vs Document AI | Qubere',
    description: 'Discover how Qubere constructs a connected transaction network of Supplier, Product, HTS Code, and Port nodes for global trade compliance.',
    canonical: `${DOMAIN}/blog/trade-knowledge-graph`,
    ogTitle: 'AI-Native Trade Knowledge Graphs vs Document AI | Qubere',
    ogDescription: 'Discover how Qubere constructs a connected transaction network of Supplier, Product, HTS Code, and Port nodes for global trade compliance.',
    ogType: 'article',
    publishedDate: '2026-08-05',
    authors: ['Qubere Engineering Team'],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Building an AI-Native Trade Knowledge Graph: Why Document AI Isn\'t Enough',
        'datePublished': '2026-08-05',
        'dateModified': '2026-08-05',
        'author': { '@type': 'Organization', 'name': 'Qubere Engineering Team', 'url': `${DOMAIN}/about` },
        'publisher': { '@type': 'Organization', 'name': 'Qubere', 'url': DOMAIN },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${DOMAIN}/blog/trade-knowledge-graph` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${DOMAIN}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${DOMAIN}/blog` },
          { '@type': 'ListItem', 'position': 3, 'name': 'Trade Knowledge Graph', 'item': `${DOMAIN}/blog/trade-knowledge-graph` }
        ]
      }
    ]
  },
  '/blog/architecture': {
    title: 'Qubere AI Customs Compliance Logical Architecture | Qubere',
    description: 'Technical architecture breakdown of Qubere\'s 6-layer multi-agent control plane, zero-trust boundary, and immutable evidence storage.',
    canonical: `${DOMAIN}/blog/architecture`,
    ogTitle: 'Qubere AI Customs Compliance Logical Architecture | Qubere',
    ogDescription: 'Technical architecture breakdown of Qubere\'s 6-layer multi-agent control plane, zero-trust boundary, and immutable evidence storage.',
    ogType: 'article',
    publishedDate: '2026-08-05',
    authors: ['Qubere Architecture Team'],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Qubere Logical Architecture & Governed Multi-Agent System Stack',
        'datePublished': '2026-08-05',
        'dateModified': '2026-08-05',
        'author': { '@type': 'Organization', 'name': 'Qubere Architecture Team', 'url': `${DOMAIN}/about` },
        'publisher': { '@type': 'Organization', 'name': 'Qubere', 'url': DOMAIN },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${DOMAIN}/blog/architecture` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${DOMAIN}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${DOMAIN}/blog` },
          { '@type': 'ListItem', 'position': 3, 'name': 'Architecture', 'item': `${DOMAIN}/blog/architecture` }
        ]
      }
    ]
  },
  '/blog/ai-customs-compliance': {
    title: 'Automating US Customs Compliance: Invoice to CBP Filing | Qubere',
    description: 'Deep dive into how AI ingests commercial invoices, proposes 10-digit HTS codes, estimates duties, and automates 7501 Entry Summaries with PGA screening.',
    canonical: `${DOMAIN}/blog/ai-customs-compliance`,
    ogTitle: 'Automating US Customs Compliance: Invoice to CBP Filing | Qubere',
    ogDescription: 'Deep dive into how AI ingests commercial invoices, proposes 10-digit HTS codes, estimates duties, and automates 7501 Entry Summaries with PGA screening.',
    ogType: 'article',
    publishedDate: '2026-07-28',
    authors: ['Qubere Product Team'],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Automating US Customs Compliance: From Commercial Invoices to Entry Filings',
        'datePublished': '2026-07-28',
        'dateModified': '2026-07-28',
        'author': { '@type': 'Organization', 'name': 'Qubere Product Team', 'url': `${DOMAIN}/about` },
        'publisher': { '@type': 'Organization', 'name': 'Qubere', 'url': DOMAIN },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${DOMAIN}/blog/ai-customs-compliance` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${DOMAIN}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${DOMAIN}/blog` },
          { '@type': 'ListItem', 'position': 3, 'name': 'AI Customs Compliance', 'item': `${DOMAIN}/blog/ai-customs-compliance` }
        ]
      }
    ]
  },
  '/blog/us-import-entry-readiness': {
    title: 'US Import Entry Readiness Checklist & Verification | Qubere',
    description: 'Essential verification checklist for customs compliance teams before submitting entry summaries under 19 U.S.C. § 1484 Reasonable Care standards.',
    canonical: `${DOMAIN}/blog/us-import-entry-readiness`,
    ogTitle: 'US Import Entry Readiness Checklist & Verification | Qubere',
    ogDescription: 'Essential verification checklist for customs compliance teams before submitting entry summaries under 19 U.S.C. § 1484 Reasonable Care standards.',
    ogType: 'article',
    publishedDate: '2026-07-20',
    authors: ['Compliance Practice Lead'],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'US Import Entry Readiness Checklist & Verification Breakdown',
        'datePublished': '2026-07-20',
        'dateModified': '2026-07-20',
        'author': { '@type': 'Organization', 'name': 'Compliance Practice Lead', 'url': `${DOMAIN}/about` },
        'publisher': { '@type': 'Organization', 'name': 'Qubere', 'url': DOMAIN },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${DOMAIN}/blog/us-import-entry-readiness` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${DOMAIN}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${DOMAIN}/blog` },
          { '@type': 'ListItem', 'position': 3, 'name': 'US Import Entry Readiness', 'item': `${DOMAIN}/blog/us-import-entry-readiness` }
        ]
      }
    ]
  }
};
