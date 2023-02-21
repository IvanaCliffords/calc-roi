import React from "react";
import ChartThree from "./ChartThree";
const LegendChartTwo = ({
  ROI,
  monthsUntilCostPaidOff,
  patientsUntilCostPaid,
  potentialRevenue,
  revenueWithoutTargetCool,
  annualRevenueFromTargetCool,
}) => {
  return (
    <>
      <div className="extra-chart-info-two">
        <div className="extra-chart-info-two-roi">
          <span className="font-gt-ultra">{ROI.toLocaleString()}%</span>
          <p>Annual ROI</p>
        </div>

        <div className="extra-chart-info-two-other">
        

          <div>
            <div>
              <span className="font-gt-ultra">
                {monthsUntilCostPaidOff}{" "}
                {monthsUntilCostPaidOff > 1 ? " months" : " month"}
              </span>
              <p>Until your entire investment is recouped: </p>
            </div>
            <lord-icon
              src="https://cdn.lordicon.com/jaxhnvlv.json"
              trigger="loop"
              colors={{ primary: "#41b6e5", secondary: "#000" }}
              style={{
                width: "65px",
                height: "65px",
                backgroundColor: "#fff",
                marginLeft: "2.5px",
                //   outline: "1px solid #e6e6e6",
                //   borderRadius: "65px",
              }}
            ></lord-icon>
          </div>
          <div>
            <div>
              <span className="font-gt-ultra">
                {patientsUntilCostPaid}
                {patientsUntilCostPaid > 1 ? " patients" : " patient"}
              </span>
              <p>You need to see to pay of the entire annual investment</p>
            </div>
            <lord-icon
              src=" https://cdn.lordicon.com/xecbijqc.json"
              trigger="loop"
              colors={{ primary: "#41b6e5", secondary: "#000" }}
              style={{
                width: "65px",
                height: "65px",
                backgroundColor: "#fff",
                marginLeft: "2.5px",
              }}
            ></lord-icon>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default LegendChartTwo;
