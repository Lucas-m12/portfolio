import Link from "next/link";
import { forwardRef } from "react";

export const DownloadCV = forwardRef<HTMLAnchorElement>((_, ref) => {
	return (
		<Link
			href="https://www.datocms-assets.com/106500/1695087660-cv.pdf"
			download="cv.pdf"
			target="_blank"
			className={
				`
				min-w-[140px]
				min-h-[36px]
				inline-flex
				items-center
				justify-center
				gap-2
				py-1
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
				text-gray-50
				dark:text-gray-dark-50

				mobile:w-full
				`
			}
			ref={ref}
		>
			Download CV
		</Link>
	);
});

DownloadCV.displayName = "DownloadCV";
