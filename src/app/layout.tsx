import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lucas Marinho da Silva",
	description: "Portfolio sobre Lucas Marinho da Silva",
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<link 
				rel="icon" 
				href="/assets/icons/logo.svg" 
				type="image/<generated>"
				sizes="<generated>" 
			/>
			<body 
				className={`${inter.className} bg-gray-default dark:bg-gray-dark-default`}
			>
				{children}
			</body>
		</html>
	);
}
