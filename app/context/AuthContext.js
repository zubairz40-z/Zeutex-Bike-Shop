"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Login function
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Signup function
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Logout function
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easier access
export const useAuth = () => useContext(AuthContext);
