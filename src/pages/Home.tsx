import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CaseStudy from "../components/CaseStudy";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { caseStudies } from "../data/caseStudiesData";

export default function Home() {
  return (
    <div className="sky">
      <Navbar />
      <div className="relative z-100">
        <Hero />

        <div className="sun-rays"></div>
        <div className="sun"></div>
        <div className="moon"></div>
        <div className="stars"></div>
        <div className="cloud">
          <div className="cloud-bubble one"></div>
          <div className="cloud-bubble two"></div>
        </div>
        <div className="cloud cloud1">
  <div className="cloud-bubble one"></div>
  <div className="cloud-bubble two"></div>
</div>

<div className="cloud cloud2">
  <div className="cloud-bubble one"></div>
  <div className="cloud-bubble two"></div>
</div>

<div className="cloud cloud3">
  <div className="cloud-bubble one"></div>
  <div className="cloud-bubble two"></div>
</div>
        <section id="work" className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-600 dark:text-gray-300">
            My Work
          </h2>
          <section className="grid md:grid-cols-2 gap-10">
            {caseStudies.slice(0, 4).map((cs) => (
              <CaseStudy
                key={cs.id}
                title={cs.title}
                description={cs.description}
                image={cs.thumbnail}
                link={`/case-studies/${cs.id}`}
              />
            ))}
          </section>
        </section>

        <section id="about">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}
