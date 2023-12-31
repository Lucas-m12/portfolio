import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lucas Marinho da Silva | Dev Web",
	description: "Desenvolvedor Web ",
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://lucasmarinho.com.br",
		siteName: "Lucas Marinho da Silva",
		description: "Portfolio sobre Lucas Marinho da Silva",
		images: [
			{
				url: "https://lucasmarinho.com.br/assets/icons/logo.png",
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
				url: "https://lucasmarinho.com.br/assets/icons/logo.png",
				width: 800,
				height: 600,
				alt: "Lucas Marinho da Silva",
			}
		],
		site: "https://lucasmarinho.com.br"
	},
	viewport: "width=device-width, initial-scale=1",
	applicationName: "Lucas Marinho da Silva",
	keywords: [
		"Lucas Marinho da Silva", "Lucas", "Marinho", "Lucas Marinho", "portfolio", "desenvolvedor", "software", "sites", "sistemas", "react", "javascript", "typescript", "nest", "node", "next"
	]
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
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
