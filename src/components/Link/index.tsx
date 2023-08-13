import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const Link = ({children, ...rest}: LinkProps) => {
	return (
		<NextLink {...rest} 
			className={`
      text-gray-600 
      hover:text-gray-900 
      active:text-gray-600 
      dark:text-gray-dark-600
      dark:hover:text-gray-900
      active:dark:text-gray-dark-600
      `} 
		>
			{children}
		</NextLink>
	);
};

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}