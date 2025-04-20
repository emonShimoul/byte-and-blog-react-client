import React from "react";

const Tips = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Tips for New Bloggers</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-semibold mb-2">1. Write Consistently</h3>
            <p>Post regularly to keep your readers engaged and improve SEO.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-semibold mb-2">2. Add Visuals</h3>
            <p>Use images, charts, and videos to make your blogs attractive.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-semibold mb-2">3. Engage With Readers</h3>
            <p>Reply to comments and create community engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
