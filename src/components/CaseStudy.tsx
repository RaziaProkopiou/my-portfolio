import { Link } from "react-router-dom";

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function CaseStudy({ title, description, image, link }: CaseStudyProps) {
  return (
    <Link
      to={link}
      className="group relative hover:no-underline overflow-hidden rounded-2xl dark:bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 border border-transparent"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-600 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>

        <span className="inline-flex items-center text-indigo-500 font-medium group-hover:underline transition">
          View Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
