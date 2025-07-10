'use client';

import { useState, useEffect } from 'react';
import AnalyticsCharts from './components/AnalyticsCharts';

export default function Home() {
  const [activeSection, setActiveSection] = useState('synthese');
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [expandedRecommendations, setExpandedRecommendations] = useState<Set<number>>(new Set());

  const pillarDetailsData = {
    think: {
      title: "We Think : Stratégie et Expertise",
      text: "Nous fournissons un accompagnement expert avec une stratégie claire, basée sur des objectifs tangibles. Chaque campagne est conçue pour répondre à des buts précis, garantissant que la créativité sert la performance."
    },
    connect: {
      title: "We Connect : Le Bon Carrefour d'Audience",
      text: "Notre rôle est d'identifier le carrefour d'audience le plus pertinent pour la marque. Nous connectons nos clients avec les créateurs et les célébrités qui peuvent porter leur message de manière authentique et efficace."
    },
    produce: {
      title: "We Produce : Création d'Actifs Mémorables",
      text: "Nous créons les actifs les plus performants pour diffuser le message. De la vidéo à la 3D, nous produisons des 'Stop-scrollers' conçus pour maximiser l'attention et la mémorisation de la marque."
    }
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    window.history.pushState(null, '', `#${section}`);
  };

  const handlePillarClick = (pillarKey: string) => {
    setActivePillar(pillarKey);
  };

  const toggleRecommendation = (index: number) => {
    const newExpanded = new Set(expandedRecommendations);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRecommendations(newExpanded);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') || 'synthese';
    setActiveSection(hash);

    const handlePopState = () => {
      const newHash = window.location.hash.replace('#', '') || 'synthese';
      setActiveSection(newHash);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen">
      <header>
        <div className="max-w-7xl header-container">
          <h1 className="main-title">
            Analyse Interactive : <span className="title-accent">Agence Gust</span>
          </h1>
          <nav className="nav-container">
            <a
              href="#synthese"
              className={`nav-link ${activeSection === 'synthese' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('synthese');
              }}
            >
              Synthèse
            </a>
            <a
              href="#modele"
              className={`nav-link ${activeSection === 'modele' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('modele');
              }}
            >
              Modèle d&apos;Affaires
            </a>
            <a
              href="#maturite"
              className={`nav-link ${activeSection === 'maturite' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('maturite');
              }}
            >
              Maturité
            </a>
            <a
              href="#performance"
              className={`nav-link ${activeSection === 'performance' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('performance');
              }}
            >
              Performance (KPI)
            </a>
            <a
              href="#recommandations"
              className={`nav-link ${activeSection === 'recommandations' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('recommandations');
              }}
            >
              Recommandations
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl">

        <section className={`content-section ${activeSection === 'synthese' ? 'active' : ''}`}>
          <h2>Synthèse Stratégique</h2>
          <p className="section-description max-w-3xl">
            Cette analyse interactive explore le profil de l&apos;Agence Gust, une agence de communication spécialisée en influence et marketing digital. Nous décortiquons son modèle d&apos;affaires innovant, évaluons sa maturité sur le marché et proposons un cadre de mesure de performance pour guider sa croissance future. L&apos;objectif est de fournir une vision claire et actionnable de ses forces, de ses défis et de son potentiel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3>Modèle d&apos;Affaires Agile</h3>
              <p>Opérant sur un modèle &quot;d&apos;agence conseil&quot;, Gust s&apos;appuie sur un vaste réseau de partenaires externes sans salariés internes. Cette structure lui confère une agilité et une scalabilité remarquables, permettant des livraisons de projet ultra-rapides (10-20 jours).</p>
            </div>
            <div className="card">
              <h3>Croissance Accélérée</h3>
              <p>Fondée en mai 2023, l&apos;agence a rapidement acquis des clients de renom (Nivea, Quick, Orange) et une portée internationale (EMEA, USA, Canada). Cette traction précoce signale une forte adéquation produit-marché et un réseau fondateur solide.</p>
            </div>
            <div className="card">
              <h3>Proposition de Valeur Claire</h3>
              <p>La mission de créer des &quot;Stop-scrollers&quot; répond directement au défi de la saturation publicitaire. Gust se positionne comme un solutionneur de problèmes stratégique, créant du contenu à fort impact pour capter l&apos;attention des audiences.</p>
            </div>
          </div>
        </section>

        <section className={`content-section ${activeSection === 'modele' ? 'active' : ''}`}>
          <h2>Modèle d&apos;Affaires : L&apos;Agence Conseil</h2>
          <p className="section-description max-w-3xl">
            Le modèle d&apos;Agence Gust repose sur la flexibilité et l&apos;expertise. En externalisant 100% de la production à un réseau de talents spécialisés, elle minimise ses coûts fixes et maximise sa capacité d&apos;adaptation. Cette section détaille ses services et les trois piliers qui sous-tendent son approche &quot;Influence 360°&quot;. Cliquez sur chaque pilier pour en savoir plus.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 card">
              <h3 className="text-center">Les Piliers de l&apos;Agence</h3>
              <div className="pillars-grid">
                <div
                  className={`pillar ${activePillar === 'think' ? 'active' : ''}`}
                  data-pillar="think"
                  onClick={() => handlePillarClick('think')}
                >
                  <span className="pillar-emoji">🤔</span>
                  <h4>We Think</h4>
                  <p className="pillar-subtitle">Stratégie & Objectifs</p>
                </div>
                <div
                  className={`pillar ${activePillar === 'connect' ? 'active' : ''}`}
                  data-pillar="connect"
                  onClick={() => handlePillarClick('connect')}
                >
                  <span className="pillar-emoji">🔗</span>
                  <h4>We Connect</h4>
                  <p className="pillar-subtitle">Carrefour d&apos;Audience</p>
                </div>
                <div
                  className={`pillar ${activePillar === 'produce' ? 'active' : ''}`}
                  data-pillar="produce"
                  onClick={() => handlePillarClick('produce')}
                >
                  <span className="pillar-emoji">🎬</span>
                  <h4>We Produce</h4>
                  <p className="pillar-subtitle">Création d&apos;Actifs</p>
                </div>
              </div>
              <div className="pillar-details">
                {activePillar && pillarDetailsData[activePillar as keyof typeof pillarDetailsData] ? (
                  <>
                    <h5>{pillarDetailsData[activePillar as keyof typeof pillarDetailsData].title}</h5>
                    <p>{pillarDetailsData[activePillar as keyof typeof pillarDetailsData].text}</p>
                  </>
                ) : (
                  <p>Sélectionnez un pilier pour afficher sa description.</p>
                )}
              </div>
            </div>
            <div className="card">
              <h3 className="text-center">Domaines de Services</h3>
              <ul className="services-list">
                <li>
                  <span className="service-bullet">●</span>
                  <div>
                    <h4 className="service-title">Marketing d&apos;Influence</h4>
                    <p className="service-description">Collaboration avec des créateurs pour des campagnes percutantes.</p>
                  </div>
                </li>
                <li>
                  <span className="service-bullet">●</span>
                  <div>
                    <h4 className="service-title">Marketing de Célébrités</h4>
                    <p className="service-description">Accès à des personnalités via l&apos;entité &quot;Open&quot;.</p>
                  </div>
                </li>
                <li>
                  <span className="service-bullet">●</span>
                  <div>
                    <h4 className="service-title">Production Visuelle</h4>
                    <p className="service-description">Création de contenus innovants (3D, stop-motion) avec des artistes digitaux.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`content-section ${activeSection === 'maturite' ? 'active' : ''}`}>
          <h2>Maturité & Croissance</h2>
          <p className="section-description max-w-3xl">
            Bien que jeune, Agence Gust démontre une maturité impressionnante. Sa capacité à attirer des clients de premier plan et à opérer à l&apos;international dès sa création témoigne d&apos;une stratégie d&apos;entrée sur le marché réussie. Cette section met en lumière les facteurs clés de sa croissance rapide et les défis inhérents à son expansion.
          </p>
          <div className="card">
            <h3>Trajectoire et Portefeuille</h3>
            <div className="timeline">
              <div className="timeline-item">
                <p className="timeline-title">Mai 2023 : Création</p>
                <p className="timeline-description">Enregistrement de la SAS avec un modèle opérationnel léger et un capital de 100€.</p>
              </div>
              <div className="timeline-item">
                <p className="timeline-title">2023-2024 : Acquisition Rapide</p>
                <p className="timeline-description">Signature de contrats avec un portefeuille de marques de premier plan, validant la proposition de valeur.</p>
              </div>
              <div className="timeline-item">
                <p className="timeline-title">Aujourd&apos;hui : Phase de Croissance</p>
                <p className="timeline-description">Opérations internationales (EMEA, USA, Canada) et défi de la mise à l&apos;échelle du modèle basé sur le réseau.</p>
              </div>
            </div>
            <hr />
            <h4 className="text-center">Quelques Références Clients</h4>
            <div className="client-logos">
              <div className="client-logo-placeholder">Vestiaire Collective</div>
              <div className="client-logo-placeholder">Showroomprivé</div>
              <div className="client-logo-placeholder">Orange</div>
              <div className="client-logo-placeholder">Nivea</div>
              <div className="client-logo-placeholder">Quick</div>
              <div className="client-logo-placeholder">Nestlé</div>
            </div>
          </div>
        </section>

        <section className={`content-section ${activeSection === 'performance' ? 'active' : ''}`}>
          <h2>Dashboard de Performance (KPI)</h2>
          <p className="section-description max-w-3xl">
            Pour piloter sa croissance, Agence Gust doit s&apos;appuyer sur des données fiables. Nous avons identifié quatre indicateurs clés de performance (KPI) essentiels. Ce tableau de bord interactif simule le suivi de ces métriques, qui sont vitales pour mesurer l&apos;efficacité des ventes, l&apos;impact des campagnes, la fidélité des clients et la santé financière de l&apos;agence.
          </p>
          <AnalyticsCharts />
        </section>

        <section className={`content-section ${activeSection === 'recommandations' ? 'active' : ''}`}>
          <h2>Recommandations Stratégiques</h2>
          <p className="section-description max-w-3xl">
            Pour transformer sa croissance rapide en succès durable, Agence Gust doit se concentrer sur la consolidation de ses opérations et la capitalisation de ses succès précoces. Les recommandations suivantes visent à renforcer son modèle, à développer sa propre image de marque et à systématiser la prise de décision basée sur les données. Cliquez sur chaque carte pour voir la justification.
          </p>
          <div className="recommendations-container">
            <div className="recommendation-card">
              <div className="recommendation-header" onClick={() => toggleRecommendation(0)}>
                <h3 className="recommendation-title">1. Formaliser la Gestion des Partenaires</h3>
                <p className="recommendation-description">
                  Développer des processus clairs pour l&apos;évaluation et la gestion du réseau de talents. Mettre en place des SLA (Accords de Niveau de Service) pour garantir la qualité et la fiabilité.
                </p>
                <div className={`recommendation-details ${expandedRecommendations.has(0) ? 'show' : ''}`}>
                  <strong>Justification :</strong> Réduit les risques liés au contrôle qualité et à la disponibilité des partenaires, transformant une dépendance externe en une force opérationnelle structurée et scalable.
                </div>
              </div>
            </div>
            <div className="recommendation-card">
              <div className="recommendation-header" onClick={() => toggleRecommendation(1)}>
                <h3 className="recommendation-title">2. Construire une Stratégie de Contenu Propre</h3>
                <p className="recommendation-description">
                  Créer une section &quot;Études de Cas&quot; ou un blog sur le site pour démontrer l&apos;expertise, améliorer le SEO et générer des leads entrants. Publier des analyses de tendances.
                </p>
                <div className={`recommendation-details ${expandedRecommendations.has(1) ? 'show' : ''}`}>
                  <strong>Justification :</strong> Une agence de communication doit communiquer son propre succès. Cela établit un leadership d&apos;opinion, fournit des preuves tangibles de l&apos;efficacité des &quot;Stop-scrollers&quot; et réduit la dépendance à la prospection directe.
                </div>
              </div>
            </div>
            <div className="recommendation-card">
              <div className="recommendation-header" onClick={() => toggleRecommendation(2)}>
                <h3 className="recommendation-title">3. Mettre en Place un Système de Données Centralisé</h3>
                <p className="recommendation-description">
                  Investir dans un CRM ou un outil de gestion pour suivre systématiquement les KPI, du lead initial à la rentabilité du projet. Automatiser le reporting.
                </p>
                <div className={`recommendation-details ${expandedRecommendations.has(2) ? 'show' : ''}`}>
                  <strong>Justification :</strong> Le suivi manuel est insoutenable à long terme. Un système centralisé assure la précision des données, fournit des insights en temps réel et permet une prise de décision stratégique agile et éclairée.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
