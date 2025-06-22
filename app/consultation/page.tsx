'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConsultationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
      });
      
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        router.push('/thank-you');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book consultation');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Schedule Your Free Consultation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Let's plan your perfect travel experience together</p>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="/consultation"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book a Call
            </a>
            <a 
              href="/consultation"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Schedule Now
            </a>
            <a 
              href="#contact-us"
              className="px-6 py-3 bg-white text-gray-800 border-2 border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div id="book-consultation" className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Consultation</h2>
          <p className="text-gray-600 text-center mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {success ? (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-center">
            Consultation booked successfully! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                placeholder="Tell us more about your travel plans or any specific requirements..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Booking...' : 'Book Consultation'}
              </button>
            </div>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}
