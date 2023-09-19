import { getSetupItems } from "@/fetchers/getSetupItems";
import { Card } from "../Card";

export const SetupGrid = async () => {
	const items = await getSetupItems();

	return (
		<section className="w-full max-w-[1024px] mx-auto mt-6 grid grid-cols-4 gap-10">
			{
				items?.map(item => (
					<>
						<Card.Root
							key={item.id}
							href={item.link}
						>
							<Card.Image
								alt={item.image.alt}
								url={item.image.url}
								blurUrl={item.image.blurUpThumb}
							/>
							<Card.Description text={item.name} />
							<Card.Tag>
								{item.category}
							</Card.Tag>
						</Card.Root>
					</>
				))
			}
		</section>
	);
};

