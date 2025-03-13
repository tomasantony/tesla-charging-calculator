
import React from "react";
import ReactDOM from "react-dom/client";
import TeslaChargingCalculator from "./TeslaChargingCalculator";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TeslaChargingCalculator />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
