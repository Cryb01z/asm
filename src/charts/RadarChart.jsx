// RadarChart.js
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data }) => {
  // Map "High", "Low", and "None" to numerical values
  const levelMapping = {
    HIGH: 3,
    LOW: 2,
    NONE: 1,
  };

  // Modify the data to map "High", "Low", and "None" to numerical values
  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.map((level) => levelMapping[level]), // Convert levels to numbers
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      pointBackgroundColor: "rgba(54, 162, 235, 0)",
      pointBorderColor: "rgba(54, 162, 235, 0)",
      pointRadius: 0,
      pointHoverRadius: 0,
    })),
  };

  // Customize the ticks to show "High", "Low", or "None"
  const options = {
    scales: {
      r: {
        min: 0,
        max: 3,
        angleLines: {
          color: "#4B5563", // Dark color for grid lines
        },
        grid: {
          color: "#6B7280", // Dark color for radial lines
        },
        ticks: {
          display: false,
          stepSize: 1,
          callback: function (value) {
            // Convert numerical values back to labels
            const valueMapping = {
              3: "High",
              2: "Low",
              1: "None",
            };
            return valueMapping[value] || "";
          },
        },
        pointLabels: {
          color: "#FFFFFF", // Labels for axes in white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF", // White color for the legend text
        },
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Show "High", "Low", or "None" in tooltips
            const valueMapping = {
              3: "High",
              2: "Low",
              1: "None",
            };
            return ` ${valueMapping[tooltipItem.raw]} (${tooltipItem.raw})`;
          },
        },
      },
    },
  };

  return (
    <div className="w-[300px] h-[300px] ml-16">
      <Radar data={chartData} options={options} />
    </div>
  );
};

export default RadarChart;
