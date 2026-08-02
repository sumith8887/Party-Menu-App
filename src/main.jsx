import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { SavedRecipesProvider } from "./context/SavedRecipesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SavedRecipesProvider>
        <App />
      </SavedRecipesProvider>
    </AuthProvider>
  </React.StrictMode>
);