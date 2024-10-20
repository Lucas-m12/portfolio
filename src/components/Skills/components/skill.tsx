export const Skill = ({ text, children }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center self-stretch gap-2 max-w-[110px]">
			{children}
			<p className="text-2xl font-base text-center text-white">
				{text}
			</p>
		</div>
	);
};

interface Props {
	text: string;
	children?: React.ReactNode;
}
