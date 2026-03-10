"use client";

import Image from "next/image";
import { LiaLanguageSolid } from "react-icons/lia";
import { RiSearch2Fill } from "react-icons/ri";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-transparent px-4 py-8 sm:px-6 lg:px-12 xl:px-20 2xl:px-48">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-4">
          <h1 className="font-bold text-2xl text-[#352dd4] ">NEXT</h1>
          <Image src="/logo.png" width={60} height={80} alt="logo" />
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <RiSearch2Fill className="h-7 w-7 text-[#352dd4] sm:h-8 sm:w-8" />
          <LiaLanguageSolid className="h-7 w-7 text-[#352dd4] sm:h-8 sm:w-8" />
          <Menu />
        </div>
      </div>
    </header>
  );
}
