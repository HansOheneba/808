"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMM3 = pathname === "/mm3" || pathname === "/public/mm3";

  React.useLayoutEffect(() => {
    if (isMM3) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";

      let themeMeta = document.querySelector(
        'meta[name="theme-color"]'
      ) as HTMLMetaElement | null;
      if (!themeMeta) {
        const newThemeMeta = document.createElement("meta");
        newThemeMeta.setAttribute("name", "theme-color");
        document.head.appendChild(newThemeMeta);
        themeMeta = newThemeMeta;
      }
      themeMeta.setAttribute("content", "#000000");

      let colorSchemeMeta = document.querySelector(
        'meta[name="color-scheme"]'
      ) as HTMLMetaElement | null;
      if (!colorSchemeMeta) {
        const newColorSchemeMeta = document.createElement("meta");
        newColorSchemeMeta.setAttribute("name", "color-scheme");
        document.head.appendChild(newColorSchemeMeta);
        colorSchemeMeta = newColorSchemeMeta;
      }
      colorSchemeMeta.setAttribute("content", "dark");
    } else {
      // Always fully reset all dark mode and meta tags when not on /mm3
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";

      let themeMeta = document.querySelector(
        'meta[name="theme-color"]'
      ) as HTMLMetaElement | null;
      if (!themeMeta) {
        const newThemeMeta = document.createElement("meta");
        newThemeMeta.setAttribute("name", "theme-color");
        document.head.appendChild(newThemeMeta);
        themeMeta = newThemeMeta;
      }
      themeMeta.setAttribute("content", "#f8fafc");

      let colorSchemeMeta = document.querySelector(
        'meta[name="color-scheme"]'
      ) as HTMLMetaElement | null;
      if (!colorSchemeMeta) {
        const newColorSchemeMeta = document.createElement("meta");
        newColorSchemeMeta.setAttribute("name", "color-scheme");
        document.head.appendChild(newColorSchemeMeta);
        colorSchemeMeta = newColorSchemeMeta;
      }
      colorSchemeMeta.setAttribute("content", "light");
    }
  }, [pathname, isMM3]);

  return (
    <div
      className={`${
        isMM3 ? "bg-black text-white" : "bg-airbanBlue"
      } animate-fade min-h-screen flex flex-col`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
