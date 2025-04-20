import React from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    if (!email) {
      toast.warn("Please enter your email.");
      return;
    }

    // Simulate subscription success
    toast.success("Thank you for subscribing to our newsletter!");
    console.log(email);

    e.target.reset();
  };

  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-100 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Stay in the Loop
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Subscribe to our newsletter and never miss the latest tech trends, dev
          tips, and exclusive content.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
