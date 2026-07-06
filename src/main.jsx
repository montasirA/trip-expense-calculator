import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/analytics.css";
import App from "./App";

import { ExpenseProvider } from "./context/ExpenseContext";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>
);