export const DescriptionArea = ({ children }: Props) => {
	return (
		<section
			className="flex flex-col gap-4 w-[24rem] h-full text-gray-600 dark:text-gray-dark-600 mobile:w-[279px] "
		>
			{children}
		</section>
	);
};

interface Props {
	children: React.ReactNode
}
