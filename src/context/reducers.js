import { ACTIONS } from "./constants";

export const initialState = {
  isBuyScenario: true,
  isRentScenario: false,
  workDaysNumber: 0,
  patientsPerDay: 0,
  averageTimePerPatient: 45,
  extraCostPerProcedure: 50,
  isLadocaine: false,
  ladocaineQt: 50,
  initialDeviceCost: 5000,
  subscriptionCost: 300,
  averageCostPerProcedure: 800,
  ladocaineTime: 30, 
  workWeekNumber: 50,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.IS_BUY_SCENARIO:
      return { ...state, isRentScenaro: false, isBuyScenario: true };
    case ACTIONS.IS_RENT_SCENARIO:
      return { ...state, isBuyScenario: false, isRentScenaro: true };

    case ACTIONS.WORK_DAY_DECREMENT:
      if (state.workDaysNumber > 1) {
        return { ...state, workDaysNumber: Number(state.workDaysNumber) - 1 };
      } else return { ...state, workDaysNumber: 0 };
    case ACTIONS.WORK_DAY_INCREMENT:
      if (state.workDaysNumber < 7) {
        return { ...state, workDaysNumber: Number(state.workDaysNumber) + 1 };
      } else return { ...state, workDaysNumber: 7 };
    case ACTIONS.WORK_DAY_INPUT:
      if (payload) {
        if (payload < 8) {
          return { ...state, workDaysNumber: Number(payload) };
        } else return { ...state, workDaysNumber: 7 };
      } else return { ...state, workDaysNumber: 0 };

    case ACTIONS.PATIENT_PER_DAY_DECREMENT:
      if (state.patientsPerDay > 0) {
        return { ...state, patientsPerDay: Number(state.patientsPerDay) - 1 };
      } else return { ...state, patientsPerDay: 0 };
    case ACTIONS.PATIENT_PER_DAY_INCREMENT:
      if (state.patientsPerDay < 100) {
        return { ...state, patientsPerDay: Number(state.patientsPerDay) + 1 };
      } else return { ...state, patientsPerDay: 100 };
    case ACTIONS.PATIENT_PER_DAY_INPUT:
      if (payload) {
        if (payload < 101) {
          return { ...state, patientsPerDay: Number(payload) };
        } else return { ...state, patientsPerDay: 100 };
      } else return { ...state, patientsPerDay: 0 };

    case ACTIONS.AVERAGE_PROCEDURE_COST_INPUT:
      if (payload > 0) {
        return { ...state, averageCostPerProcedure: Number(payload) };
      } else return { ...state, averageCostPerProcedure: 0 };

    case ACTIONS.TIME_PER_PATIENT_DECREMENT:
      if (state.averageTimePerPatient > 15) {
        return {
          ...state,
          averageTimePerPatient: Number(state.averageTimePerPatient) - 15,
        };
      }
    case ACTIONS.TIME_PER_PATIENT_INCREMENT:
      return {
        ...state,
        averageTimePerPatient: Number(state.averageTimePerPatient) + 15,
      };

    case ACTIONS.TIME_PER_PATIENT_INPUT:
      if (payload) {
        if (payload < 120) {
          return { ...state, averageTimePerPatient: Number(payload) };
        } else return { ...state, averageTimePerPatient: 120 };
      } else return { ...state, averageTimePerPatient: 15 };

    // DO THEY USE TOPICAL LADOCAINE
    case ACTIONS.IS_LADOCAINE:
      return { ...state, isLadocaine: payload };
    case ACTIONS.IS_NOT_LADOCAINE:
      return { ...state, isLadocaine: payload };
    case ACTIONS.LADOCAINEQNT:
      if (payload) {
        return {
          ...state,
          ladocaineQt: Number(payload),
        };
      } else
        return {
          ...state,
          ladocaineQt: 25,
        };

    // HOW MUCH DO THEY UPCHARGE FOR A PROCEDURE
    case ACTIONS.PROCEDURE_EXTRA_FEE:
      if (payload) {
        if (payload > 9) {
          return { ...state, extraCostPerProcedure: Number(payload) };
        }
      }

    default:
      return state;
  }
};
