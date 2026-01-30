import { useState } from "react"
import { useLocation } from "react-router-dom" // Add this import
// import CatToggle from "./CatToggle"
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation(); // Get current location

  // Hide links if on a case study page
  const hideLinks = location.pathname.startsWith("/case-studies/");

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-50/90 dark:bg-gray-900/90 shadow-xl z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          <a href="/" className="hover:no-underline">Razia Prokopiou</a>
        </div>

        {/* Desktop Links */}
         <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 items-center justify-center">
          {!hideLinks && (
            <>
              <a href="#work" className="block hover:text-indigo-500">My Work</a>
              <a href="#about" className="block hover:text-indigo-500">About</a>
              <a href="#contact" className="block hover:text-indigo-500">Contact</a>
            </>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-indigo-200 dark:border-gray-600"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800 dark:text-gray-100"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && !hideLinks && (
        <div className="md:hidden bg-stone-200/80 dark:bg-gray-900/90 px-6 pb-4 space-y-4 text-gray-700 dark:text-gray-200">
          <a href="#work" className="block hover:text-indigo-500">My Work</a>
          <a href="#about" className="block hover:text-indigo-500">About</a>
          <a href="#contact" className="block hover:text-indigo-500">Contact</a>
          {/* Theme Switch (not cat) */}
          <button
            onClick={toggleTheme}
            className="w-full py-2 bg-gray-500 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Toggle Theme
          </button>
        </div>
      )}

      {/* Desktop CatToggle peeking under navbar */}
      {/* <div className="hidden md:block absolute right-6 top-14">
        <CatToggle onClick={toggleTheme} />
      </div> */}
    </nav>
  )
}