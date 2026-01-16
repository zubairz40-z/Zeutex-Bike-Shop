"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check cookie on mount
  useEffect(() => {
    const auth = Cookies.get("auth");
    setIsLoggedIn(!!auth);
  }, []);

  const login = () => {
    Cookies.set("auth", "true", { expires: 1 });
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove("auth");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
