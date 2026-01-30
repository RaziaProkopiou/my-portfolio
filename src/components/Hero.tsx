export default function Hero() {
  return (
     <section className="pt-32 max-w-6xl mx-auto px-6">
      <p className="text-lg md:text-xl max-w-2xl lg:max-w-6xl text-gray-600 dark:text-gray-300 leading-[4rem]">
        I’m a Front-end Developer & UI/UX Designer creating{' '}
        <span className="relative inline-block">
          <span className="absolute left-1/2 -translate-x-1/2 -top-6 -mb-6 text-inherit font-medium pointer-events-none select-none -rotate-6">
            people
          </span>
          <span className="orange-strike">user</span>
        </span>
        -centered, intuitive, and responsive digital experiences.
      </p>
    </section>
  );
}
