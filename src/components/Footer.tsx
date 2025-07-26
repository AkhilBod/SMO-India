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
              <p className="text-sm text-gray-600">Phone: +91 80 41228333</p>
              <p className="text-sm text-gray-600">Phone: +91 80 41228222</p>
              <p className="text-sm text-gray-600">Address: Bangalore, Karnataka, India</p>
              <p className="text-sm text-gray-600">Website: www.smo-india.com</p>
              <a href="https://www.linkedin.com/company/smo-clinical-research-india-private-limited/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
                LinkedIn: SMO Clinical Research India
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
