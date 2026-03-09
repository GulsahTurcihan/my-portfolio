"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLargeFill, RiMenuUnfold2Fill } from "react-icons/ri";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <nav className="flex h-full flex-row">
        <button onClick={handleToggle} className="cursor-pointer">
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0, scale: menuOpen ? 1.1 : 1 }}
            transition={{ duration: 0.25 }}
          >
            {menuOpen ? (
              <RiCloseLargeFill className="w-8 h-8 text-[#352dd4]" />
            ) : (
              <RiMenuUnfold2Fill className="w-8 h-8 text-[#352dd4]" />
            )}
          </motion.div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-[#001122] z-50 flex flex-col items-center justify-center"
          >
            <ul className="space-y-8 text-5xl font-bold text-lime-200">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Works</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}