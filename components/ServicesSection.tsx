import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="flex flex-col space-y-8 sm:space-y-16 items-center justify-center py-8 sm:py-16">
      <div className=" max-w-3xl text-[#001122] text-center space-y-8">
        <h1 className="text-4xl font-semibold  ">
          We help facilitate the improvement of your business processes
        </h1>
        <h2 className="font-medium text-lg ">
          We transform the challenges in your business processes into digital
          solutions that you will love to use every day.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-4xl">
        <div className="p-8 space-y-6 bg-gray-50">
          <h2 className="font-bold text-xl ">Frontend Development</h2>
          <h3 className="text-[15px]">
            Scalable web applications using modern React ecosystem.
          </h3>
          <div className="flex flex-row gap-x-4">
            <Image
              src="./nextdotjs.svg"
              alt="nextjs-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
            <Image
              src="./react.svg"
              alt="react-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />

            <Image
              src="./typescript.svg"
              alt="typescript-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
            <Image
              src="./vercel.svg"
              alt="vercel-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <div className="p-8 space-y-8 bg-gray-50 ">
          <h2 className="font-bold text-xl">Responsive UI Development</h2>
          <h3 className="text-[15px]">
            Clean, responsive interfaces optimized for desktop, tablet and
            mobile devices.
          </h3>
          <div className="flex flex-row gap-x-4">
            <Image
              src="./tailwindcss.svg"
              alt="tailwind-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
            <Image
              src="./html5.svg"
              alt="html5-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />

            <Image
              src="./css.svg"
              alt="css-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <div className="p-8 space-y-8 bg-gray-50 ">
          <h2 className="font-bold text-xl">Component Driven Architecture</h2>
          <h3 className="text-[15px]">
            Reusable UI components and structured frontend architecture for
            scalable products.
          </h3>
          <div className="flex flex-row gap-x-4">
            <Image
              src="./react.svg"
              alt="react-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
            <Image
              src="./storybook.svg"
              alt="storybook-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />

            <Image
              src="./typescript.svg"
              alt="typescript-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <div className="p-8 space-y-4 bg-gray-50">
          <h2 className="font-bold text-xl">Performance Optimization</h2>
          <h3 className="text-[15px]">
            Fast-loading interfaces optimized for performance, accessibility and
            SEO.
          </h3>
          <div className="flex flex-row gap-x-4">
            <Image
              src="./nextdotjs.svg"
              alt="nextjs-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
            <Image
              src="./lighthouse.svg"
              alt="lighthouse-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />

            <Image
              src="./vercel.svg"
              alt="vercel-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <div className="p-8 space-y-4 bg-gray-50">
          <h2 className="font-bold text-xl">Form Handling & Validation</h2>
          <h3 className="text-[15px]">
            Develop structured and type-safe form workflows using modern tools
            like React Hook Form and Zod to ensure reliable validation and a
            seamless user experience.
          </h3>
          <div className="flex flex-row gap-x-4">
            <Image
              src="./reacthookform.svg"
              alt="reacthookform-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
            <Image
              src="./zod.svg"
              alt="zod-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />

            <Image
              src="./typescript.svg"
              alt="typescript-logo"
              width={26}
              height={26}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
