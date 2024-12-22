import React from 'react';

function CataloguePage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6">Product Catalogue</h1>
      <p className="text-lg mb-8">Explore our complete lineup of electric scooters and accessories.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['E-Scooters', 'Batteries', 'Chargers', 'Accessories'].map((category) => (
          <div key={category} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <p className="mb-4">Browse our selection of high-quality {category.toLowerCase()}.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              View Products
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CataloguePage;

