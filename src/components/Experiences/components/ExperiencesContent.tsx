import { ExperienceCard } from "@/components/ExperienceCard";
import { getExperiences } from "@/fetchers/getExperiences";

export const ExperiencesContent = async () => {
	const experiences = await getExperiences();

	return (
		<section className="flex flex-col justify-center items-start self-stretch flex-wrap gap-12 max-w-[1024px] mx-auto">
			{
				experiences.map(experience => (
					<ExperienceCard.Root key={experience.id}>
						<ExperienceCard.Logo
							url={experience.logo.url}
							alt={experience.logo.alt}
							blurUrl={experience.logo.blurUpThumb}
						/>
						<ExperienceCard.DescriptionArea>
							<ExperienceCard.Title>{experience.title}</ExperienceCard.Title>
							<ExperienceCard.List>
								{experience.ocupations.map(ocupation => (
									<ExperienceCard.ListItem text={ocupation} key={ocupation} />
								))}
							</ExperienceCard.List>
						</ExperienceCard.DescriptionArea>
						<ExperienceCard.Time
							initialDate={experience.startdate}
							finalDate={experience.enddate}
						/>
					</ExperienceCard.Root>
				))
			}
		</section>
	);
};
