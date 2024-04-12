import React, { createContext, useState } from 'react';
/**
 * context provider for managing authentication state
 * 
 * this component pgives authentication related work such as login, logout
 * and manages the authentication state using react context
 * @component
 * @param {Object} children The child components wrapped by the AuthProvider.
 * @return authentication provider
 */

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // manage authentication status

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
  * Function to handle user login.
  * 
  * @param {Object} formData The form data containing user credentials.
  * @returns {Promise<boolean>}  true if login is successful, otherwise false.
  */

  const login = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsAuthenticated(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  /**
 *  handle user logout.
 */

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};