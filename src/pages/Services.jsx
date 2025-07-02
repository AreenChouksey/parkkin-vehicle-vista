
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Smart Parking</h3>
            <p className="text-gray-600">AI-powered parking slot allocation with real-time availability tracking.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Security</h3>
            <p className="text-gray-600">Comprehensive surveillance and security monitoring for your vehicles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mobile App</h3>
            <p className="text-gray-600">Easy booking and payment through our user-friendly mobile application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
