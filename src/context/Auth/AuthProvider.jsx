import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import { AuthContext } from "../Auth/AuthContext.js";

import React from "react";

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useLocalStorage("koda3:user", {
    isLoggedIn: true,
    username: "radif",
  });

  function logout() {
    setAuthData((prev) => {
      return { ...prev, isLoggedIn: false };
    });
  }

  function login() {
    setAuthData((prev) => {
      return { ...prev, isLoggedIn: true };
    });
  }

  return (
    <AuthContext.Provider value={{ authData, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
