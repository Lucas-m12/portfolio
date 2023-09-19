import { Skill } from "@/types/skill";

export const getSkills = async () => {
	const cmsUrl = String(process.env.DATOCMS_URL);
	const cmsToken = String(process.env.DATOCMS_READONLY_TOKEN);
	const query = {
		query: `
			query skills {
				skills: allSkills {
					id
					name
					icon {
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
		},
		next: { tags: ["skills", "all"] }
	});
	const data = await response.json() as { data: { skills: Skill[] } };
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(data)}`);
	}
	return data.data.skills;
};
