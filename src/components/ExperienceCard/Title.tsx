export const ExperiencesCardTitle = ({ children }: Props) => {
	return (
		<h3 className="text-xl font-semibold self-stretch text-gray-900 dark:text-gray-dark-900">
			{children}
		</h3>
	);
};

interface Props {
	children: React.ReactNode
}
