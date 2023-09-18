"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { DownloadCV } from "../DownloadCV";
import { SwitchTheme } from "../Header/SwitchTheme";
import { Link } from "../Link";

export const HamburguerMenu = () => {

	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const handleCloseMenu = () => {
		setIsMenuOpened(false);
	};

	return (
		<DropdownMenu.Root
			onOpenChange={() => setIsMenuOpened(prevValue => !prevValue)}
			open={isMenuOpened}
		>
			<DropdownMenu.Trigger id="trigger" className="hidden mobile:block text-gray-600 dark:text-gray-dark-600">
				{!isMenuOpened ? (
					<HamburgerMenuIcon
						width={24}
						height={24}
					/>
				) : (
					<Cross1Icon
						width={24}
						height={24}
					/>
				)}
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={6}
					className="w-screen h-screen bg-gray-default dark:bg-gray-dark-default z-50 my-4"
				>
					<DropdownMenu.Group
						className="flex flex-col items-start self-stretch gap-4 p-5 border-b-[1px] border-solid border-gray-100 dark:border-gray-dark-100"
					>
						<DropdownMenu.Item>
							<Link href="/#sobre" onClick={handleCloseMenu}>Sobre</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Link href="/#habilidades" onClick={handleCloseMenu}>Habilidades</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Link href="/#experiencias" onClick={handleCloseMenu}>Experiências</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Link href="/#contato" onClick={handleCloseMenu}>Contato</Link>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Group
						className="flex flex-col items-start self-stretch gap-4 p-4 w-full"
					>
						<DropdownMenu.Item className="w-full" asChild>
							<SwitchTheme />
						</DropdownMenu.Item>
						<DropdownMenu.Item className="w-full" asChild>
							<DownloadCV />
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
