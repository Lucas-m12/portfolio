export const CardDescription = ({ text }: CardDescriptionProps) => {
	return (
		<div className="p-4 flex flex-col gap-2">
			<h3 className="tracking-tight font-bold text-base text-center text-gray-900 dark:text-gray-dark-900">{text}</h3>
		</div>
	);
};

interface CardDescriptionProps {
	text: string;
}
