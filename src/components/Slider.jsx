import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export const ROISlider = styled(Slider)({
  color: "#127CBE",
  height: 7,
  "& .MuiSlider-track": {
    backgroundColor: "127CBE",
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    backgroundColor: "#fff",
    border: "1px solid #DBDBDB",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "0 0 0 20px rgba(18	124	190, 0.16)",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-rail": {
    color: "#DBDBDB",
    height: 7,
  },
});
