"use client";

import Link from "next/link";
import { useState } from "react";
import { RiCloseLargeFill, RiMenuLine } from "react-icons/ri";
import { AnimatePresence, motion } from "motion/react";
import type { Easing } from "motion/react";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleMenuClose () {
    setIsMenuOpen(false)
  }

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Works",
      href: "/",
    },
    {
      label: "Services",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
  ];
  const menuVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as Easing },
    },
  };
  return (
    <>
      <button
        onClick={handleMenuToggle}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="relative z-100 flex items-center justify-center cursor-pointer text-[#352dd4]"
      >
        {isMenuOpen ? (
          <RiCloseLargeFill className="h-6 w-6 sm:h-8 sm:w-8" />
        ) : (
          <RiMenuLine className="h-6 w-6  sm:h-8 sm:w-8" />
        )}
      </button>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-90 flex items-center justify-center bg-[#001122] text-lime-200"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="show"
              className="text-6xl space-y-6 font-bold"
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.label}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className="w-fit"
                >
                  <Link href={item.href} onClick={handleMenuClose} className="relative inline-block">
                    {item.label}{" "}
                    <motion.span
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      className="absolute left-0 -bottom-2 h-0.75 w-full origin-left bg-lime-200"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
