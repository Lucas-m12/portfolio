"use client";

import * as Separtor from "@radix-ui/react-separator";

export const Divider = (props: Separtor.SeparatorProps) => {
	return (
		<Separtor.Root {...props} className="h-6 w-[1px] bg-gray-100 dark:bg-gray-dark-100" />
	);
};