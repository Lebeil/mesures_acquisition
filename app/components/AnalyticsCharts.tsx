'use client';

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
import { Bar, Doughnut, Line } from 'react-chartjs-2';

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

  const acquisitionData = {
    labels: ['T1 2024', 'T2 2024', 'T3 2024', 'T4 2024 (P)'],
    datasets: [{
      label: 'Nouveaux Clients',
      data: [5, 8, 12, 10],
      backgroundColor: 'rgba(245, 158, 11, 0.6)',
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 1
    }]
  };

  const engagementData = {
    labels: ['J\'aime', 'Commentaires', 'Partages', 'Sauvegardes'],
    datasets: [{
      label: 'Répartition Engagement',
      data: [65, 15, 10, 10],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(245, 158, 11, 0.7)',
        'rgba(107, 114, 128, 0.7)'
      ],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };

  const retentionData = {
    labels: ['2023', 'T1 2024', 'T2 2024', 'T3 2024'],
    datasets: [{
      label: 'Taux de Rétention (%)',
      data: [60, 65, 75, 72],
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 1)',
      tension: 0.3
    }]
  };

  const profitabilityData = {
    labels: ['Influence', 'Célébrité', 'Production'],
    datasets: [
      {
        label: 'Revenu (€k)',
        data: [50, 120, 75],
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1
      },
      {
        label: 'Coûts (€k)',
        data: [35, 95, 45],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }
    ]
  };

  const doughnutOptions = {
    ...chartOptions,
    scales: {
      y: { display: false },
      x: { display: false }
    }
  };

  const retentionOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        ...chartOptions.scales.y,
        suggestedMax: 100
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="kpi-card">
        <h3>1. Taux d&apos;Acquisition Clients</h3>
        <div className="chart-container">
          <Bar data={acquisitionData} options={chartOptions} />
        </div>
        <p className="description">
          Mesure la capacité à attirer de nouveaux clients, essentielle pour un modèle basé sur le projet.
        </p>
      </div>

      <div className="kpi-card">
        <h3>2. Taux d&apos;Engagement Campagnes</h3>
        <div className="chart-container">
          <Doughnut data={engagementData} options={doughnutOptions} />
        </div>
        <p className="description">
          Valide la promesse des &quot;Stop-scrollers&quot; en mesurant l&apos;interaction du public.
        </p>
      </div>

      <div className="kpi-card">
        <h3>3. Taux de Rétention Client</h3>
        <div className="chart-container">
          <Line data={retentionData} options={retentionOptions} />
        </div>
        <p className="description">
          Indique la satisfaction client et la stabilité des revenus à long terme.
        </p>
      </div>

      <div className="kpi-card">
        <h3>4. Rentabilité par Projet</h3>
        <div className="chart-container">
          <Bar data={profitabilityData} options={chartOptions} />
        </div>
        <p className="description">
          Crucial pour la santé financière, identifie les missions les plus lucratives.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsCharts; 