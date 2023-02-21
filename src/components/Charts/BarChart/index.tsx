import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Mock Data',
      data: [10, 20, 30, 40, 20, 20, 15, 29, 15, 20, 25, 45],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [12, 22, 32, 42, 51],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
  borderWidth: 1,
};

const BarChart = () => {
  return (
    <div className="">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
