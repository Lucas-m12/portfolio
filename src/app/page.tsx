import { AboutSection } from "@/components/about";
import { HomeSection } from "@/components/home";
import { NavigationMenu } from "@/components/navigation-menu";
import { SkillsSection } from "@/components/Skills";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center font-base">
			<NavigationMenu />
			<div className="first-elipse" />
			<div className="second-elipse" />
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<div className="third-elipse" />
			<div className="fourth-elipse" />
		</section>
	);
}
