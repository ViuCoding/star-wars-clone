import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// styles
import "./index.scss";

//context provider
import DataProvider from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("App")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
