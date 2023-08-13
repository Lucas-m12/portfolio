"use client";

export const usePreferenceTheme = () => {
	let theme = "light";

	if (typeof window !== "undefined") {
		theme = localStorage.getItem("theme") || "light";
	}

	return {
		theme: theme
	};
};