import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
makeServer();

import {
  AuthContext,
  AuthProvider,
} from "./Frontend/Context/AuthContext/AuthContext.jsx";

export const useAuth = () => useContext(AuthContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
