export const Button = ({ children, ...rest }: Props) => {
  return (
    <button 
      {...rest} 
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        py-2
        px-4
        rounded-xl
        bg-gray-900
        hover:bg-gray-700
        active:bg-gray-800

        dark:bg-gray-dark-900
        dark:hover:bg-gray-dark-700
        dark:active:bg-gray-dark-800

        text-base
        font-medium
        leading-6
        text-gray-50
        dark:text-gray-dark-50

        mobile:w-full
      `}
    >
      { children }
    </button>
  )
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}