import Image from "next/image";

export const ExperienceCardLogo = ({ url, alt }: Props) => {
	return (
		<div>
			<Image
				src={url}
				alt={alt}
				width={200}
				height={200}
				style={{ width: 200, height: 135 }}
			/>
		</div>
	);
};

interface Props {
	url: string;
	alt: string;
}
