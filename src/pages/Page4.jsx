import React from 'react';

const SimplePage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="bg-green-500 text-white text-center py-4 mb-6 rounded-lg">
        <h1 className="text-3xl font-bold">Welcome to the Simple Page!</h1>
      </header>
      <main className="text-center">
        <p className="text-lg mb-4">This is a simple page created using React and Tailwind CSS.</p>
        <button
          onClick={() => alert('Button clicked!')}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
        >
          Click Me
        </button>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-6 rounded-lg">
        <p>© 2024 Simple Page</p>
      </footer>
    </div>
  );
};

export default SimplePage;
