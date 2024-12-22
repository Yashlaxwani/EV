import React from 'react';

function ContactPage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">Get in touch with our team for any inquiries or support.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Email: info@megnuselectrovision.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p className="mb-2">Address: 123 Electric Avenue, Tech City, 12345</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;

