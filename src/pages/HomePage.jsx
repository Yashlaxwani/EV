import React from 'react';

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to Megnus Electrovision</h1>
      <p className="text-xl text-gray-600 mb-8">Your trusted partner in electric mobility</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Explore E-Scooters
      </button>
    </main>
  );
}

export default HomePage;

