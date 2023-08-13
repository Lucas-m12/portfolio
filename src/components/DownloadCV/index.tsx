import Link from "next/link";
import { Button } from "../Button";

export const DownloadCV = () => {
	return (
		<Link href="/assets/cv.pdf" download="cv.pdf" target="_blank">
			<Button type="button">
        Download CV
			</Button>
		</Link>
	);
};