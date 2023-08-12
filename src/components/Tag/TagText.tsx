export const TagText = ({ text }: Props) => {
  return (
    <p 
      className="text-gray-600 dark:text-gray-dark-600 text-sm font-medium"
    >
      {text}
    </p>
  )
}

interface Props {
  text: string;
}