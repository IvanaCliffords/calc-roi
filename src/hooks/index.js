export const calctTotalRevenuePerMonth = (
  daysInWeek,
  patientsPerDay,
  extraCharge
) => {
  let totalMonthlyRevenue;
  return (totalMonthlyRevenue = daysInWeek * patientsPerDay * extraCharge * 4);
};

export const calcAnnualRevenue = (daysInWeek, patientsPerDay, extraCharge) => {
  let annualRevenue = daysInWeek * patientsPerDay * extraCharge * 50;
  return annualRevenue;
};

export const calcRoiMonths = (
  deviceCost,
  subscriptionCost,
  daysInWeek,
  patientsPerDay,
  extraCharge
) => {
  let months = 0;
  let totalRevenue = 0;
  let cost = deviceCost;
  var revenue = daysInWeek * patientsPerDay * extraCharge * 4;
  if (revenue > subscriptionCost) {
    while (cost > totalRevenue) {
      months++;
      totalRevenue += revenue;
      if (months > 1) {
        cost += subscriptionCost;
      }
    }
  } else return <span>You need to change you job</span>;
  return months;
};

export const calcAnnualCost = (deviceCost, subscriptionCost) => {
  let annualCost = deviceCost + subscriptionCost * 11;
  return annualCost;
};

export const calcROI = (
  deviceCost,
  subscriptionCost,
  daysInWeek,
  patientsPerDay,
  extraCharge
) => {
  let roi =
    ((daysInWeek * patientsPerDay * extraCharge * 50) /
      (deviceCost + subscriptionCost * 11)) *
    100;
  let roitwoDigits = roi.toLocaleString("en-us", { minimumFractionDigits: 2 });
  return roitwoDigits;
};

export const calcTimeSaved = (
  isLadocaine,
  ladocaineQnt,
  patientsPerDay,
  daysInWeek,
  ladocaineTime
) => {
  let timeSaved = isLadocaine
    ? (((patientsPerDay * ladocaineQnt) / 100) *
        ladocaineTime *
        daysInWeek *
        50) /
      60
    : 0;
  let timeSavedTwoDigits = timeSaved > 0 ? Math.round(timeSaved) : 0;
  return timeSavedTwoDigits;
};

export const calcPatientPerTimeSaved = (
  isLadocaine,
  patientsPerDay,
  ladocaineQnt,
  timePerPatient,
  daysInWeek,
  ladocaineTime
) => {
  let timeSaved =
    isLadocaine && timePerPatient > 15
      ? ((patientsPerDay * ladocaineQnt) / 100) *
        ladocaineTime *
        daysInWeek *
        50
      : 0;
  let patientPerTimeSaved;
  if (timeSaved > 0) {
    return (patientPerTimeSaved = Math.round(timeSaved / timePerPatient));
  } else return 0;
};

export const showIncreasingCostEveryMonth = (initialCost, subscriptionCost) => {
  let numMonths = 12;
  let costs = [];
  for (let i = 0; i < numMonths; i++) {
    costs.push(initialCost + subscriptionCost * i);
  }
  return costs;
};

export const showRevenuePerMonth = (
  daysInWeek,
  patientsPerDay,
  extraCharge
) => {
  const monthlyRevenue = (daysInWeek * patientsPerDay * extraCharge * 50) / 12;
  let revenueArray = [];
  let revenue = 0;
  for (let i = 0; i < 12; i++) {
    revenue += monthlyRevenue;
    revenueArray.push(revenue);
  }
  // console.log("revenueArray: ", revenueArray);
  return revenueArray;
};

export const calcMonthsToPayOff = (
  initialCost,
  subscriptionCost,
  daysInWeek,
  patientsPerDay,
  extraCharge
) => {
  const totalCost = initialCost + subscriptionCost * 11;
  const monthlyRevenue = (daysInWeek * patientsPerDay * extraCharge * 50) / 12;
  let months = 0;
  if (monthlyRevenue > subscriptionCost) {
    // for (months = 0; remainingCost > 0; months++) {
    //   remainingCost -= monthlyRevenue;
    // }
    months = totalCost / monthlyRevenue;
    // console.log("months: ", months)
    return Math.ceil(months);
  } else return "";
};

