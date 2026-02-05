export default function Hero() {
  return (
    <section className="pt-28 md:pt-32 max-w-6xl mx-auto px-6">
      <p className="text-lg md:text-xl max-w-2xl lg:max-w-6xl text-gray-600 dark:text-gray-300 leading-relaxed md:leading-[4rem]">
        I’m a Front-end Developer & UI/UX Designer{" "}
        <span className="block mt-2 md:inline md:mt-0">
          creating {/* Mobile version */}
          <span className="inline md:hidden font-medium text-gray-900 dark:text-white">
            people-centered
          </span>
          {/* Desktop version */}
          <span className="relative hidden md:inline-block">
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 text-inherit font-medium pointer-events-none select-none -rotate-6">
              people
            </span>
            <span className="orange-strike">user</span>
          </span>
          <span className="hidden md:inline">-centered</span>, intuitive, and
          responsive digital experiences.
        </span>
      </p>
    </section>
  );
}
