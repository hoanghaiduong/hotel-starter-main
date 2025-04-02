import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import HotelProvider from "./context/HotelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HotelProvider>
      <App />
    </HotelProvider>
  </React.StrictMode>
);
