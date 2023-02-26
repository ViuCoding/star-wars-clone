import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// styles
import "./index.scss";

//context providers
import DataProvider from "./context/DataContext";
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("App")).render(
  <React.StrictMode>
    <UserProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </UserProvider>
  </React.StrictMode>
);
