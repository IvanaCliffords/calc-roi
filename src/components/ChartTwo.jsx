import React, { useState, useContext, useEffect } from "react";
import { ROICalcContext } from "../context/context";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../screens/styles.scss";
const ChartTwo = ({
  revenueArray,
  costsArray,
  potentialRevenueArray,
}) => {
  const { state, dispatch } = useContext(ROICalcContext);
  const {
    workDaysNumber,
    patientsPerDay,
    extraCostPerProcedure,
    isLadocaine,
    ladocaineQt,
    averageTimePerPatient,
    ladocaineTime,
    timePerPatient,
    daysInWeek,
    averageCostPerProcedure,
    extraCharge,
  } = state;

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
            callback: function (value, index, ticks) {
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
      legend: {
        display: true,
        position: "top",
        // textAlign: "left",
      },
    },
  });

  const [chartData, setChartData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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

  useEffect(() => {
    setChartData({
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "Revenue From TargetCool",
          type: "bar",
          // data: increasedRevenueStateArray,
          data: revenueArray,

          backgroundColor: ["#fff"],
          borderWidth: 1,
          borderColor: "#41b6e5",
          order: 2,
        },
        {
          label: "Revenue From New Patients",
          type: "bar",
          // data: potentialRevenueStateArray,
          data: potentialRevenueArray,

          backgroundColor: "#41b6e5",
          borderWidth: 1,
          borderColor: "#41b6e5",
          order: 2,
        },
        {
          label: "Cost Of The Device",
          data: costsArray,
          fill: false,
          borderColor: "#071F4C",
          backgroundColor: "#071F4C",
          borderWidth: 3,
          order: 1,
          tension: 1,
        },
      ],
    });
  }, [
    workDaysNumber,
    patientsPerDay,
    averageTimePerPatient,
    ladocaineTime,
    extraCostPerProcedure,
    isLadocaine,
    ladocaineQt,
    timePerPatient,
    daysInWeek,
    averageCostPerProcedure,
    extraCharge,
  ]);

  return (
    <div className="chart-container">
      {costsArray && revenueArray && (
        <>
          <Line data={chartData} options={chartOptions.options} />
        </>
      )}
    </div>
  );
};

export default ChartTwo;
