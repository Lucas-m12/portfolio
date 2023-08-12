import { useState } from "react";

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000)
  }

  return {isCopied, copy}
}