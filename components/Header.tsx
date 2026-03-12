"use client";

import { LiaLanguageSolid } from "react-icons/lia";
import { RiSearch2Fill } from "react-icons/ri";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-transparent px-4 py-8 sm:px-6 lg:px-12 xl:px-20 2xl:px-48">
      <div className="flex w-full items-center justify-end gap-3">
          <RiSearch2Fill className="h-7 w-7 text-[#352dd4] sm:h-8 sm:w-8" />
          <LiaLanguageSolid className="h-7 w-7 text-[#352dd4] sm:h-8 sm:w-8" />
          <Menu />
        </div>
    </header>
  );
}
