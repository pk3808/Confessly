"use client";

import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme.background === "#000000");
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white px-4 py-2 rounded-full shadow-md"
    >
      {isDark ? (
        <LightMode fontSize="small" />
      ) : (
        <DarkMode fontSize="small" />
      )}
 
    </button>
  );
}
