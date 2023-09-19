import Image from "next/image";

import { getSkills } from "@/fetchers/getSkills";
import { Skill } from "./skill";

export const Skills = async () => {
	const skills = await getSkills();
	return (
		<section
			className="flex items-center justify-center w-full mx-auto max-w-[1024px]"
		>
			<div
				className="grid grid-cols-8 gap-y-12 gap-x-12 mobile:grid-cols-3 tablet:grid-cols-4"
			>
				{
					skills.map(skill => (
						<Skill text={skill.name} key={skill.id}>
							<Image
								src={skill.icon.url}
								alt={skill.icon.alt}
								width={64}
								height={64}
								style={{ width: 64, height: 64 }}
								blurDataURL={skill.icon.blurUpThumb}
							/>
						</Skill>
					))
				}
			</div>
		</section>
	);
};
