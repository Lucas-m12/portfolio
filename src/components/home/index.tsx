import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const HomeSection = () => {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen mt-20 z-10" id="inicio">
			<h1 className="text-writing text-8xl font-bold -tracking-wider text-shadow">
				Olá, eu sou o <strong className="text-shadow-none">Lucas!</strong>
			</h1>

			<p className="text-2xl font-normal text-writing max-w-[924px] text-center mt-4">
				<strong>Engenheiro de Software (full-stack)</strong> com experiência maior em <strong>front-end</strong>, mas
				altamente apaixonado pelo <strong>back-end</strong> e que busca através do software resolver
				todos os desafios propostos, não apenas focando no código, mas entendendo
				toda a complexidade do negócio.
			</p>

			<div className="flex gap-1 mt-9">
				<Image
					src="/assets/icons/mark.svg"
					alt="icone de localização"
					width={25}
					height={25}
					color="#01F1A7"
				/>
				<span className="text-writing text-2xl font-medium">
					Cajueiro-AL, Brasil
				</span>
			</div>

			<div className="flex gap-4 mt-12">
				<Link href="#">
					<GitHubLogoIcon width={30} height={30} color="#FFF" />
				</Link>
				<Link href="#">
					<LinkedInLogoIcon width={30} height={30} color="#FFF" />
				</Link>
			</div>

			<div className="mt-40">
				<Link href="#sobre">
					<Image
						src={"/assets/icons/chevron-down.svg"}
						alt="Chevron Down"
						width={47}
						height={23}
						className="animate-bounce"
					/>
				</Link>
			</div>
		</section>
	);
};
