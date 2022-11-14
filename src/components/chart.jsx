import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["day", "eve", "max", "min", "morn", "night"];

export function Chart(dataSet) {
  const { temp } = dataSet.dataSet || {};
  const newData = temp && Object?.values(temp);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: newData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <div>
        <span></span>
      </div>
      <Line options={options} data={data} />;
    </div>
  );
}
