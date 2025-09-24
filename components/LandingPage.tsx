"use client";

import React from "react";
import Link from "next/link";
import Header from "./layout/header";
// import Image from "next/image";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        {/* Midnight Madness 3 Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          {/* Left: Event Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">MIDNIGHT MADNESS 3</h2>
            <p className="mb-2">DATE: 31.10.25</p>
            <p className="mb-2">LOCATION: [REDACTED]</p>
            <p className="mb-6">WAITLIST RELEASE 10.10.25</p>
            <Link
              href="/mm3"
              className="underline font-medium hover:text-gray-700"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Right: Image placeholder */}
          <div className="w-full h-64 border-2 border-pink-500 flex items-center justify-center text-pink-500">
            ENTER PHOTO HERE
          </div>
        </section>

        {/* Explore 808 Section */}
        <section>
          <h2 className="text-xl font-bold mb-8">EXPLORE 808</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First photo placeholder */}
            <div className="w-full h-48 border-2 border-pink-500 flex items-center justify-center text-pink-500">
              ENTER PHOTO HERE
            </div>

            {/* Second photo placeholder */}
            <div className="w-full h-48 border-2 border-pink-500 flex items-center justify-center text-pink-500">
              ENTER PHOTO HERE
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
