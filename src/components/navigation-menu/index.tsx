import * as PrimitiveMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";

export const NavigationMenu = () => {
	return (
		<PrimitiveMenu.Root className="h-[90px] bg-dark flex items-center justify-center px-8 rounded-b-3xl">
			<PrimitiveMenu.List className="flex items-center gap-28 text-writing text-xl font-bold">
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="#" className="hover:underline transition-all hover:text-writing/70">Início</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="#" className="hover:underline transition-all hover:text-writing/70">Sobre</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="#" className="hover:underline transition-all hover:text-writing/70">Habilidades</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="/">
							<Image
								src="/assets/images/logo.svg"
								alt="Logo"
								width={88}
								height={47}
							/>
						</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="#" className="hover:underline transition-all hover:text-writing/70">Experiências</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="#" className="hover:underline transition-all hover:text-writing/70">Contato</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
				<PrimitiveMenu.Item>
					<PrimitiveMenu.Link asChild>
						<Link href="#" className="hover:underline transition-all hover:text-writing/70">Setup</Link>
					</PrimitiveMenu.Link>
				</PrimitiveMenu.Item>
			</PrimitiveMenu.List>
			<PrimitiveMenu.Viewport />
		</PrimitiveMenu.Root>
	);
};
