"use client";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import MoonIcon from "public/assets/icons/moon.svg";
import SunIcon from "public/assets/icons/sun.svg";
import { forwardRef } from "react";

export const SwitchTheme = forwardRef<HTMLButtonElement>((_, ref) => {
	const { toggleTheme, selectedTheme } = useTheme();

	return (
		<button className="inline-flex justify-between w-full" onClick={toggleTheme} ref={ref}>
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
	);
});

SwitchTheme.displayName = "SwitchTheme";
