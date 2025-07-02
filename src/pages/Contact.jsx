
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@parkkin.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">123 Parking Street<br />Smart City, SC 12345</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
