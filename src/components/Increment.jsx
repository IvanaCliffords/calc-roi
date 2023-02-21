import React, { useContext } from "react";
import { ROICalcContext } from "../context/context";

const Increment = ({ name, actionType }) => {
  const { state, dispatch } = useContext(ROICalcContext);

  return (
    <button
      type="button"
      onClick={() =>
        dispatch({
          type: actionType,
          name,
        })
      }
      className="counter-btn counter-btn-plus"
    >
    </button>
  );
};

export default Increment;
