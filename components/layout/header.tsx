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

const NAV_LINKS = [
  // { href: "/", label: "Home" },
  { href: "/blueprint", label: "The Blueprint" },
  { href: "/mm3", label: "Midnight Madness 3" },
  { href: "/contact", label: "Contact Us" },
];

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

  // Detect if on /mm3 page
  const isMM3 = pathname === "/mm3" || pathname === "/public/mm3";

  const linkClasses = (path: string) =>
    pathname === path
      ? `font-bold ${isMM3 ? "text-lime-500" : "text-black"} uppercase underline`
      : `${
          isMM3
            ? "text-lime-500 hover:text-lime-700"
            : "text-gray-700 hover:text-black"
        } font-medium uppercase`;

  return (
    <>
      <div className="pt-20"></div>
      <header
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          isMM3
            ? "bg-black/10 backdrop-blur-2xl"
            : isScrolled
            ? "bg-white border-b shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-5">
          {/* Logo for mobile */}
          <div className="flex md:hidden justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={isMM3 ? "/assets/808green.png" : "/assets/logo.png"}
                alt="Logo"
                width={60}
                height={30}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex w-full items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={isMM3 ? "/assets/808green.png" : "/assets/logo.png"}
                alt="Logo"
                width={60}
                height={30}
                priority
                className="object-contain"
              />
            </Link>
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}

            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger>
                <Menu
                  size={28}
                  className={isMM3 ? "text-white" : "text-gray-700"}
                />
              </SheetTrigger>
              <SheetContent
                side="left"
                className={isMM3 ? "bg-black px-5" : "bg-white px-5"}
              >
                <SheetHeader>
                  <SheetTitle
                    className={`text-lg font-semibold ${
                      isMM3 ? "text-white" : ""
                    }`}
                  >
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={linkClasses(link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
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
