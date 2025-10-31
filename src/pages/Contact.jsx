import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent (preview only — not connected to backend).");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Have questions or want to learn more about our tutoring programs?  
          Send us a message or use the contact details below.
        </p>

        {/* Layout: form + contact info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Our Contact Details</h3>
              <p className="text-gray-700">📍 Thaba Nchu, Free State, South Africa</p>
              <p className="text-gray-700">📞 +27 71 234 5678</p>
              <p className="text-gray-700">✉️ info@binyane.co.za</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Operating Hours</h4>
              <p className="text-gray-700">Mon – Fri: 08:00 – 17:00</p>
              <p className="text-gray-700">Sat: 09:00 – 13:00</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Follow Us On Our Socials</h4>
              <div className="flex gap-3">
                <a href="#" className="text-blue-600 hover:underline">
                  Facebook
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;