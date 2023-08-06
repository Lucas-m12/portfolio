"use client";

import { Button } from "../Button";

export const DownloadCV = () => {
  const handleClickDownload = () => {
    console.log("baixar cv")
  }

  return (
    <Button 
      type="button" 
      onClick={handleClickDownload} 
    >
      Download CV
    </Button>
  )
}