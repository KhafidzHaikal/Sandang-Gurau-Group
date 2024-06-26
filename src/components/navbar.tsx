"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Josefin = Josefin_Sans({ subsets: ["latin"] });

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tete",
    href: "/tete",
    description: "Realize your style with screen printing or shirt printing",
  },
  {
    title: "Sandang Gurau (Fasion)",
    href: "/sandang-gurau",
    description:
      "Movie and Music Parody Collaboration Fashion that Tickles Nostalgia",
  },
  {
    title: "Prboi",
    href: "/prboi",
    description:
      "PRBoi is a gym apparel brand that understands the importance of comfort, style, and performance",
  },
  {
    title: "Plain Habit",
    href: "/plain-habit",
    description: "Discover the Art of Simplicity and Elegance",
  },
  {
    title: "Sasfy",
    href: "/sasfy",
    description:
      "Sasfy a leading software development company, offers software solutions",
  },
];

const SHEET_SIDES = ["top"] as const;
type SheetSide = (typeof SHEET_SIDES)[number];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const path = usePathname();

  return (
    // <nav className="mx-auto py-2 fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <nav className="mx-auto py-2 absolute top-0 z-50 w-full">
      <div className="flex justify-between items-center container">
        <Image
          src={"/img/sandang-group.png"}
          width={80}
          height={80}
          sizes="100vh"
          alt="Sandang Gurau"
          className="md:ml-14"
        />
        <div className="lg:hidden">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button className="bg-transparent hover:bg-transparent">
                  {path === "/prboi" && (
                    <IoMenu className="text-2xl -mr-7 z-10" />
                  )}
                  <IoMenu className="text-2xl text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src={"/img/sandang-group.png"}
                      width={100}
                      height={100}
                      sizes="100vh"
                      alt="Sandang Gurau"
                    />
                  </SheetTitle>
                  <Link
                    href="/"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}>
                    Home
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex w-full items-center py-2 text-lg font-semibold">
                      Product
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[20rem]">
                      <DropdownMenuLabel>PRODUCT</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href={"/tete"} className="w-full">
                          Tete
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/sandang-gurau"} className="w-full">
                          Sandang Gurau (Fasion)
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/prboi"} className="w-full">
                          Prboi
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/plain-habit"} className="w-full">
                          Plain Habit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/sasfy"} className="w-full">
                          Sasfy
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))}
        </div>
        <NavigationMenu
          className={`${Josefin.className} hidden lg:flex xl:mr-16`}>
          <NavigationMenuList>
            <NavigationMenuItem className="w-20">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-20">
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] p-4 md:w-[300px] lg:w-[300px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      description={component.description}></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = ({ title, href, description }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}>
          <p className="text-sm font-bold leading-none">{title}</p>
          <p className="line-clamp-2 font-normal text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
