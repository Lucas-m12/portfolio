export const ToastTitle = ({ children }: Props) => {
	return (
		<p className="text-base font-bold text-gray-dark-default">
			{children}
		</p>
	);
};

interface Props {
  children: React.ReactNode;
}