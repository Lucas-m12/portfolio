"use client";
import { usePreferenceTheme } from "@/hooks/usePreferenceTheme";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { DownloadCV } from "../DownloadCV";
import { SwitchTheme } from "../Header/SwitchTheme";
import { Link } from "../Link";

export const HamburguerMenu = () => {
	const { theme } = usePreferenceTheme();
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	return (
		<DropdownMenu.Root onOpenChange={() => setIsMenuOpened(prevValue => !prevValue)}>
			<DropdownMenu.Trigger asChild className="hidden mobile:block">
				<button>
					{!isMenuOpened ? (
						<HamburgerMenuIcon
							width={24}
							height={24}
							color={theme === "light" ? "#4B5563" : "#D1D5DB"}
						/>
					) : (
						<Cross1Icon
							width={24}
							height={24}
							color={theme === "light" ? "#4B5563" : "#D1D5DB"}
						/>
					)}
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={6}
					className="w-screen h-screen bg-gray-default dark:bg-gray-dark-default z-50 my-4"
				>
					<DropdownMenu.Group
						className="flex flex-col items-start self-stretch gap-4 p-4 border-b-[1px] border-solid border-gray-100 dark:border-gray-dark-100"
					>
						<DropdownMenu.Item>
							<Link href="/#sobre">Sobre</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Link href="/#habilidades">Habilidades</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Link href="/#experiencias">Experiências</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Link href="/#contato">Contato</Link>
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
