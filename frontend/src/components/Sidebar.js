import React from 'react';

export default function Sidebar({ sections, onClick, activeId }) {
  return (
    <nav className="sticky top-24 hidden md:block w-64 px-6 py-8 bg-white rounded-lg shadow-xl h-[80vh] overflow-y-auto">
      <h3 className="mb-6 font-bold text-lg text-gray-800">Contents</h3>
      <ul className="space-y-3">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => onClick(id)}
              className={`w-full text-left cursor-pointer transition-colors duration-200
                ${activeId === id ? "text-green-700 font-bold underline underline-offset-4" : "text-gray-600 hover:text-green-600 hover:underline"}
              `}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}