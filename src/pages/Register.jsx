import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    grade: "",
    subject: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! This is just a preview — form not yet connected.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Register for a Program
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Grade</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="">Select grade</option>
              {/* <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option> */}
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="E.g. Mathematics, English"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your contact number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
          *This form is for demo purposes only
        </p>
      </div>
    </div>
  );
}
 export default Register;