export const calcPotentialRevenue = (
  isLadocaine,
  patientsPerDay,
  ladocaineQnt,
  timePerPatient,
  daysInWeek,
  averageCostPerProcedure,
  ladocaineTime,
  extraCharge
) => {
  // time saved in hours

  let timeSaved = isLadocaine
    ? ((patientsPerDay * ladocaineQnt) / 100) * ladocaineTime * daysInWeek * 50
    : 0;
  let annualMoneyPerPatientPerTimeSaved;
  let timePerPatientWithLadocaine = timePerPatient - ladocaineTime;
  let timePerPatientWithoutLadocaine = timePerPatient;
  let percentageWithLadocaine = ladocaineQnt / 100;
  let percentageWithoutLadocaine = 1 - ladocaineQnt / 100;
  if (timeSaved > 0 && isLadocaine) {

    annualMoneyPerPatientPerTimeSaved = Math.round(
      ((percentageWithLadocaine * timeSaved) / timePerPatientWithLadocaine +
        (percentageWithoutLadocaine * timeSaved) /
          timePerPatientWithoutLadocaine) *
        (averageCostPerProcedure + extraCharge)
    );
    return annualMoneyPerPatientPerTimeSaved;
  } else return 0;
};

export const calcPotentialRevenueArray = (
  isLadocaine,
  patientsPerDay,
  ladocaineQnt,
  timePerPatient,
  daysInWeek,
  averageCostPerProcedure,
  ladocaineTime,
  extraCharge
) => {
  // time saved in minutes
  let timeSaved = isLadocaine
    ? ((patientsPerDay * ladocaineQnt) / 100) * ladocaineTime * daysInWeek * 50
    : 0;
  let moneyPerPatientPerTimeSaved;
  let timePerPatientWithLadocaine = timePerPatient - ladocaineTime;
  let timePerPatientWithoutLadocaine = timePerPatient;
  let percentageWithLadocaine = ladocaineQnt / 100;
  let percentageWithoutLadocaine = 1 - ladocaineQnt / 100;
  if (timeSaved > 0 && isLadocaine) {
    moneyPerPatientPerTimeSaved = Math.round(
      (((percentageWithLadocaine * timeSaved) / timePerPatientWithLadocaine +
        (percentageWithoutLadocaine * timeSaved) /
          timePerPatientWithoutLadocaine) *
        (averageCostPerProcedure + extraCharge)) /
        12
    );
  }
  let result = [];
  for (let i = 1; i <= 12; i++) {
    result.push(moneyPerPatientPerTimeSaved);
  }
  return result;
};

export const calcRevenueWithoutTargetCool = (
  patientsPerDay,
  averageCostPerProcedure,
  workDaysNumber
) => {
  let revenueWithoutTargetCool =
    workDaysNumber * patientsPerDay * averageCostPerProcedure * 50;
  return revenueWithoutTargetCool;
};

export const calcPatientsUntilCostPaid = (
  extraCharge,
  initialCost,
  subscriptionCost,
  daysInWeek,
  patientsPerDay
) => {
  const monthlyRevenue = (daysInWeek * patientsPerDay * extraCharge * 50) / 12;
  let patientsUntilCostPaid =
    (initialCost + 11 * subscriptionCost) / extraCharge;

  if (monthlyRevenue > subscriptionCost) {
    return (patientsUntilCostPaid + 1);
  } else return "";
};

export const calcSavedTimePercentagePerPatient = (
  averageTimePerPatient,
  ladocaineTime
) => {
  let savedTimePercentagePerPatient;
  return (savedTimePercentagePerPatient = (
    100 -
    ((averageTimePerPatient - ladocaineTime) * 100) / averageTimePerPatient
  ).toFixed(2));
};
