"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeCard({
  children,
  className = "",
  delay = 0,
  hover = false,
}) {
  const { theme } = useTheme();

  const baseClasses = "rounded-xl transition-all duration-300";

  const themeStyles = {
    light: {
      standard: "bg-gray-50/95 border border-gray-200 shadow-md text-gray-800",
      hover: hover ? "transform hover:-translate-y-2 hover:shadow-xl" : "",
    },
    dark: {
      standard:
        "bg-gray-800/90 border border-gray-700 shadow-md shadow-gray-900/30 text-gray-200",
      hover: hover
        ? "transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20"
        : "",
    },
  };

  const animationClass =
    delay > 0 ? `animate-fade-in delay-${delay}` : "animate-fade-in";

  return (
    <div
      className={`${baseClasses} ${themeStyles[theme].standard} ${themeStyles[theme].hover} ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}
