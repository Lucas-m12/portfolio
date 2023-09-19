import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const Link = ({children, disabled, ...rest}: LinkProps) => {
	return (
		<NextLink
			{...rest}
			className={`
      text-gray-600
      hover:text-gray-900
      active:text-gray-600
      dark:text-gray-dark-600
      dark:hover:text-gray-900
      active:dark:text-gray-dark-600
			${disabled && "dark:text-gray-900 text-gray-dark-900 pointer-events-none"}
      `}
		>
			{children}
		</NextLink>
	);
};

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
	disabled?: boolean;
}
