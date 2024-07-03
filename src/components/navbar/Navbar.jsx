"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-[#1a1a1a] text-white py-4 px-6">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-auto"
            onClick={toggleMenu}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={closeMenu}>
            <SheetContent side="left" className="md:hidden">
              <div className="flex flex-col gap-4 p-4">
                <Link
                  href="#"
                  className="text-lg font-medium hover:text-[#ccc] hover:underline"
                  prefetch={false}
                >
                  Inicio
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:text-[#ccc] hover:underline"
                  prefetch={false}
                >
                  Tecnologías
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:text-[#ccc] hover:underline"
                  prefetch={false}
                >
                  Proyectos
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:text-[#ccc] hover:underline"
                  prefetch={false}
                >
                  Contacto
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-4 w-full">
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#ccc] hover:underline"
            prefetch={false}
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#ccc] hover:underline"
            prefetch={false}
          >
            Tecnologías
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#ccc] hover:underline"
            prefetch={false}
          >
            Proyectos
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:text-[#ccc] hover:underline"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
export default Navbar;
