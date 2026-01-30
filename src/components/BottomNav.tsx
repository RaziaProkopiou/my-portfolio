import { useEffect, useState } from "react";

interface BottomNavProps {
  sections: { id: string; heading: string }[];
  anchorId?: string;
}

export default function BottomNav({
  sections,
  anchorId = "section-nav-anchor",
}: BottomNavProps) {
  const [floating, setFloating] = useState(false);
  const [showOrb, setShowOrb] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const target = document.getElementById(anchorId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFloating(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [anchorId]);

  useEffect(() => {
    const handler = () => setShowOrb(window.scrollY > 768);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDropdownOpen(false);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Mobile-only dropdown logic
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const displayedSections = isMobile ? sections.slice(0, 2) : sections;
  const moreSection = isMobile ? sections.slice(2) : [];

  const NavInner = (
    <nav className="flex gap-1 md:gap-2 items-center justify-center flex-wrap">
      {displayedSections.map((s, index) => (
        <div key={s.id} className="flex items-center">
          <button
            onClick={() => scrollTo(s.id)}
            className="text-xs md:text-sm font-bold text-indigo-600 hover:underline px-1.5 md:px-2 whitespace-nowrap"
          >
            {s.heading}
          </button>
          {index < displayedSections.length - 1 && (
            <div className="w-px h-4 md:h-6 bg-gray-300 mx-1 md:mx-2"></div>
          )}
        </div>
      ))}

      {/* Dropdown for hidden sections on mobile only */}
      {moreSection.length > 0 && (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-xs md:text-sm font-bold text-indigo-600 hover:underline px-1.5 md:px-2"
          >
            More ▼
          </button>
          {dropdownOpen && (
            <div className="absolute bottom-full -mb-2 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50">
              {moreSection.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" 
                >
                  {s.heading}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );

  return (
    <>
      {/* Static in-flow version */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-700 dark:text-gray-300">
          More about the Project
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
          Explore my project process. Click on a tag below to jump directly to
          the relevant section.
        </p>
        <div className="py-4 flex justify-center mb-12 md:mb-16">
          <div className="max-w-4xl w-full px-2 md:px-0">
            <div className="flex items-center justify-center gap-2 md:gap-4 rounded-xl border border-white/20 dark:border-gray-700/30 bg-indigo-600/10 dark:bg-gray-900/40 backdrop-blur-xl shadow-md px-3 md:px-4 py-3">
              {NavInner}
            </div>
          </div>
        </div>
      </div>

      {/* Floating version */}
      <div
        className={`fixed inset-x-0 flex justify-center z-50 
        transition-all duration-300 pointer-events-none px-2 md:px-0
        ${floating ? "bottom-5 opacity-100" : "bottom-[-90px] opacity-0"}`}
      >
        <div className="max-w-4xl w-full flex items-center justify-between pointer-events-auto gap-2 md:gap-4">
          {/* Nav */}
          <div
            className="
              flex-1 flex items-center justify-center 
              backdrop-blur-xl bg-indigo-100/70 dark:bg-gray-900/90
              shadow-lg rounded-xl border border-white/20 dark:border-gray-700/30 
              px-2 py-2 md:py-3
            "
          >
            {NavInner}
          </div>

          {/* Back to top Orb */}
          <button
            onClick={scrollTop}
            className={`
              w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
              backdrop-blur-xl bg-indigo-100/70 dark:bg-gray-900/90
              border border-white/20 dark:border-white/20 shadow-lg
              transition-all animate-pulse-slow flex-shrink-0

              ${
                showOrb
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 pointer-events-none"
              }
              hover:scale-110 hover:animate-none
            `}
          >
            <span className="text-xl font-extrabold text-indigo-600">↑</span>
          </button>
        </div>
      </div>
    </>
  );
}
