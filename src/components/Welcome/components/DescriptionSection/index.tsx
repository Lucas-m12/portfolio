
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

import DotEsmeraldIcon from "public/assets/icons/dot-esmerald.svg"
import MarkIcon from "public/assets/icons/mark.svg"

export const DescriptionSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-start max-w-[48rem] gap-12 self-stretch"
    >
      <div className="gap-2">
        <h1
          className="text-6xl leading-[4.5rem] desktop:-tracking-wider font-bold text-gray-900 dark:text-gray-dark-900 mobile:text-4xl mobile:font-semibold"
        >
          Olá, meu nome é Lucas! 👋🏼
        </h1>
        <p
          className="text-gray-600 dark:text-gray-dark-600 text-base font-normal"
        >
          Eu sou engenheiro de software (full-stack) com experiência maior em Front-end, mas altamente apaixonado pelo Back-end e que busca através do software resolver todos os desafios propostos, não apenas focando no código, mas entendo toda a complexidade do negócio.
        </p>
      </div>
      <div className="flex flex-col justify-center items-start self-stretch gap-2">
        <div className="flex items-center self-stretch gap-2">
          <Image 
            src={MarkIcon}
            alt="Icone de marcação no mapa"
            width={24}
            height={24}
          />
          <p 
            className="text-base font-normal text-gray-600 dark:text-gray-dark-600"
          >
            Cajueiro-AL, Brasil
          </p>
        </div>
        <div className="flex items-center self-stretch gap-2">
          <Image 
            src={DotEsmeraldIcon}
            alt="Icone de ponto verde"
            width={24}
            height={24}
          />
          <p
            className="text-base font-normal text-gray-600 dark:text-gray-dark-600"
          >
            Disponível para novos projetos
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 self-stretch text-gray-600 dark:text-gray-dark-600">
        <Link href="https://github.com/lucas-m12" target="_blank">
          <GitHubLogoIcon
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/lucas-m12/" target="_blank">
          <LinkedInLogoIcon
            width={24}
            height={24}
          />
        </Link>
      </div>
    </section>
  )
}