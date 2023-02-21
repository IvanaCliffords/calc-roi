import React, { useContext } from "react";
import { ROICalcContext } from "../context/context";

const Decrement = ({ name, actionType }) => {
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
      className="counter-btn counter-btn-minus"
    ></button>
  );
};

export default Decrement;
