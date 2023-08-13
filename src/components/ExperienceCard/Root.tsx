export const ExperienceCardRoot = ({ children }: Props) => {
	return (
		<div
			className="flex p-8 items-start w-[56rem] rounded-xl bg-gray-default dark:bg-gray-dark-default shadow-md gap-12 mobile:w-[343px] mobile:flex-col mobile:items-center"
		>
			{children}
		</div>
	);
};

interface Props {
	children: React.ReactNode;
}
