export default function AppDesigns() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-600 dark:text-gray-300">App Design Concepts</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Showcasing UI design thinking with mobile prototypes.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl shadow-lg p-6 bg-transparent dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          <h3 className="text-xl font-semibold mb-4">LocaShop</h3>
          <img src="/images/locashop-mock.png" alt="LocaShop" className="w-full h-50% object-cover" />
        </div>
        <div className="rounded-2xl shadow-lg p-6 bg-transparent dark:bg-gray-900 text-gray-600 dark:text-gray-300">
          <h3 className="text-xl font-semibold mb-4">Mindfulness Tracker</h3>
          <img src="/images/mindfulness-mock.png" alt="Mindfulness App" className="rounded-xl" />
        </div>
      </div>
    </section>
  )
}