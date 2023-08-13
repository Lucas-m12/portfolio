export const ExperienceTime = ({ initialDate, finalDate }: Props) => {
	return (
		<span className="text-gray-700 dark:text-gray-dark-700">
			{initialDate} - {finalDate}
		</span>
	);
};

interface Props {
	initialDate: string;
	finalDate: string;
}
