import "./index.css";
import { createRoot } from "react-dom/client";
import { Router } from "../src/router/Router.jsx";
import { AuthProvider } from "./context/Auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router />
  </AuthProvider>
);
