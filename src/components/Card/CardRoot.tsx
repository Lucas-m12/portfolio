import Link, { LinkProps } from "next/link";

export const CardRoot = ({ children, ...rest }: CardRootProps) => {
	return (
		<Link
			{...rest}
			target="_blank"
			className="w-56 h-72 bg-gray-50 dark:bg-gray-dark-50 shadow-lg border rounded-lg flex flex-col items-center justify-center border-gray-300 dark:border-gray-dark-300 cursor-pointer hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-dark-100 transform transition-all duration-500 ease-in-out"
		>
			{children}
		</Link>
	);
};

export interface CardRootProps extends LinkProps {
	children: React.ReactNode
}
