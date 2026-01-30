export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-600 dark:text-gray-300">
        About
      </h2>
      <div className="mb-8 text-gray-600 dark:text-gray-300">
        <p className="mb-4">
          I began my career studying sociology and gender studies, which gave me
          a deep understanding of human behaviour and research. Over time, I
          realised I wanted to not only study people but design and build the
          solutions they interact with. That led me into UI/UX design and
          front-end development, where I combine people-centered thinking with
          clean, responsive implementation.
        </p>
        <p className="mb-4">I’ve since designed and built web experiences end-to-end, from UX flows and UI systems in Figma, to interactive front-end implementation in HTML, CSS, JavaScript, and React.</p>
        <p>My strength lies in bridging design and development. I create intuitive interfaces and bring them to life through code, ensuring the final product matches the original vision and works seamlessly for real users.</p>
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        <ul className="list-disc pl-6 space-y-8">
          <li>Currently living in Malmesbury, Western Cape, South Africa.</li>
          <li>
            Studied Sociology at the University of Cape Town and, more recently,
            Information Systems (Engineering) at Pearson Institute of Higher
            Education.
          </li>
          <li>
            I've worked across various industries, from office administration to
            finance, before ultimately finding my passion in interface design
            and development.
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-8 mt-16 text-gray-600 dark:text-gray-300">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          Figma
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          HTML / CSS
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          React (TS)
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          JavaScript
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          Tailwind CSS
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          Git / GitHub
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          Next.js
        </div>
        <div className="p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          UI / UX Design
        </div>
      </div>
    </section>
  );
}
