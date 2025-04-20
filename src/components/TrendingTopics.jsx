import React from "react";

const TrendingTopics = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Trending Tech Topics</h2>
        <ul className="text-gray-700 text-lg flex flex-wrap gap-4 justify-center">
          <li className="bg-white px-4 py-2 rounded shadow">AI & ML</li>
          <li className="bg-white px-4 py-2 rounded shadow">React.js</li>
          <li className="bg-white px-4 py-2 rounded shadow">Next.js</li>
          <li className="bg-white px-4 py-2 rounded shadow">MongoDB</li>
          <li className="bg-white px-4 py-2 rounded shadow">Web 3.0</li>
        </ul>
      </div>
    </section>
  );
};

export default TrendingTopics;
