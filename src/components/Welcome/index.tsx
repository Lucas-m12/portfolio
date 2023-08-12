"use client"

import { useIsMobile } from "@/hooks/useIsMobile";
import { DescriptionSection } from "./components/DescriptionSection";
import { LogoSection } from "./components/LogoSection";

export const Welcome = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      className="
        flex items-start justify-center px-8 gap-12 flex-wrap flex-header mobile:py-16 mobile:px-4
      "
    >
      {
        isMobile ? (
          <>
            <LogoSection />          
            <DescriptionSection />
          </>
        ) : (
          <>
            <DescriptionSection />
            <LogoSection />          
          </>
        )
      }
    </section>
  )
}