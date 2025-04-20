import React from "react";

const TrendingTopics = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
          Trending <span className="text-indigo-600">Tech Topics</span>
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Stay ahead of the curve with the latest trends in technology. These
          are the hot topics developers, startups, and tech enthusiasts are
          exploring in 2025.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Popular Frameworks & Tools
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "Vue.js",
              "Svelte",
              "Astro",
              "Remix",
            ].map((topic, index) => (
              <li
                key={index}
                className="px-5 py-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:bg-indigo-50 transition duration-300 text-gray-800 font-medium text-lg cursor-pointer"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Emerging Technologies
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              "AI & ML",
              "Web 3.0",
              "Blockchain",
              "Edge Computing",
              "Quantum Computing",
              "IoT",
              "Cybersecurity",
              "DevOps",
            ].map((topic, index) => (
              <li
                key={index}
                className="px-5 py-3 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:bg-indigo-50 transition duration-300 text-gray-800 font-medium text-lg cursor-pointer"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
