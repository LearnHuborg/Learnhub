import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedUserId = localStorage.getItem("userId");

    setIsAuthenticated(!!token);
    setUsername(storedUsername);
    setEmail(storedEmail);
    setUserId(storedUserId);
  }, []);

  const login = (token, username, email, userId) => {
    try {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("userId", userId);
      setIsAuthenticated(true);
      setUsername(username);
      setEmail(email);
      setUserId(userId);
    } catch (error) {
      console.error("Error during login process:", error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      setIsAuthenticated(false);
      setUsername(null);
      setEmail(null);
      setUserId(null);
    } catch (error) {
      console.error("Error during logout process:", error);
    }
  };

  const checkSession = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      logout();
    }
  };

  useEffect(() => {
    const interval = setInterval(checkSession, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, email, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
