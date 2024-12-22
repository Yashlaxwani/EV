import React from 'react';

function EScootersPage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6">E-Scooters</h1>
      <p className="text-lg mb-8">Discover our range of cutting-edge electric scooters.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Model X', 'Model Y', 'Model Z'].map((model) => (
          <div key={model} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{model}</h2>
            <p className="mb-4">Experience the future of urban mobility with our {model} e-scooter.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default EScootersPage;

