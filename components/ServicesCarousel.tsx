import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

const projects = [
  {
    title: "Gürlaw",
    subtitle: "Corporate Law Firm Website",
    description:
      "Clean and responsive corporate website built with a modern frontend structure, reusable UI blocks, and clear content hierarchy.",
    video: "/gurlaw/gurlaw-video.mov",
    href: "/",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Şimşek Health",
    subtitle: "Healthcare Website",
    description:
      "Responsive and structured healthcare website focused on clarity, accessibility, and modern interface consistency across devices.",
    video: "/gurlaw/gurlaw-video.mov",
    href: "/",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Sedat Triko",
    subtitle: "Corporate Textile Website",
    description:
      "Multi-section corporate website designed to present products and company information with a clean layout and scalable component structure.",
    video: "/gurlaw/gurlaw-video.mov",
    href: "/",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export function ServicesCarousel() {
  return (
    <Carousel className="w-full max-w-xl md:max-w-6xl">
      <CarouselContent className="-ml-1">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2">
            <div className="group h-full p-1">
              <Card className="overflow-hidden border border-black/5 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex h-full flex-col pt-4">
                  <div className="relative rounded-2xl aspect-16/10 w-full overflow-hidden bg-zinc-100">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={project.video}
                      className="h-full w-full  object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between space-y-6 p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold tracking-tight text-[#001122]">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#001122]/55">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="max-w-md text-sm leading-6 text-[#001122]/75">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className={` border border-black/10 px-3 py-1 text-[#001122] transition-colors duration-300 ${
                              tech === "TypeScript"
                                ? "hover:text-[#3178C6]"
                                : tech === "Tailwind CSS"
                                  ? "hover:text-[#06B6D4]"
                                  : "hover:text-black"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.href}
                      className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#001122] transition-colors duration-300 hover:text-[#352dd4]"
                    >
                      View project
                      <RxArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}