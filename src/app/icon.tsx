import Image from "next/image";
import { ImageResponse } from "next/server";
import Logo from "public/assets/icons/logo.png";

export const runtime = "edge";
export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		(
			<Image
				src={Logo}
				alt="Icon"
				width={size.width}
				height={size.height}
			/>
		),
		{
			...size,
		}
	);
}
