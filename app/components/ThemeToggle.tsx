// app/components/ThemeToggle.tsx
"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.buttonBg,
        color: theme.color,
        padding: "10px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Switch to {theme.background === "#000000" ? "Light" : "Dark"} Mode
    </button>
  );
}
