import React from "react";

const Tips = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-800">
          Tips for <span className="text-indigo-600">New Bloggers</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {[
            {
              title: "1. Write Consistently",
              desc: "Post regularly to keep your readers engaged and improve SEO.",
            },
            {
              title: "2. Add Visuals",
              desc: "Use images, charts, and videos to make your blogs attractive.",
            },
            {
              title: "3. Engage With Readers",
              desc: "Reply to comments and create community engagement.",
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
