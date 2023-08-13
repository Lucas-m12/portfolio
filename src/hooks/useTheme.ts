import { useEffect, useState } from "react";

type ThemeOptions = "dark" | "light";

export const useTheme = () => {
	const [selectedTheme, setSelectedTheme] = useState<ThemeOptions>("dark");

	const toggleTheme = () => {
		const newTheme = selectedTheme === "light" ? "dark" : "light";
		setSelectedTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	useEffect(() => {
		if (window) {
			const storedTheme = localStorage.getItem("theme");
			if (
				storedTheme === "dark" ||
				(!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				setSelectedTheme("dark");
				document.documentElement.classList.toggle("dark", true);
			} else {
				setSelectedTheme("light");
				document.documentElement.classList.toggle("dark", false);
			}
		}
	}, []);

	return {
		selectedTheme,
		toggleTheme,
	};

};
