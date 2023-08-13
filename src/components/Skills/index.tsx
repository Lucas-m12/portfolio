import { Tag } from "../Tag";
import { Skills } from "./components/skills";

export const SkillsSection = ()  => {
	return (
		<section
			className="flex items-center justify-center flex-col self-stretch py-24"
			id="habilidades"
		>
			<section
				className="flex justify-between flex-col w-full items-center flex-header px-8 gap-12"
			>
				<div
					className="flex flex-col gap-4 items-center justify-center text-gray-600 dark:text-gray-dark-600"
				>
					<Tag.Root>
						<Tag.Text text="Habilidades" />
					</Tag.Root>
					<p className="text-xl">
            Aqui estão algumas das ferramentas que eu conheço:
					</p>
				</div>
				<section className="flex flex-col gap-12 self-stretch">
					<Skills />
				</section>
			</section>
		</section>
	);
};
