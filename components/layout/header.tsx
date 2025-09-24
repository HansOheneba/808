"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) =>
    `text-gray-700 hover:text-black font-medium ${
      pathname === path ? "font-bold text-black" : ""
    }`;

  return (
    <>
    <div className="pt-20"></div>
      <header
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          isScrolled ? "bg-white border-b shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-5">
          {/* Logo for mobile */}
          <div className="flex md:hidden justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={60}
                height={30}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex w-full items-center justify-evenly">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>

            <Link href="/blueprint" className={linkClasses("/blueprint")}>
              The Blueprint
            </Link>

            {/* Logo in the middle */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={60}
                height={30}
                priority
                className="object-contain"
              />
            </Link>

            <Link
              href="/midnight-madness-3"
              className={linkClasses("/midnight-madness-3")}
            >
              Midnight Madness 3
            </Link>

            <Link href="/contact" className={linkClasses("/contact")}>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger>
                <Menu size={28} className="text-gray-700" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-white px-5">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col space-y-4">
                  <Link href="/" className={linkClasses("/")}>
                    Home
                  </Link>
                  <Link href="/blueprint" className={linkClasses("/blueprint")}>
                    The Blueprint
                  </Link>
                  <Link
                    href="/midnight-madness-3"
                    className={linkClasses("/midnight-madness-3")}
                  >
                    Midnight Madness 3
                  </Link>
                  <Link href="/contact" className={linkClasses("/contact")}>
                    Contact Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
