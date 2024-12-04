"use client";

import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [api, setApi] = useState([]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/KHALIDCHOUHANGUJJAR/repos"
      );
      setApi(response.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ api, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export default ThemeProvider;
