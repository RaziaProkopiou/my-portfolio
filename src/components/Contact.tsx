export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-600 dark:text-gray-300">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Let’s work together! Feel free to reach out. I’m always open to connecting and exploring new opportunities.
      </p>
      <div className="flex gap-6 mt-6 flex-col md:flex-row">
      <p className="text-lg font-medium">
        📧 <a href="mailto:youremail@example.com" className="text-indigo-500">raziaprokopiou1@gmail.com</a>
      </p>
        {/* <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 dark:text-gray-300 hover:indigo-500">LinkedIn</a>
        <a href="https://github.com/yourprofile" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">GitHub</a> */}
      </div>
    </section>
  )
}