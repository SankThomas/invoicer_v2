import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { AuthContextProvider } from "./context/auth"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
