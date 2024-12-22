import React from 'react';

function CareerPage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6">Career Opportunities</h1>
      <p className="text-lg mb-8">Join our team and help shape the future of electric mobility.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Software Engineer', 'Product Designer', 'Marketing Specialist', 'Customer Support'].map((position) => (
          <div key={position} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{position}</h2>
            <p className="mb-4">We're looking for talented individuals to join our {position} team.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CareerPage;

