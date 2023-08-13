import { Tag } from "../Tag";
import { ExperiencesContent } from "./components/ExperiencesContent";

export const ExperiencesSection = () => {
	return (
		<div
			className="flex items-center justify-center flex-col self-stretch py-24 bg-gray-50 dark:bg-gray-dark-50"
			id="experiencias"
		>
			<section
				className="flex justify-between flex-col w-full items-center flex-header px-8 gap-12"
			>
				<div
					className="flex flex-col gap-4 items-center justify-center text-gray-600 dark:text-gray-dark-600"
				>
					<Tag.Root>
						<Tag.Text text="Experiências" />
					</Tag.Root>
					<p className="text-xl">
						Aqui estão minhas experiências profissionais:
					</p>
				</div>
				<section className="flex justify-center items-start self-stretch flex-wrap gap-12">
					<ExperiencesContent />
				</section>
			</section>
		</div>
	);
};
