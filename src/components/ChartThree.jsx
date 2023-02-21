import React, { useState, useContext, useEffect } from "react";
import { ROICalcContext } from "../context/context";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../screens/styles.scss";

const ChartThree = ({
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

  const [chartOptions, setChartOptions] = useState({
    options: {
      elements: {},

      title: {
        text: "Annual Revenue",
        fontSize: 20,
        position: "",
      },
      plugins: {
        legend: {
          position: "bottom",
          // align: "start",
          fullSize: true,
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

  const [data, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: [
        "Revenue without TargetCool",
        "Revenue from TargetCool fee",
        "Revenue from potential patients",
      ],
      datasets: [
        {
          data: [
            revenueWithoutTargetCool,
            annualRevenueFromTargetCool,
            potentialRevenue,
          ],
          backgroundColor: ["#127CBE", "#41b6e5", "#071F4C"],
          cutout: "75%",
        },
      ],
    });
  }, [
    isLadocaine,
    patientsPerDay,
    ladocaineQt,
    averageTimePerPatient,
    workDaysNumber,
    averageCostPerProcedure,
    ladocaineTime,
    extraCostPerProcedure,
  ]);

  return (
    <div className="donut-wrapper">
      <h2>Annual Revenue</h2>
      <Doughnut data={data} options={chartOptions.options} />
    </div>
  );
};

export default ChartThree;
