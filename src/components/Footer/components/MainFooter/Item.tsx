export const MainFooterItem = ({ children }: Props) => {
  return (
    <div className="flex items-center gap-5">
      {children}
    </div>
  )
}

interface Props {
  children: React.ReactNode;
}