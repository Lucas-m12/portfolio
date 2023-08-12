"use client"

import { Toast } from "@/components/Toast";
import { useCopy } from "@/hooks/useCopy";


export const MainFooterIcon = ({ children, textCopy }: Props) => {
  const { isCopied, copy } = useCopy();

  const handleClickIcon = () => {
    if (!textCopy) return;
    copy(textCopy);
  }

  return (
    <>
      <div 
        className={typeof textCopy !== "undefined" ? "cursor-pointer" : "cursor-default"}
        onClick={handleClickIcon}
      >
        {children}
      </div>
      <Toast.Root open={isCopied} >
        <Toast.Title>Copiado com sucesso</Toast.Title>
      </Toast.Root>
    </>
  )
}

interface Props {
  children: React.ReactNode;
  textCopy?: string;
}