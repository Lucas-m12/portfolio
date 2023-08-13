export const ExperienceCardListItem = ({ text }: Props)  => {
	return (
		<li>
			{text}
		</li>
	);
};

interface Props {
	text: string;
}
