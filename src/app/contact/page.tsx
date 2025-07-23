import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: '#12529c'}}>
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with our expert team to discuss your clinical research needs and explore partnership opportunities
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12" style={{backgroundColor: '#12529c'}}>
              <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-medium text-white">Contact Information</h3>
                <p className="mt-6 max-w-3xl text-base text-white opacity-90">
                  Get in touch with us for any inquiries about our clinical research services or to discuss potential collaborations.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Address</span>
                  </dt>
                  <dd className="flex text-base text-white opacity-90">
                    <MapPinIcon className="h-6 w-6 flex-shrink-0 text-white opacity-80" aria-hidden="true" />
                    <span className="ml-3">
                      #261, 15th Main, Sadashiva Nagar,<br />
                      RMV Extension,<br />
                      Bangalore, Karnataka 560080
                    </span>
                  </dd>
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-white opacity-90">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-white opacity-80" aria-hidden="true" />
                    <span className="ml-3">+91 80 41228333<br/>+91 80 41228222</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-white opacity-90">
                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-white opacity-80" aria-hidden="true" />
                    <span className="ml-3">info@smo-india.com</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Website</span>
                  </dt>
                  <dd className="flex text-base text-white opacity-90">
                    <GlobeAltIcon className="h-6 w-6 flex-shrink-0 text-white opacity-80" aria-hidden="true" />
                    <span className="ml-3">www.smo-india.com</span>
                  </dd>
                  <dt>
                    <span className="sr-only">LinkedIn</span>
                  </dt>
                  <dd className="flex text-base text-white opacity-90">
                    <svg className="h-6 w-6 flex-shrink-0 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="ml-3">
                      <a href="https://www.linkedin.com/company/smo-clinical-research-india-private-limited/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        linkedin.com/company/smo-clinical-research-india-private-limited/
                      </a>
                    </span>
                  </dd>
                </dl>
              </div>
            </div>

            {/* Additional Information */}
            <div className="py-10 px-6 sm:px-10 xl:p-12">
              <h3 className="text-lg font-medium" style={{color: '#f04b22'}}>Get in Touch</h3>
              <div className="mt-6">
                <p className="text-base text-gray-600 mb-6">
                  We welcome the opportunity to discuss your clinical research needs. Our team of experts is ready to assist you with comprehensive solutions tailored to your specific requirements.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium" style={{color: '#79b647'}}>Areas of Expertise</h4>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>• Clinical Trial Management (Phase I-IV)</li>
                      <li>• Site Management Organization (SMO)</li>
                      <li>• Regulatory Affairs & Compliance</li>
                      <li>• Patient Recruitment & Retention</li>
                      <li>• Data Management & Biostatistics</li>
                      <li>• Pharmacovigilance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium" style={{color: '#fecb09'}}>Response Time</h4>
                    <p className="mt-2 text-sm text-gray-600">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
