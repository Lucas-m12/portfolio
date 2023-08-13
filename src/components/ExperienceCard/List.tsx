export const ExperienceCardList = ({ children }: Props) => {
	return (
		<ul className="flex flex-col gap-1 list-disc">
			{children}
		</ul>
	);
};

interface Props {
  children: React.ReactNode
}
