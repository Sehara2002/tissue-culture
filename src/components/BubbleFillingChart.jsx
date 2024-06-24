// src/components/BubbleFillingChart.js
import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleFillingChart = ({ percentage }) => {
  const data = {
    datasets: [
      {
        label: 'Bubble Chart',
        data: [{ x: 50, y: 50, r: percentage }],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        hoverBackgroundColor: 'rgba(0, 123, 255, 1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
        min: 0,
        max: 100,
      },
      y: {
        display: false,
        min: 0,
        max: 100,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return <Bubble data={data} options={options} />;
};

export default BubbleFillingChart;
