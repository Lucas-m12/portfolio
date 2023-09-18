"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { DescriptionSection } from "./components/DescriptionSection";
import { LogoSection } from "./components/LogoSection";

export const Welcome = () => {
	const isMobile = useIsMobile();

	return (
		<section
			className="py-10"
			id="inicio"
		>
			<section
				className="flex gap-12 flex-wrap flex-header mobile:py-16 mobile:px-4 max-w-[1024px] mx-auto"
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
		</section>
	);
};
