"use client";

import Image from "next/image";
import { LiaLanguageSolid } from "react-icons/lia";
import {  RiSearch2Fill } from "react-icons/ri";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="flex items-center justify-between py-4 bg-transparent w-full fixed mx-4 sm:px-48 z-10">
      <div className="flex items-center">
        <h1 className="mb-4 font-bold text-2xl text-[#c1ff72]">NEXT</h1>
        <Image src="/logo.png" width={120} height={100} alt="logo" />
      </div>

      <div className="flex flex-row gap-x-4 mx-8">
        <RiSearch2Fill className="w-8 h-8  text-[#352dd4]" />
        <LiaLanguageSolid className="w-8 h-8  text-[#352dd4]" />
        <Menu />
      </div>
    </header>
  );
}
