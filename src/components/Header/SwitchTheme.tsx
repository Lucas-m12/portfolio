"use client";
import Image from "next/image";
import MoonIcon from "public/assets/icons/moon.svg";
import SunIcon from "public/assets/icons/sun.svg";
import { useEffect, useState } from "react";

type ThemeOptions = "dark" | "light";

export const SwitchTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>("light");

  const handleToggleTheme = () => {
    const newTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }

  useEffect(() => {
    if (window) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setSelectedTheme(storedTheme as ThemeOptions);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      }
    }
  }, []);

  return (
    <button className="inline-flex justify-between w-full" onClick={handleToggleTheme}>
      <span className="hidden mobile:block text-base font-normal leading-6 text-gray-600 dark:text-gray-dark-600">
        Trocar tema
      </span>
      {
        selectedTheme === "light" ? (
          <Image 
            src={MoonIcon}
            alt="lua"
            width={24}
            height={24}
          />
        ) : (
          <Image 
            src={SunIcon}
            alt="lua"
            width={24}
            height={24}
          />   
        )
      }
    </button>
  )
}