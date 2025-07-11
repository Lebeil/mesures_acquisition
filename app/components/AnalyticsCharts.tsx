'use client';

import { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Interface pour MathJax
interface MathJaxType {
  typesetPromise: () => Promise<void>;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AnalyticsCharts = () => {
  // Hook pour déclencher le rendu MathJax
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mathJax = (window as unknown as { MathJax?: MathJaxType }).MathJax;
      if (mathJax?.typesetPromise) {
        mathJax.typesetPromise();
      }
    }
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 12,
          font: { size: 11 }
        }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 4,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#64748b' },
        grid: { color: '#e2e8f0' }
      },
      x: {
        ticks: { color: '#64748b' },
        grid: { display: false }
      }
    }
  };

  const cpmData = {
    labels: ['T1 2024', 'T2 2024', 'T3 2024', 'T4 2024 (P)'],
    datasets: [{
      label: 'CPM (€)',
      data: [8, 7.5, 7, 6.8],
      backgroundColor: 'rgba(245, 158, 11, 0.6)',
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 1
    }]
  };

  const cpcData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'CPC (€)',
      data: [0.8, 0.75, 0.7, 0.72, 0.68, 0.65],
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 1)',
      tension: 0.3
    }]
  };

  const cpaData = {
    labels: ['Campagne A', 'Campagne B', 'Campagne C'],
    datasets: [{
      label: 'CPA (€)',
      data: [25, 32, 28],
      backgroundColor: 'rgba(16, 185, 129, 0.6)',
      borderColor: 'rgba(16, 185, 129, 1)',
      borderWidth: 1
    }]
  };

  const roiData = {
    labels: ['Projet Influence', 'Projet Célébrité', 'Projet Production'],
    datasets: [{
      label: 'ROI (%)',
      data: [150, 220, 180],
      backgroundColor: 'rgba(245, 158, 11, 0.6)',
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="kpi-card">
        <h3>1. CPM (Coût Pour Mille Impressions)</h3>
        <div className="chart-container">
          <Bar data={cpmData} options={chartOptions} />
        </div>
        <p className="description">
          Mesure le coût pour 1000 impressions de vos annonces. Essentiel pour évaluer l&apos;efficacité des campagnes de notoriété.
        </p>
        <div className="formula">
          {`$$ \\text{CPM} = \\frac{800\\euro}{\\text{100000 Impressions}} \\times 1000 = 8\\euro $$`}
        </div>
      </div>

      <div className="kpi-card">
        <h3>2. CPC (Coût Par Clic)</h3>
        <div className="chart-container">
          <Line data={cpcData} options={chartOptions} />
        </div>
        <p className="description">
          Indique le coût moyen pour chaque clic sur vos annonces. Crucial pour les campagnes axées sur le trafic.
        </p>
        <div className="formula">
          {`$$ \\text{CPC} = \\frac{80\\euro}{\\text{100 Clics}} = 0.80\\euro $$`}
        </div>
      </div>

      <div className="kpi-card">
        <h3>3. CPA (Coût Par Acquisition)</h3>
        <div className="chart-container">
          <Bar data={cpaData} options={chartOptions} />
        </div>
        <p className="description">
          Mesure le coût moyen pour obtenir une acquisition (ex: lead, vente, inscription). Indicateur clé de l&apos;efficacité de la conversion.
        </p>
        <div className="formula">
          {`$$ \\text{CPA} = \\frac{250\\euro}{\\text{10 Acquisitions}} = 25\\euro $$`}
        </div>
      </div>

      <div className="kpi-card">
        <h3>4. ROI (Retour sur Investissement)</h3>
        <div className="chart-container">
          <Bar data={roiData} options={chartOptions} />
        </div>
        <p className="description">
          Évalue l&apos;efficacité financière des campagnes en comparant le gain à l&apos;investissement. Le KPI ultime pour mesurer la valeur.
        </p>
        <div className="formula">
          {`$$ \\text{ROI} = \\frac{(250\\euro - 100\\euro)}{100\\euro} \\times 100 = 150\\% $$`}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts; 