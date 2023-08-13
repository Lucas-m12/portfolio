import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lucas Marinho da Silva",
	description: "Portfolio sobre Lucas Marinho da Silva",
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://lucasmarinhodasilva.com.br",
		siteName: "Lucas Marinho da Silva",
		description: "Portfolio sobre Lucas Marinho da Silva",
		images: [
			{
				url: "https://lucasmarinhodasilva.com.br/assets/icons/logo.png",
				width: 800,
				height: 600,
				alt: "Lucas Marinho da Silva",
			}
		],
		title: "Lucas Marinho da Silva",
	},
	twitter: {
		card: "summary_large_image",
		creator: "@LucasMarinhod16",
		title: "Lucas Marinho da Silva",
		description: "Portfolio sobre Lucas Marinho da Silva",
		images: [
			{
				url: "https://lucasmarinhodasilva.com.br/assets/icons/logo.png",
				width: 800,
				height: 600,
				alt: "Lucas Marinho da Silva",
			}
		],
		site: "https://lucasmarinhodasilva.com.br"
	},
	viewport: "width=device-width, initial-scale=1",
	applicationName: "Lucas Marinho da Silva",
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
				<Analytics />
			</body>
		</html>
	);
}
