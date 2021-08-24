import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BudgetContextProvider from "./context/budget-context";

ReactDOM.render(
  <React.StrictMode>
    <BudgetContextProvider>
      <App />
    </BudgetContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
