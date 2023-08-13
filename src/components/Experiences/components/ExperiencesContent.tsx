import { ExperienceCard } from "@/components/ExperienceCard";
import PhootoLogo from "public/assets/logos/phooto.png";
import PraxisLogo from "public/assets/logos/praxis.png";
import WillbankLogo from "public/assets/logos/willbank.png";

export const ExperiencesContent = () => {
	return (
		<section className="flex flex-col justify-center items-start self-stretch flex-wrap gap-12">
			<ExperienceCard.Root>
				<ExperienceCard.Logo url={WillbankLogo.src} alt="Will bank" />
				<ExperienceCard.DescriptionArea>
					<ExperienceCard.Title>Engenheiro de Software Pleno</ExperienceCard.Title>
					<ExperienceCard.List>
						<ExperienceCard.ListItem text="Desenvolvimento Frontend com Next JS" />
						<ExperienceCard.ListItem text="Desenvolvimento backend com Nest JS" />
						<ExperienceCard.ListItem text="Mentoria a desenvolvedores juniors" />
					</ExperienceCard.List>
				</ExperienceCard.DescriptionArea>
				<ExperienceCard.Time initialDate="Abr 2022" finalDate="Atual" />
			</ExperienceCard.Root>
			<ExperienceCard.Root>
				<ExperienceCard.Logo url={PhootoLogo.src} alt="Phooto" />
				<ExperienceCard.DescriptionArea>
					<ExperienceCard.Title>Desenvolvedor Frontend Pleno</ExperienceCard.Title>
					<ExperienceCard.List>
						<ExperienceCard.ListItem text="Desenvolvimento Frontend com React JS" />
						<ExperienceCard.ListItem text="Desenvolvimento baseado em Canvas" />
						<ExperienceCard.ListItem text="Mentoria a desenvolvedores juniors" />
					</ExperienceCard.List>
				</ExperienceCard.DescriptionArea>
				<ExperienceCard.Time initialDate="Out 2020" finalDate="Abr 2022" />
			</ExperienceCard.Root>
			<ExperienceCard.Root>
				<ExperienceCard.Logo url={PraxisLogo.src} alt="Praxis" />
				<ExperienceCard.DescriptionArea>
					<ExperienceCard.Title>Engenheiro de software Junior</ExperienceCard.Title>
					<ExperienceCard.List>
						<ExperienceCard.ListItem text="Desenvolvimento Frontend" />
						<ExperienceCard.ListItem text="Desenvolvimento Backend com PHP" />
						<ExperienceCard.ListItem text="Desenvolvimento Mobile com React Native" />
					</ExperienceCard.List>
				</ExperienceCard.DescriptionArea>
				<ExperienceCard.Time initialDate="Fev 2019" finalDate="Out 2020" />
			</ExperienceCard.Root>
		</section>
	);
};
