import { Provider, Root, ToastProps, Viewport } from "@radix-ui/react-toast";

export const ToastProvider = ({ children, ...rest }: Props) => {
  return (
    <Provider>
      <Root 
        {...rest}
        className="rounded-md p-4 flex items-center justify-start shadow-lg bg-emerald data-[state='open']:animate-bounce data-[state='closed']:animate-hide"
      >
        {children}
      </Root>
      <Viewport 
        className="fixed bottom-0 right-0 flex flex-col p-6 w-96 outline-none list-none z-50 m-0 gap-3" 
      />
    </Provider>
  )
}

interface Props extends ToastProps {
  children: React.ReactNode;
}