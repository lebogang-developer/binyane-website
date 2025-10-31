// src/pages/Programs.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Programs() {
  const samplePrograms = [
    { id: "math", title: "Mathematics", grades: "4 - 12", time: "Mon/Wed 15:30" },
    { id: "eng", title: "English", grades: "4 - 12", time: "Tue/Thu 15:30" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Programs</h1>
        <p className="text-center text-gray-700 mb-8">Choose a subject and register for a program.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {samplePrograms.map(p => (
            <div key={p.id} className="p-6 bg-white border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">Grades: {p.grades}</p>
              <p className="text-sm text-gray-600">When: {p.time}</p>
              <div className="mt-4">
                <Link to={`/register?program=${p.id}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
