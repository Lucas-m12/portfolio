import LucasImage from "public/assets/images/lucas.jpg";
import { Tag } from "../Tag";

export const About = () => {
	return (
		<section
			className="flex items-center justify-center flex-col self-stretch py-24 bg-gray-50 dark:bg-gray-dark-50"
			id="sobre"
		>
			<div className="flex justify-between flex-col w-full max-w-[1024px] items-center flex-header gap-12 mobile:px-5">
				<Tag.Root>
					<Tag.Text text="Sobre mim" />
				</Tag.Root>
				<section className="flex items-start self-stretch flex-wrap gap-12">
					<section className="mobile:mx-auto">
						<div
							className="border-8 w-[300px] h-[380px] border-gray-default dark:border-gray-dark-default bg-no-repeat bg-cover"
							style={{
								backgroundImage: `url(${LucasImage.src})`
							}}
						/>
					</section>
					<section className="flex flex-col items-start self-stretch gap-4 max-w-[42rem]">
						<h2
							className="text-gray-900 dark:text-gray-dark-900 text-3xl font-semibold -tracking-wide"
						>
              Aqui estão algumas curiosidades sobre mim:
						</h2>
						<p className="text-gray-600 dark:text-gray-dark-600 text-base">
            Eu prezo muito por aprender a fundo uma tecnologia, pois acredito que só com conhecimentos profundos é que podemos tomar a melhor decisão do que e do porque usar determinada ferramenta e não apenas sair instalando coisas por gosto pessoal.
						</p>
						<p className="text-gray-600 dark:text-gray-dark-600 text-base">
            Sou muito animado em entender e aprender coisas do ecossistema javascript/typescript, independente se é backend, frontend ou mobile, mas confesso que tenho muito mais preferencia por React JS, Node JS e React Native, com certeza essa stack eu tenho um carinho especial.
						</p>
						<p className="text-gray-600 dark:text-gray-dark-600 text-base">
            Apesar do carinho especial por Javascript, foi o PHP que me fez iniciar no mundo da programação, quando em 2019 eu aceitei sem pensar 2x um &quot;estágio&quot; não remunerado, mas onde eu poderia colocar em prática o que eu estava aprendendo e de bônus, acabei conhecendo o PHP na empresa e usando a ferramenta para poder programar de fato.
						</p>
					</section>
				</section>
			</div>
		</section>
	);
};
