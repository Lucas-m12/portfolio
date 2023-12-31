

export const MainFooterRoot = ({ children }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 mobile:gap-6">
			{children}
		</div>
	);
};

interface Props {
  children: React.ReactNode;
}