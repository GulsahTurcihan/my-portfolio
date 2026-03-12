import Image from "next/image";

export function ServicesSection() {
  return (
    <section
      id="services-section"
      className="flex flex-col space-y-8 sm:space-y-16 items-center justify-center py-8 sm:py-16"
    >
      <div className=" max-w-3xl text-[#001122] text-center space-y-8">
        <h1 className="text-4xl font-semibold ">
          We help facilitate the improvement of your business processes
        </h1>
        <h2 className="font-medium text-lg ">
          We transform the challenges in your business processes into digital
          solutions that you will love to use every day.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl">
        <div className="p-8 space-y-6 bg-gray-50">
          <h2 className="font-bold text-xl ">Frontend Development</h2>
          <h3 className="text-[15px]">
            Scalable web applications using modern React ecosystem.
          </h3>
          <div className="flex flex-row gap-x-4">
            <div className="relative group">
              <Image
                src="./nextdotjs.svg"
                alt="nextjs-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">Next.js</span>
            </div>
            <div className="relative group">
              <Image
                src="./react.svg"
                alt="react-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">React</span>
            </div>
            <div className="relative group">
              <Image
                src="./typescript.svg"
                alt="typescript-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">Typescript</span>
            </div>
            <div className="relative group">
              <Image
                src="./vercel.svg"
                alt="vercel-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">Vercel</span>
            </div>
          </div>
        </div>
        <div className="p-8 space-y-8 bg-gray-50 ">
          <h2 className="font-bold text-xl">Responsive UI Development</h2>
          <h3 className="text-[15px]">
            Clean, responsive interfaces optimized for desktop, tablet and
            mobile devices.
          </h3>
          <div className="flex flex-row gap-x-4">
            <div className="relative group">
              <Image
                src="./tailwindcss.svg"
                alt="tailwind-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">Tailwind</span>
            </div>

            <div className="relative group">
              <Image
                src="./html5.svg"
                alt="html5-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">HTML5</span>
            </div>

            <div className="relative group">
              <Image
                src="./css.svg"
                alt="css-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">CSS</span>
            </div>
          </div>
        </div>
        <div className="p-8 space-y-8 bg-gray-50 ">
          <h2 className="font-bold text-xl">Component Driven Architecture</h2>
          <h3 className="text-[15px]">
            Reusable UI components and structured frontend architecture for
            scalable products.
          </h3>
          <div className="flex flex-row gap-x-4">
            <div className="relative group"><Image
              src="./react.svg"
              alt="react-logo"
              width={26}
              height={26}
              className="tech-image"
            />
            <span className="tech-span-hover">React</span></div>
            
            <div className="relative group"><Image
              src="./storybook.svg"
              alt="storybook-logo"
              width={26}
              height={26}
              className="tech-image"
            />
            <span className="tech-span-hover">Storybook</span></div>
            
            <div className="relative group"><Image
              src="./typescript.svg"
              alt="typescript-logo"
              width={26}
              height={26}
              className="tech-image"
            />
            <span className="tech-span-hover">Typescript</span></div>
            
          </div>
        </div>
        <div className="p-8 space-y-4 bg-gray-50">
          <h2 className="font-bold text-xl">Performance Optimization</h2>
          <h3 className="text-[15px]">
            Fast-loading interfaces optimized for performance, accessibility and
            SEO.
          </h3>
          <div className="flex flex-row gap-x-4">
            <div className="relative group"><Image
              src="./nextdotjs.svg"
              alt="nextjs-logo"
              width={26}
              height={26}
              className="tech-image"
            />
            <span className="tech-span-hover">Next.js</span></div>
            
            <div className="relative group"><Image
              src="./lighthouse.svg"
              alt="lighthouse-logo"
              width={26}
              height={26}
              className="tech-image"
            />
            <span className="tech-span-hover">Lighthouse</span></div>
            
            <div className="relative group"><Image
              src="./vercel.svg"
              alt="vercel-logo"
              width={26}
              height={26}
              className="tech-image"
            />
            <span className="tech-span-hover">Vercel</span></div>
            
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
            <div className="relative group">
              <Image
                src="./reacthookform.svg"
                alt="reacthookform-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">R.H.F</span>
            </div>

            <div className="relative group">
              <Image
                src="./zod.svg"
                alt="zod-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">Zod</span>
            </div>

            <div className="relative group">
              {" "}
              <Image
                src="./typescript.svg"
                alt="typescript-logo"
                width={26}
                height={26}
                className="tech-image"
              />
              <span className="tech-span-hover">Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
