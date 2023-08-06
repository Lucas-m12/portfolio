"use client";

export const usePreferenceTheme = () => {
  const theme = window ? localStorage.getItem("theme") : "light";

  return {
    theme: theme || "light"
  }
}