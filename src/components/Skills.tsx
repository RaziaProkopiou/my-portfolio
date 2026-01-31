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

      <h2 className="text-3xl font-bold mb-8 mt-16 pt-16 text-gray-600 dark:text-gray-300">
        Skills & Toolkit
      </h2>

      {/* Design */}
      <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">Design</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">UI / UX Design</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">User flows, wireframes, high-fidelity UI</p>
          </div>
        </div>
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">Figma</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Components, design systems, prototyping</p>
          </div>
        </div>
      </div>

      {/* Front-end Development */}
      <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">Front-end Development</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">HTML & CSS</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Semantic, responsive layouts</p>
          </div>
        </div>
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">JavaScript</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Interactive UI & application logic</p>
          </div>
        </div>
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">React + TypeScript</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Component-driven front-end development</p>
          </div>
        </div>
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">Next.js</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Routing, layouts, performance basics</p>
          </div>
        </div>
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">Tailwind CSS</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Utility-first styling & theming</p>
          </div>
        </div>
      </div>

      {/* Workflow & Delivery */}
      <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-300">Workflow & Delivery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group relative p-4 rounded-xl shadow-lg dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="font-medium">Git / GitHub</div>
          <div className="absolute inset-0 bg-white dark:bg-gray-800 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex">
            <p className="text-sm">Version control & collaborative workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
