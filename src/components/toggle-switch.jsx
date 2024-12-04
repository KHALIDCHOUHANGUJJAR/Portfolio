"use client";

import emoji from "react-easy-emoji";
import { useTheme } from "@/Context/ThemeProvider";
import { useEffect } from "react";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();
useEffect(() => {
  document.body.style.backgroundColor = theme === "light" ? "white" : "#000319";
  document.body.style.color = theme === "dark" ? "white" : "#000319";
}, [theme]);


  return (
    <div className="flex items-center justify-center dark:bg-gray-800 transition-all">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 rounded-full peer dark:peer-focus:ring-gray-400 transition-all">
          <div
            className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform transition-transform ${
              theme === "dark" ? "translate-x-6" : ""
            } flex items-center justify-center text-lg`}
          >
            {emoji(theme === "dark" ? "🌜" : "☀️")}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
