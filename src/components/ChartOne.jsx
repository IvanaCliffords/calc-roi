import React, { useState, useContext, useEffect } from "react";
import { ROICalcContext } from "../context/context";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../screens/styles.scss"


const ChartOne = ({
  potentialRevenue,
  revenueWithoutTargetCool,
  annualRevenueFromTargetCool,
}) => {
  const { state, dispatch } = useContext(ROICalcContext);
  const {
    isLadocaine,
    patientsPerDay,
    ladocaineQt,
    averageTimePerPatient,
    workDaysNumber,
    averageCostPerProcedure,
    ladocaineTime,
    extraCostPerProcedure,
  } = state;

  // chart js stacked bar chart start

  const [chartOptions, setChartOptions] = useState({
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
          ticks: {
            color: "#000",
            font: {
              size: 12,
              family: "Avenir Next",
            },
            // Include a dollar sign in the ticks
            callback: function (value) {
              return "$" + value;
            },
          },
        },
        x: {
          stacked: true,
          ticks: {
            color: "#000",
            font: {
              size: 12,
              family: "Avenir Next",
            },
          },
        },
      },
      title: {
        display: true,
        text: "",
        fontSize: 20,
      },
      plugins: {
        legend: {
          onClick: null,
          labels: {
            color: "#000",
            font: {
              size: 12,
              family: "Avenir Next",
            },
          },
        },
      },
    },
  });

  const [chartData, setChartData] = useState({
    labels: ["1", "2", "3"],
    datasets: [
      {
        label: "",
        data: [],
        type: "bar",
        backgroundColor: [],
        borderWidth: 1,
      },

      {
        label: "",
        data: [],
        type: "bar",
        backgroundColor: [],
        borderWidth: 1,
      },
      {
        label: "",
        data: [],
        type: "line",
        fill: false,
        borderColor: "#000",
        borderWidth: 3,
      },
    ],
  });

  // useEffect(() => {
  //   setChartData({
  //     labels: [
  //       `Total: ${revenueWithoutTargetCool.toLocaleString()}`,
  //       `Total: ${(annualRevenueFromTargetCool + revenueWithoutTargetCool).toLocaleString()}`,
  //       `Total: ${
  //         (potentialRevenue +
  //         annualRevenueFromTargetCool +
  //         revenueWithoutTargetCool).toLocaleString()
  //       }`,
  //     ],
  //     datasets: [
  //       {
  //         type: "bar",
  //         label: "Revenue From New Patients",
  //         data: [0, 0, potentialRevenue],
  //         backgroundColor: ["#000"],
  //         borderWidth: 1,
  //         borderColor: "#000",
  //         order: 3,
  //       },
  //       {
  //         label: "Revenue From TargetCool",
  //         type: "bar",
  //         data: [0, annualRevenueFromTargetCool, annualRevenueFromTargetCool],
  //         backgroundColor: ["#41b6e5"],
  //         borderWidth: 1,
  //         borderColor: "#41b6e5",
  //         order: 2,
  //       },
  //       {
  //         label: "Revenue Without TargetCool",
  //         data: [
  //           revenueWithoutTargetCool,
  //           revenueWithoutTargetCool,
  //           revenueWithoutTargetCool,
  //         ],
  //         fill: false,
  //         backgroundColor: "#e1e2e2",
  //         borderWidth: 0,
  //         order: 1,
  //       },
  //     ],
  //   });
  // }, [
  //   isLadocaine,
  //   patientsPerDay,
  //   ladocaineQt,
  //   averageTimePerPatient,
  //   workDaysNumber,
  //   averageCostPerProcedure,
  //   ladocaineTime,
  //   extraCostPerProcedure,
  // ]);

  return (
    <div className="chart-container">
      <Bar data={chartData} options={chartOptions.options} />
    </div>
  );
};

export default ChartOne;
