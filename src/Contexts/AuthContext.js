import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setIsSignedIn(true);
    setUser(userData || { email: 'user@example.com' });
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUser(null);
  };

  const value = {
    isSignedIn,
    user,
    signIn: handleSignIn,
    signOut: handleSignOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}