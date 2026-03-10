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

  const menuVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as Easing },
    },
    exit: {
      opacity: 0,
      y: 16,
      transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };
  return (
    <>
      <button
        onClick={handleMenuToggle}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="relative z-100 flex items-center justify-center cursor-pointer  text-[#352dd4] "
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
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-90 flex items-center justify-center bg-[#001122] text-lime-200"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-6xl space-y-6 font-bold"
            >
              <motion.li variants={itemVariants}>
                <Link href="/">Home</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/">Services</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/">Works</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/">Contact</Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
