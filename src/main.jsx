import "./index.css";
import { createRoot } from "react-dom/client";
import { Router } from "../src/router/Router.jsx";
import { AuthProvider } from "./context/Auth/AuthProvider.jsx";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={reduxStore}>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </ReduxProvider>
);
