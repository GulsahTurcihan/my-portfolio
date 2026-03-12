import { ServicesCarousel } from "./ServicesCarousel";

export function ProjectSection() {
  return (
    <section
      id="project-section"
      className="flex flex-col space-y-8 sm:space-y-16 items-center justify-center py-8 sm:py-16 bg-gray-50"
    >
      <ServicesCarousel />
    </section>
  );
}
