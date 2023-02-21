import ROICalc from "./screens/ROIScreen";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function App() {
  return <ROICalc />;
}
export default App;
