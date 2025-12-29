"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { links } from "./navbar.data"

export function Navbar() {
  return (
    <header className="w-full p-4 bg-indigo-900 backdrop-blur sticky top-0 z-50">
      <NavigationMenu className="w-full max-w-none px-6">
        <NavigationMenuList className="flex w-full gap-8 items-center justify-between">

          {/* Logo */}
          <NavigationMenuItem>
            <Link href="/" className="text-2xl text-white ">
              TechView <span className="font-bold">AI</span>
            </Link>
          </NavigationMenuItem>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-2">
            {links.map(link => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-black"
                >
                  <Link href={link.href}>{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-gray-950 text-white">
                <SheetTitle aria-describedby="Menu de navegacion" className="sr-only">
                  Menú de navegación
                </SheetTitle>

                <SheetDescription className="sr-only">
                  Accesos principales del sitio
                </SheetDescription>

                <nav className="flex flex-col gap-4 mt-8 mx-4">
                  {links.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
