export const CardTag = ({ children }: CardTagProps) => {
	return (
		<div className="items-center flex gap-2">
			<div
				className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-800 dark:text-gray-dark-800 p-2 rounded-lg border-gray-300 dark:border-gray-dark-300 min-w-[82px] justify-center gap-2"
			>
				{children}
			</div>
		</div>
	);
};

interface CardTagProps {
	children: React.ReactNode
}
