export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} SMO India. All rights reserved.
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-10 md:mt-0">
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-600">Email: info@smo-india.com</p>
              <p className="text-sm text-gray-600">Phone: +91 XXX XXX XXXX</p>
              <p className="text-sm text-gray-600">Address: Industrial Area, City, India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
