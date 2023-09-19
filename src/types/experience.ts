import { Image } from "./image";

export interface Experience {
	id: string;
	logo: Image;
	title: string;
	startdate: string;
	enddate: string;
	ocupations: string[];
}
