"use client";

import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion(Link);

export function Hero() {
  return (
    <section>
      <div className="m-2 min-h-svh bg-[#001122] px-48 py-8 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          <span className="text-lime-200 underline">design</span> and{" "}
          <span className="text-lime-200 underline">develop</span> digital
          solutions
        </h1>

        <div className="mt-24 flex gap-8">
          <MotionLink
            href="/"
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative overflow-hidden border border-[#352dd4] bg-lime-200 px-20 py-4 font-bold text-[#001122]"
          >
            <motion.span
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 origin-left bg-[#001122]"
            />

            <motion.span
              variants={{
                rest: { color: "#001122" },
                hover: { color: "#ffffff" },
              }}
              className="relative z-10"
            >
              Services
            </motion.span>
          </MotionLink>

          <MotionLink
            href="/"
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative overflow-hidden border border-[#352dd4] px-20 py-4 font-bold text-white"
          >
            <motion.span
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 origin-left bg-lime-200"
            />

            <motion.span
              variants={{
                rest: { color: "#ffffff" },
                hover: { color: "#001122" },
              }}
              className="relative "
            >
              Works
            </motion.span>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}