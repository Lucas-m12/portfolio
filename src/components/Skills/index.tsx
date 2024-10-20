import { Skills } from "./components/skills";

export const SkillsSection = ()  => {
	return (
		<section
			className="flex flex-col w-[1105px] max-w-[1300px] relative"
			id="habilidades"
		>
			<h2 className="text-white font-base font-bold text-5xl">Habilidades com:</h2>
			<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="411" viewBox="0 0 1440 411" fill="none" className="absolute -left-[270px] -top-[300px] z-[-100px]">
				<path d="M1457 2C1457.55 2 1458 1.55228 1458 1C1458 0.447715 1457.55 2.41411e-08 1457 0L1457 2ZM1071.68 0.999983L1071.68 -1.68429e-05L1071.25 -1.68617e-05L1070.95 0.313626L1071.68 0.999983ZM685.685 410L685.685 411L686.116 411L686.412 410.686L685.685 410ZM-6.00075 409L-7.00075 409L-7.00075 411L-6.00075 411L-6.00075 409ZM1457 0L1071.68 -1.68429e-05L1071.68 1.99998L1457 2L1457 0ZM1070.95 0.313626L684.958 409.314L686.412 410.686L1072.41 1.68634L1070.95 0.313626ZM685.685 409L-6.00075 409L-6.00075 411L685.685 411L685.685 409Z" fill="#01F1A7" />
			</svg>
			<section className="mt-40">
				<Skills />
			</section>
		</section>
	);
};
