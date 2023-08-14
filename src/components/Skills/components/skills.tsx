import Image from "next/image";
import DockerIcon from "public/assets/images/docker.svg";
import ExpressIcon from "public/assets/images/express.svg";
import GitIcon from "public/assets/images/git.svg";
import GoIcon from "public/assets/images/go.svg";
import JavascriptIcon from "public/assets/images/javascript.svg";
import JestIcon from "public/assets/images/jest.svg";
import JqueryIcon from "public/assets/images/jquery.svg";
import MongoIcon from "public/assets/images/mongodb.svg";
import NestIcon from "public/assets/images/nest.svg";
import NextIcon from "public/assets/images/nextjs.svg";
import NodeIcon from "public/assets/images/nodejs.svg";
import PHPIcon from "public/assets/images/php.svg";
import PostgresIcon from "public/assets/images/postgresql.svg";
import ReactIcon from "public/assets/images/react.svg";
import TailwindCSSIcon from "public/assets/images/tailwindcss.svg";
import TypescriptIcon from "public/assets/images/typescript.svg";

import { Skill } from "./skill";

export const Skills = () => {
	return (
		<section
			className="flex items-center justify-center w-full"
		>
			<div
				className="grid grid-cols-8 gap-y-12 gap-x-12 mobile:grid-cols-3 tablet:grid-cols-4"
			>
				<Skill text="Javascript">
					<Image
						src={JavascriptIcon}
						alt="Javascript"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Typescript">
					<Image
						src={TypescriptIcon}
						alt="Typescript"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="React">
					<Image
						src={ReactIcon}
						alt="React"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Next.js">
					<Image
						src={NextIcon}
						alt="Next"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Node.js">
					<Image
						src={NodeIcon}
						alt="Node"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Express.js">
					<Image
						src={ExpressIcon}
						alt="Express"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Nest.js">
					<Image
						src={NestIcon}
						alt="Nest"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="PostgresSQL">
					<Image
						src={PostgresIcon}
						alt="Postgres"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="MongoDB">
					<Image
						src={MongoIcon}
						alt="Mongo"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="TailwindCSS">
					<Image
						src={TailwindCSSIcon}
						alt="TailwindCSS"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Git">
					<Image
						src={GitIcon}
						alt="Git"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Go">
					<Image
						src={GoIcon}
						alt="Go"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="PHP">
					<Image
						src={PHPIcon}
						alt="PHP"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Jest">
					<Image
						src={JestIcon}
						alt="Jest"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Jquey">
					<Image
						src={JqueryIcon}
						alt="Jquery"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
				<Skill text="Docker">
					<Image
						src={DockerIcon}
						alt="Docker"
						width={64}
						height={64}
						style={{ width: 64, height: 64 }}
					/>
				</Skill>
			</div>
		</section>
	);
};
