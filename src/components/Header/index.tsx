import Image from "next/image"

import Logo from "public/assets/icons/logo.svg"
import { Divider } from "../Divider"
import { DownloadCV } from "../DownloadCV"
import { Link } from "../Link"
import { SwitchTheme } from "./SwitchTheme"
import { HamburguerMenu } from "../HamburguerMenu"

export const Header = () => {
  return (
    <header 
      className={`
        h-[68px] 
        flex 
        fixed 
        w-full 
        items-center 
        justify-between 
        py-4 
        px-20 
        bg-gray-default 
        dark:bg-gray-dark-default 
        mobile:py-4
        mobile:px-4
      `}
    >
      <section className="flex items-center justify-between px-8 flex-header mobile:px-0">
        <Image 
          src={Logo}
          alt="Lucas Marinho logo"
          width={96}
          height={36}
        />
        <nav className="flex justify-center items-center gap-6 mobile:hidden">
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#contato">Contato</Link>
          <Link href="/#blog">Blog</Link>
          <Divider orientation="vertical" />
          <SwitchTheme />
          <DownloadCV />
        </nav>
        <HamburguerMenu />
      </section>
    </header>
  )
}