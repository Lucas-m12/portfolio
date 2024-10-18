/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"github.com",
			"www.datocms-assets.com"
		],
	},
	i18n: {
		locales: ["en-US", "pt-BR"],
		defaultLocale: "pt-BR",
	}
};

module.exports = nextConfig;
