import { SetupItem } from "@/types/setupItem";

export const getSetupItems = async () => {
	const cmsUrl = String(process.env.DATOCMS_URL);
	const cmsToken = String(process.env.DATOCMS_READONLY_TOKEN);
	const query = {
		query: `
			query setupItem {
				items: allSetupItems {
					id
					category
					name
					link
					image {
						alt
						blurUpThumb
						url
					}
				}
			}
		`
	};
	const response = await fetch(cmsUrl, {
		body: JSON.stringify(query),
		method: "POST",
		headers: {
			Authorization: `Bearer ${cmsToken}`
		}
	});
	const data = await response.json() as { data: { items: SetupItem[] } };
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(data)}`);
	}
	return data.data.items;
};
