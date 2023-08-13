export const TagRoot = ({children}: Props) => {
	return (
		<div 
			className="inline-flex items-center justify-center py-1 px-5 rounded-xl bg-gray-200 dark:bg-gray-dark-200"
		>
			{children}
		</div>
	);
};

interface Props {
  children?: React.ReactNode
}