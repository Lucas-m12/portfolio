export const MainFooterItem = ({ children }: Props) => {
	return (
		<div className="flex items-center gap-5 mobile:gap-2">
			{children}
		</div>
	);
};

interface Props {
  children: React.ReactNode;
}