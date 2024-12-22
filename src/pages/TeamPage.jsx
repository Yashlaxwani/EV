import React from 'react';

function TeamPage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <p className="text-lg mb-4">Meet the dedicated professionals behind Megnus Electrovision.</p>
      <ul className="list-disc list-inside">
        <li className="text-lg mb-2">John Doe - CEO</li>
        <li className="text-lg mb-2">Jane Smith - CTO</li>
        <li className="text-lg mb-2">Mike Johnson - Head of Design</li>
      </ul>
    </main>
  );
}

export default TeamPage;

