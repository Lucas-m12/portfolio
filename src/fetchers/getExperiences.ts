import { Experience } from "@/types/experience";

export const getExperiences = async () => {
	const cmsUrl = String(process.env.DATOCMS_URL);
	const cmsToken = String(process.env.DATOCMS_READONLY_TOKEN);
	const query = {
		query: `
			query experiences {
				experiences: allExperiences {
					id
					title
					startdate
					enddate
					ocupations
					logo {
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
	const data = await response.json() as { data: { experiences: Experience[] } };
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(data)}`);
	}
	return data.data.experiences;
};
