import Image from "next/image";

export const CardImage = ({ alt, url, blurUrl }: CardImageProps) => {
	return (
		<Image src={url} alt={alt} width={150} height={150} blurDataURL={blurUrl} />
	);
};

interface CardImageProps {
	url: string;
	alt: string;
	blurUrl?: string;
}
