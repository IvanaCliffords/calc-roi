import React, { useContext, useState, useEffect } from "react";
import { ROICalcContext } from "../context/context";

const LegendChartOne = ({
  timeSaved,
  potentialPatients,
  potentialRevenue,
  revenueWithoutTargetCool,
  annualRevenueFromTargetCool,
  savedTimePercentagePerPatient,
}) => {
  const { state, dispatch } = useContext(ROICalcContext);
  const {
    workDaysNumber,
    patientsPerDay,
    averageTimePerPatient,
    ladocaineTime,
    isLadocaine,
  } = state;

  const width =
    window.innerWidth < 1200
      ? window.innerWidth < 768
        ? "80px"
        : "55px"
      : "80px";

  return (
    <div className="extra-chart-info">
      <div className="extra-chart-info-child">
        <div className="main-stats-wrapper">
          <lord-icon
            src="https://cdn.lordicon.com/bpidtwhl.json"
            trigger="loop"
            delay="3"
            colors="primary:#000,secondary:#22bfea"
            style={{
              width: width,
              height: width,
              backgroundColor: "#fff",
              marginLeft: "2.5px",
              outline: "1px solid #e6e6e6",
              borderRadius: "50px",
            }}
          ></lord-icon>
          <p>
            <span className="font-gt-ultra">{timeSaved} hrs</span>
            <br />
            Saved annually
          </p>
        </div>
        <div className="sec-stats-wrapper">
          {isLadocaine ? (
            <>
              {averageTimePerPatient > ladocaineTime ? (
                <>
                  <span style={{ color: "red" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="red"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                    {(
                      100 -
                      ((averageTimePerPatient - ladocaineTime) * 100) /
                        averageTimePerPatient
                    ).toFixed(2)}
                    % {/* {savedTimePercentagePerPatient}% */}
                  </span>
                  <p>Less time per patient</p>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="extra-chart-info-child">
        <div className="main-stats-wrapper">
          <lord-icon
            src="https://cdn.lordicon.com/fhvazklt.json"
            trigger="loop"
            colors="primary:#127CBE,secondary:#22bfea"
            style={{
              width: width,
              height: width,
              backgroundColor: "#fff",
              marginLeft: "2.5px",
              outline: "1px solid #e6e6e6",
              borderRadius: "50px",
            }}
          ></lord-icon>
          <p>
            <span className="font-gt-ultra">{potentialPatients}</span>
            <br />
            Potential new patients annually
          </p>
        </div>
        <div className="sec-stats-wrapper">
          {isLadocaine && (
            <>
              {workDaysNumber > 0 && patientsPerDay > 0 && (
                <>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="lime"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    {(
                      ((patientsPerDay * workDaysNumber * 50 +
                        potentialPatients) *
                        100) /
                        (patientsPerDay * workDaysNumber * 50) -
                      100
                    ).toFixed(2)}%
                  </span>{" "}
                  <p>Increase in number of patients </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="extra-chart-info-child">
        <div className="main-stats-wrapper">
          <lord-icon
            src="https://cdn.lordicon.com/ykohtlhx.json"
            trigger="loop"
            colors="primary:#22bfea,secondary:#071F4C"
            style={{
              width: width,
              height: width,
              backgroundColor: "#fff",
              marginLeft: "2.5px",
              outline: "1px solid #e6e6e6",
              borderRadius: "50px",
            }}
          ></lord-icon>

          <p>
            <span className="font-gt-ultra">
              ${annualRevenueFromTargetCool.toLocaleString()}
            </span>
            <br />
            Revenue from TargetCool Fee
          </p>
        </div>
        <div className="sec-stats-wrapper">
          {annualRevenueFromTargetCool > 0 && (
            <>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="lime"
                  className="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
                {(
                  (annualRevenueFromTargetCool * 100) /
                  revenueWithoutTargetCool
                ).toFixed(2)}%
              </span>{" "}
              <p>Of your current revenue</p>
            </>
          )}
        </div>
      </div>
      <div className="extra-chart-info-child">
        <div className="main-stats-wrapper">
          <lord-icon
            src="https://cdn.lordicon.com/jvignymj.json"
            trigger="loop"
            delay="3s"
            colors="primary:#000000,secondary:#22bfea"
            style={{
              width: width,
              height: width,
              backgroundColor: "#fff",
              marginLeft: "2.5px",
              outline: "1px solid #e6e6e6",
              borderRadius: "50px",
            }}
          ></lord-icon>
          <p>
            <span className="font-gt-ultra">
              $
              {timeSaved > 0
                ? (
                    potentialRevenue +
                    annualRevenueFromTargetCool +
                    revenueWithoutTargetCool
                  ).toLocaleString()
                : 0}
            </span>
            <br />
            Total Potential Annual Revenue
          </p>
        </div>
        <div className="sec-stats-wrapper">
          {workDaysNumber > 0 && patientsPerDay > 0 && (
            <>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="lime"
                  className="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
                {(
                  100 -
                  (revenueWithoutTargetCool * 100) /
                    (potentialRevenue +
                      annualRevenueFromTargetCool +
                      revenueWithoutTargetCool)
                ).toFixed(2)}%
              </span>{" "}
              <p>Increase from your current revenue</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegendChartOne;
