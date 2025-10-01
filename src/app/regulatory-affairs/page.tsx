import Link from 'next/link';

export default function RegulatoryAffairs() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: "#12529c"}}>
            Page Temporarily Unavailable
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This page is currently under maintenance. Please check back later.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              style={{backgroundColor: "#12529c"}}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
