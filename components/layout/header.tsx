import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full ">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-around">
        {/* Left navigation */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black font-medium"
          >
            About Us
          </Link>
        </div>

        {/* Logo in the middle */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={120}
              height={60}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right navigation */}
        <div className="flex items-center space-x-6">
          <Link
            href="/midnight-madness-3"
            className="text-gray-700 hover:text-black font-medium"
          >
            Midnight Madness 3
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black font-medium"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
