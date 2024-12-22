import React from 'react';

function DealershipPage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6">Dealership Opportunities</h1>
      <p className="text-lg mb-8">Join the Megnus Electrovision family and be part of the electric revolution.</p>
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Partner with Us?</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg mb-2">Access to cutting-edge e-scooter technology</li>
          <li className="text-lg mb-2">Comprehensive training and support</li>
          <li className="text-lg mb-2">Attractive profit margins</li>
          <li className="text-lg mb-2">Marketing and branding assistance</li>
        </ul>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Apply for Dealership
        </button>
      </div>
    </main>
  );
}

export default DealershipPage;

