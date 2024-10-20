import Image from "next/image";
import { Subtract } from "../subtract";

export const AboutSection = () => {
	return (
		<section
			className=""
			id="about"
		>
			<div className="flex justify-evenly max-w-[1300px] max-h-[840px] text-white gap-16">
				<section>
					<h2 className="font-base text-5xl font-bold">SOBRE MIM</h2>
					<div className="mt-5 mb-8">
						<div className="w-full h-[2px] bg-primary" />
						<div className="flex relative">
							<div className="w-7 h-[5px] bg-primary" />
							<div className="absolute h-[4px] w-2 rotate-[-70deg] bg-[#121212] top-[2.5px] left-6" />
						</div>
					</div>

					<article className="font-base text-lg font-medium max-w-[565px] flex flex-col gap-6 mb-8">
						<p>
							Prezo muito por aprender a fundo uma tecnologia, pois acredito que só com conhecimentos profundos é que podemos tomar a melhor decisão do que e do porque usar determinada ferramenta e não apenas sair instalando coisas por gosto pessoal.
						</p>

						<p>
							Sou muito animado em entender e aprender coisas do ecossistema javascript/typescript, independente se é back-end, front-end ou mobile, mas confesso que tenho muito mais preferencia por React JS, Node JS e React Native, com certeza essa stack eu tenho um carinho especial.
						</p>

						<p>
							Apesar do carinho especial por Javascript, foi o PHP que me fez iniciar no mundo da programação, quando em 2019 eu aceitei sem pensar 2x um &quotestágio&quot não remunerado, mas onde eu poderia colocar em prática o que eu estava aprendendo e de bônus, acabei conhecendo o PHP na empresa e usando a ferramenta para poder programar de fato.
						</p>
					</article>

					<svg xmlns="http://www.w3.org/2000/svg" width="168" height="14" viewBox="0 0 168 14" fill="none">
						<mask id="mask0_11_253" maskUnits="userSpaceOnUse" x="0" y="0" width="168" height="14">
							<path d="M0.5 12.531V0.5H166.592V12.531H0.5Z" fill="white" stroke="white" />
						</mask>
						<g mask="url(#mask0_11_253)">
							<path d="M-9.856 -3.12698L9.42799 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M0 -3.12698L19.281 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M9.853 -3.12698L29.135 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M19.707 -3.12698L38.99 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M29.56 -3.12698L48.844 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M39.416 -3.12698L58.697 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M49.269 -3.12698L68.551 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M59.123 -3.12698L78.406 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M68.976 -3.12698L88.26 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M78.832 -3.12698L98.113 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M88.685 -3.12698L107.969 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M98.539 -3.12698L117.822 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M108.394 -3.12698L127.676 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M118.248 -3.12698L137.529 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M128.101 -3.12698L147.385 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M137.955 -3.12698L157.238 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M147.81 -3.12698L167.092 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
							<path d="M157.664 -3.12698L176.945 16.156" stroke="#01F1A7" strokeWidth="4" strokeMiterlimit="10" />
						</g>
					</svg>
				</section>
				<Subtract>
					<Image
						src="/assets/images/lucas.jpeg"
						alt="Lucas Marinho"
						width={476}
						height={634}
						style={{ objectFit: "contain", zIndex: -12 }}
					/>
				</Subtract>
			</div>
		</section>
	);
};
