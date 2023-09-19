import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SetupGrid } from "@/components/SetupGrid";

export default async function SetupPage() {
	return (
		<>
			<Header />
			<main
				className="pt-[166px] flex items-center max-w-[1024px] mx-auto"
			>
				<section className="space-y-4">
					<h1 className="text-gray-900 dark:text-gray-dark-900 font-bold text-3xl">
						Meus equipamentos
					</h1>
					<h2 className="text-gray-900 dark:text-gray-dark-200 font-bold text-lg leading-6">
						Lista de equipamentos que geralmente uso
					</h2>
				</section>
			</main>
			<SetupGrid />
			<Footer />
		</>
	);
}
