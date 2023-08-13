export const Skill = ({ text, children }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center self-stretch gap-2 max-w-[90px]">
			{children}
			<p className="text-lg">
				{text}
			</p>
		</div>
	);
};

interface Props {
	text: string;
	children?: React.ReactNode;
}
