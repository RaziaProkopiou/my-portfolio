import { Link } from "react-router-dom";
import { CaseStudy } from "../data/caseStudiesData";
import BottomNav from "./BottomNav";

interface CaseStudyLayoutProps extends CaseStudy {
  related?: CaseStudy[];
}

export default function CaseStudyLayout({
  title,
  sections,
  related,
  extraImages,
  headerImage,
  problem,
  solution,
  impact,
}: CaseStudyLayoutProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <a
        href="/"
        className="inline-block mb-16 text-indigo-600 hover:underline font-semibold"
      >
        ← Back to Portfolio
      </a>

      {/* Hero */}
      <header className="mb-16 grid md:grid-cols-[2fr_3fr]">
        <div>
          <p className="text-lg mb-4 text-indigo-600">{title}</p>
          <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300">
            Project Summary
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold">Problem:</p>
              <p>{problem}</p>
            </div>

            <div>
              <p className="font-semibold">Solution:</p>
              <p>{solution}</p>
            </div>

            <div>
              <p className="font-semibold">Impact:</p>
              <p>{impact}</p>
            </div>
          </div>
        </div>

        {headerImage && (
          <img
            src={headerImage}
            alt={title}
            className="object-cover w-full mt-8 md:mt-0"
          />
        )}
      </header>

      {/*Floating Bottom Navigation */}

      <div id="section-nav-anchor" className="h-1"></div>

      <BottomNav
        sections={sections.map((s) => ({
          id: s.id,
          heading: s.heading,
        }))}
      />

      {/* Sections */}
      {sections.map((s, i) => (
        <section id={s.id} key={i} className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            {s.heading}
          </h2>

          {s.contentBlocks
            ? s.contentBlocks.map((block, idx) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 mb-3">
                  {block}
                </p>
              ))
            : s.content && (
                <p className="text-gray-700 dark:text-gray-300">{s.content}</p>
              )}

          {/* Embed (Figma prototype, etc.) - single or multiple */}
          {s.embedUrls && s.embedUrls.length > 0 ? (
            <div className="my-8">
              {s.embedUrls.map((embed, idx) => (
                <div key={idx}>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {embed.label}
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 mb-8">
                    <iframe
                      style={{ width: "100%", height: "500px", border: "none" }}
                      src={embed.url}
                      allowFullScreen
                      title={`${s.heading} - ${embed.label}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : s.embedUrl ? (
            <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
              <iframe
                style={{ width: "100%", height: "600px", border: "none" }}
                src={s.embedUrl}
                allowFullScreen
                title={`${s.heading} Prototype`}
              />
            </div>
          ) : null}

          {s.buttonUrl && (
            <a
              href={s.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600/20 border border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-900 transition hover:no-underline"
            >
              Live Site | Code
            </a>
          )}

          {/* Render subsections if present */}
          {s.subsections &&
            s.subsections.map((sub, si) => (
              <div key={si} className="mb-8 mt-8">
                <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  {sub.heading}
                </h3>

                {/* Render contentBlocks if present, otherwise fall back to content */}
                {sub.contentBlocks
                  ? sub.contentBlocks.map((block, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 mb-3"
                      >
                        {block}
                      </p>
                    ))
                  : sub.content && (
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {sub.content}
                      </p>
                    )}

                {sub.images && sub.images.length > 0 && (
                  <div>
                    {sub.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${sub.heading} image ${idx + 1}`}
                        className="object-cover mb-8"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}

          {/* Support single or multiple images per section */}
          {s.images && s.images.length > 0 && (
            <div
              className={`mt-4 grid gap-4 ${
                s.images.length === 1
                  ? "grid-cols-1"
                  : s.images.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 md:grid-cols-3"
              }`}
            >
              {s.images.map((img, j) => (
                <img
                  key={j}
                  src={img}
                  alt={`${s.heading} image ${j + 1}`}
                  className="rounded-lg shadow-md object-cover w-full"
                />
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Optional gallery section */}
      {extraImages && extraImages.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 dark:text-gray-300">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {extraImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} gallery image ${i + 1}`}
                className="rounded-lg shadow-md object-cover w-full"
              />
            ))}
          </div>
        </section>
      )}

      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition hover:no-underline"
      >
        ← Back to Portfolio
      </a>

      {/* Related */}
      {related && related.length > 0 && (
        <aside className="my-14 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-gray-300">
            Related Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((cs) => (
              <Link
                key={cs.id}
                to={`/case-studies/${cs.id}`}
                className="block hover:no-underline dark:bg-gray-800 rounded-lg shadow-lg border border-transparent hover:border-gray-300 dark:hover:border-gray-700 p-4"
              >
                <img
                  src={cs.thumbnail}
                  alt={cs.title}
                  className="rounded mb-3"
                />
                <h3 className="font-semibold text-lg dark:text-gray-300">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cs.description}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </main>
  );
}
