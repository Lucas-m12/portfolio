import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://lucasmarinho.com.br",
			lastModified: new Date(),
		},
	];
}
