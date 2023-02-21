import React, { useContext, useState, useEffect } from "react";
import {
  ROICalcContextProvider,
  ROICalcContext,
  ACTIONS,
} from "../context/context";
import { StyledEngineProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  // calctTotalRevenuePerMonth,
  // calcAnnualCost,
  calcAnnualRevenue,
  calcRoiMonths,
  calcROI,
  calcTimeSaved,
  calcPatientPerTimeSaved,
  showIncreasingCostEveryMonth,
  showRevenuePerMonth,
  calcPotentialRevenue,
  calcRevenueWithoutTargetCool,
  calcPotentialRevenueArray,
  calcPatientsUntilCostPaid,
  calcMonthsToPayOff,
  calcSavedTimePercentagePerPatient,
} from "../hooks";

import ChartTwo from "../components/ChartTwo";
import ChartThree from "../components/ChartThree";

import LegendChartOne from "../components/LegendChartOne";

import "./styles.scss";
import Increment from "../components/Increment";
import Decrement from "../components/Decrement";
import { ROISwitch } from "../components/Switch";
import { ROISlider } from "../components/Slider";

const ROIScreen = ({ children, name }) => {
  const { state, dispatch } = useContext(ROICalcContext);

  const {
    workDaysNumber,
    patientsPerDay,
    averageTimePerPatient,
    extraCostPerProcedure,
    isLadocaine,
    ladocaineQt,
    initialDeviceCost,
    subscriptionCost,
    averageCostPerProcedure,
    ladocaineTime,
  } = state;

  const handleLadocaineChange = (e) => {
    dispatch({
      type: ACTIONS.LADOCAINEQNT,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    console.log(
      state,
      "potentialRevenue: ",
      potentialRevenue,
      "annualRevenueFromTargetCool: ",
      annualRevenueFromTargetCool
    );
    console.log("annualRevenueFromTargetCool: ", annualRevenueFromTargetCool);
  }, [
    workDaysNumber,
    patientsPerDay,
    averageTimePerPatient,
    extraCostPerProcedure,
    isLadocaine,
    ladocaineQt,
    initialDeviceCost,
    subscriptionCost,
    averageCostPerProcedure,
    ladocaineTime,
  ]);

  const costsArray = showIncreasingCostEveryMonth(
    initialDeviceCost,
    subscriptionCost
  );

  const revenueArray = showRevenuePerMonth(
    workDaysNumber,
    patientsPerDay,
    extraCostPerProcedure
  );

  const potentialRevenueArray = calcPotentialRevenueArray(
    isLadocaine,
    patientsPerDay,
    ladocaineQt,
    averageTimePerPatient,
    workDaysNumber,
    averageCostPerProcedure,
    ladocaineTime,
    extraCostPerProcedure
  );

  const ROI = calcROI(
    initialDeviceCost,
    subscriptionCost,
    workDaysNumber,
    patientsPerDay,
    extraCostPerProcedure
  );

  const timeSaved = calcTimeSaved(
    isLadocaine,
    ladocaineQt,
    patientsPerDay,
    workDaysNumber,
    ladocaineTime
  );

  const potentialPatients = calcPatientPerTimeSaved(
    isLadocaine,
    patientsPerDay,
    ladocaineQt,
    averageTimePerPatient,
    workDaysNumber,
    ladocaineTime
  );

  const potentialRevenue = calcPotentialRevenue(
    isLadocaine,
    patientsPerDay,
    ladocaineQt,
    averageTimePerPatient,
    workDaysNumber,
    averageCostPerProcedure,
    ladocaineTime,
    extraCostPerProcedure
  );

  const revenueWithoutTargetCool = calcRevenueWithoutTargetCool(
    patientsPerDay,
    averageCostPerProcedure,
    workDaysNumber
  );

  const annualRevenueFromTargetCool = calcAnnualRevenue(
    workDaysNumber,
    patientsPerDay,
    extraCostPerProcedure
  );
  const patientsUntilCostPaid = Math.round(
    calcPatientsUntilCostPaid(
      extraCostPerProcedure,
      initialDeviceCost,
      subscriptionCost,
      workDaysNumber,
      patientsPerDay
    )
  );

  const monthsUntilCostPaidOff = calcMonthsToPayOff(
    initialDeviceCost,
    subscriptionCost,
    workDaysNumber,
    patientsPerDay,
    extraCostPerProcedure
  );

  const savedTimePercentagePerPatient = calcSavedTimePercentagePerPatient(
    averageTimePerPatient,
    ladocaineTime
  );

  return (
    <StyledEngineProvider>
      <div className="roi-section-wrapper">
        <section className="roi-form-section">
          <div className="roi-section-div">
            <h2>
              How many days a week do you give injections (Filler, Neurotoxin,
              PRP, etc.)?
            </h2>
            <div className="counter-div">
              <Decrement actionType={ACTIONS.WORK_DAY_DECREMENT} />
              <input
                type="number"
                min={0}
                max={7}
                id="days_per_week_input"
                value={workDaysNumber}
                onChange={(e) =>
                  dispatch({
                    type: ACTIONS.WORK_DAY_INPUT,
                    payload: e.target.value,
                  })
                }
                onKeyDown={(evt) =>
                  (evt.key === "e" || evt.key === "E" || evt.key === "-") &&
                  evt.preventDefault()
                }
              />
              <Increment actionType={ACTIONS.WORK_DAY_INCREMENT} />
            </div>
          </div>
          <div className="roi-section-div">
            <h2>
              How many (Filler, PRP, Neurotoxin) patients do you see in a day?
            </h2>
            <div className="counter-div">
              <Decrement actionType={ACTIONS.PATIENT_PER_DAY_DECREMENT} />
              <input
                type="number"
                min={1}
                max={100}
                id="number_patients_input"
                value={patientsPerDay}
                onChange={(e) =>
                  dispatch({
                    type: ACTIONS.PATIENT_PER_DAY_INPUT,
                    payload: e.target.value,
                  })
                }
                onKeyDown={(evt) =>
                  (evt.key === "e" || evt.key === "E" || evt.key === "-") &&
                  evt.preventDefault()
                }
              />
              <Increment actionType={ACTIONS.PATIENT_PER_DAY_INCREMENT} />
            </div>
          </div>
          <div className="roi-section-div">
            <h2 style={{}}>
              Do you apply topical lidocaine prior to injection-based procedures
              in your practice?
            </h2>

            <div className="ladocaine-form-wrapper">
              <FormControl
                component="fieldset"
                style={{ paddingLeft: "20px", display: "inline-block" }}
              >
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value={!isLadocaine}
                    control={<ROISwitch />}
                    label="Yes"
                    labelPlacement="end"
                    onChange={(e) =>
                      dispatch({
                        type: ACTIONS.IS_LADOCAINE,
                        payload: e.target.checked,
                      })
                    }
                  />
                </FormGroup>
              </FormControl>
              {isLadocaine && (
                <Box sx={{ maxWidth: 200, display: "inline-block" }}>
                  <FormControl sx={{ m: 2, minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      How often?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={ladocaineQt}
                      label="Age"
                      onChange={handleLadocaineChange}
                    >
                      <MenuItem value={25}>25%</MenuItem>
                      <MenuItem value={50}>50%</MenuItem>
                      <MenuItem value={75}>75%</MenuItem>
                      <MenuItem value={100}>100%</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </div>
          </div>

          <div className="roi-section-div">
            <h2>What is an average ammount of time spent with a patient?</h2>

            <div>
              <Box width={320}>
                <ROISlider
                  value={averageTimePerPatient}
                  min={30}
                  max={120}
                  step={15}
                  marks
                  defaultValue={800}
                  onChange={(e) => {
                    dispatch({
                      type: ACTIONS.TIME_PER_PATIENT_INPUT,
                      payload: e.target.value,
                    });
                  }}
                />
              </Box>
              <span className="slider-result font-gt-ultra">
                {averageTimePerPatient} minutes
              </span>
            </div>
          </div>
          <div className="roi-section-div">
            <h2>
              What's the average cost of injection-based procedures in your
              practice?
            </h2>
            <div>
              <Box width={320}>
                <ROISlider
                  value={averageCostPerProcedure}
                  min={0}
                  max={1500}
                  step={50}
                  marks
                  onChange={(e) => {
                    dispatch({
                      type: ACTIONS.AVERAGE_PROCEDURE_COST_INPUT,
                      payload: e.target.value,
                    });
                  }}
                />
              </Box>
              <span className="slider-result font-gt-ultra">
                ${averageCostPerProcedure.toLocaleString()}{" "}
              </span>
            </div>
          </div>
          <div className="roi-section-div">
            <h2>What cost do you plan on charging patients for TargetCool? </h2>
            <div>
              <Box width={320}>
                <ROISlider
                  value={extraCostPerProcedure}
                  min={10}
                  max={200}
                  step={10}
                  marks
                  onChange={(e) => {
                    dispatch({
                      type: ACTIONS.PROCEDURE_EXTRA_FEE,
                      payload: e.target.value,
                    });
                  }}
                />
              </Box>
              <span className="slider-result font-gt-ultra">
                ${extraCostPerProcedure}
              </span>
            </div>
          </div>

        </section>
        <section className="roi-results-section">
          <div className="roi-results-first">
            <ChartThree
              potentialRevenue={potentialRevenue}
              revenueWithoutTargetCool={revenueWithoutTargetCool}
              annualRevenueFromTargetCool={annualRevenueFromTargetCool}
            />
            <div className="roi-results-first-roi-data">
              <div>
                <span className="font-gt-ultra">{ROI.toLocaleString()}%</span>
                <p>Annual ROI</p>
              </div>
              <div>
                <span className="font-gt-ultra">
                  {monthsUntilCostPaidOff}{" "}
                  {monthsUntilCostPaidOff > 0 && (
                    <>{monthsUntilCostPaidOff > 1 ? " months" : " month"}</>
                  )}{" "}
                </span>
                {monthsUntilCostPaidOff > 0 ? (
                  <p>Until your annual investment is recovered in full.</p>
                ) : (
                  <p>
                    ROI projections indicate that the investment will not be
                    recouped.
                  </p>
                )}
              </div>
              <div>
                <span className="font-gt-ultra">
                  {monthsUntilCostPaidOff > 0 && (
                    <>
                      {patientsUntilCostPaid}
                      {patientsUntilCostPaid > 1 ? " patients" : " patient"}
                    </>
                  )}{" "}
                </span>
                {monthsUntilCostPaidOff > 0 ? (
                  <p>Until your annual investment is recovered in full.</p>
                ) : (
                  <p>
                    ROI projections indicate that the investment will not be
                    recouped.
                  </p>
                )}
              </div>
            </div>
          </div>
          <br />
          <ChartTwo
            // increasedRevenueStateArray={increasedRevenueStateArray}
            revenueArray={revenueArray}
            costsArray={costsArray}
            potentialRevenueArray={potentialRevenueArray}
            // potentialRevenueStateArray={potentialRevenueStateArray}
          />
          <br />

          <LegendChartOne
            timeSaved={timeSaved}
            potentialPatients={potentialPatients}
            annualRevenueFromTargetCool={annualRevenueFromTargetCool}
            revenueWithoutTargetCool={revenueWithoutTargetCool}
            potentialRevenue={potentialRevenue}
            savedTimePercentagePerPatient={savedTimePercentagePerPatient}
          />
          <br />
        </section>
      </div>
      <br />
    </StyledEngineProvider>
  );
};

export default function ROICalc() {
  return (
    <ROICalcContextProvider>
      <ROIScreen />
    </ROICalcContextProvider>
  );
}
