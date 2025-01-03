import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Reports = () => {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 103, 0, 0.6)',
        borderColor: 'rgba(255, 103, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(58, 110, 165)',
        tension: 0.1,
      },
    ],
  };

  const productCategoryData = {
    labels: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Toys'],
    datasets: [
      {
        data: [300, 200, 150, 100, 50],
        backgroundColor: [
          'rgba(255, 103, 0, 0.6)',
          'rgba(58, 110, 165, 0.6)',
          'rgba(0, 78, 152, 0.6)',
          'rgba(192, 192, 192, 0.6)',
          'rgba(235, 235, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 103, 0, 1)',
          'rgba(58, 110, 165, 1)',
          'rgba(0, 78, 152, 1)',
          'rgba(192, 192, 192, 1)',
          'rgba(235, 235, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-secondary dark:text-light mb-6">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-surface p-6 rounded-lg shadow-elevation">
          <h3 className="text-lg font-semibold mb-4 text-secondary dark:text-light">Monthly Sales</h3>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>
        <div className="bg-white dark:bg-dark-surface p-6 rounded-lg shadow-elevation">
          <h3 className="text-lg font-semibold mb-4 text-secondary dark:text-light">User Growth</h3>
          <Line data={userGrowthData} options={{ responsive: true }} />
        </div>
        <div className="bg-white dark:bg-dark-surface p-6 rounded-lg shadow-elevation md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-secondary dark:text-light">Product Categories</h3>
          <Pie data={productCategoryData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Reports;

