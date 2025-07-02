import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const Graph = ({ graphData }) => {
  const hasData = Array.isArray(graphData) && graphData.length > 0;

  const labels = hasData
    ? graphData.map((item) => `${item.clickDate}`)
    : Array(14).fill("");

  const userPerDay = hasData
    ? graphData.map((item) => item.count)
    : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: userPerDay,
        backgroundColor: hasData ? "#3b82f6" : "rgba(54, 162, 235, 0.1)",
        borderColor: "#1D2327",
        fill: true,
        tension: 0.4,
        barThickness: 20,
        categoryPercentage: 1.5,
        barPercentage: 1.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#000000", // Legend text color
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000000", // Tick label color
          callback: (value) =>
            Number.isInteger(value) ? value.toString() : "",
        },
        title: {
          display: true,
          text: "Number Of Clicks",
          color: "#000000", // Axis title color
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
          },
        },
      },
      x: {
        ticks: {
          color: "#000000", // Tick label color
        },
        title: {
          display: true,
          text: "Date",
          color: "#000000", // Axis title color
          font: {
            family: "Arial",
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
