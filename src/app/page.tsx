import { AboutSection } from "@/components/about";
import { HomeSection } from "@/components/home";
import { NavigationMenu } from "@/components/navigation-menu";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center font-base">
			<NavigationMenu />
			<div className="first-elipse" />
			<div className="second-elipse" />
			<HomeSection />
			<AboutSection />
		</section>
	);
}
