import { CopyIcon, EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "public/assets/icons/phone.svg";
import { Tag } from "../Tag";
import { MainFooter } from "./components/MainFooter";

export const Footer = () => {
  return (
    <footer 
      className="flex py-24 px-20 flex-col items-center justify-center self-stretch text-gray-600 dark:text-gray-dark-600 mobile:py-16 mobile:px-4"
    >
      <section 
        className="px-8 flex flex-col items-center justify-center gap-12 self-stretch"
      >
        <Tag.Root>
          <Tag.Text text="Ache-me em um toque" />
        </Tag.Root>
        <MainFooter.Root>
          <MainFooter.Item>
            <EnvelopeClosedIcon width={32} height={32}/>
            <p>lucasmarinhodasilva2@gmail.com</p>
            <MainFooter.Icon textCopy="lucasmarinhodasilva2@gmail.com">
              <CopyIcon width={32} height={32}/>
            </MainFooter.Icon>
          </MainFooter.Item>
          <MainFooter.Item>
          <Image 
            src={PhoneIcon}
            alt="telefone"
            width={32}
            height={32}
          />
            <p>+55 (82) 99927-0214</p>
            <MainFooter.Icon textCopy="+5582999270214">
              <CopyIcon width={32} height={32} />
            </MainFooter.Icon>
          </MainFooter.Item>
        </MainFooter.Root>
        <div>
          <p 
            className="text-base font-normal text-gray-600 dark:text-gray-dark-600 mb-2 text-center"
          >
            Você também pode me encontrar nessas plataformas:
          </p>
          <div className="inline-flex items-center justify-center w-full gap-3">
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
            <Link href="https://www.instagram.com/lucas_marinho12/" target="_blank">
              <InstagramLogoIcon 
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://twitter.com/LucasMarinhod16" target="_blank">
              <TwitterLogoIcon 
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}