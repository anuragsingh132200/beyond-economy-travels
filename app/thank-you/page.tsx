import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto flex items-center justify-center h-24 w-24 text-green-500">
          <CheckCircleIcon className="h-full w-full" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Thank You!
        </h2>
        <p className="mt-2 text-gray-600">
          Your consultation request has been received. We'll contact you shortly to confirm your booking.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
