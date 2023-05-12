import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth";
import StateContext from "./context/stateContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateContext>
        <App />
      </StateContext>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
