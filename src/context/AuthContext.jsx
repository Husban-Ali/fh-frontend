import React, { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    const storedToken = localStorage.getItem("authToken");
    return storedToken ? JSON.parse(storedToken) : null;
  });

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", JSON.stringify(authToken));
    } else {
      localStorage.removeItem("authToken");
    }
  }, [authToken]);

  const removeAuthToken = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, removeAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
