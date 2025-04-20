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
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded flex-1"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
