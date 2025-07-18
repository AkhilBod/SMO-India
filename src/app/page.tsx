import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Core Services Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Comprehensive clinical research solutions across diverse therapeutic areas
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="rounded-lg overflow-hidden w-full aspect-[16/9]">
                <Image
                  src="https://i.ibb.co/KxQxcXRc/image.png"
                  alt="Clinical Trial Management"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-blue-600 font-semibold">
                    Expert Service
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    Clinical Trial Management
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Comprehensive Phase I-IV clinical trial management with expert protocol development, site management, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-lg overflow-hidden w-full aspect-[16/9]">
                <Image
                  src="https://i.ibb.co/c5y4XGK/image.png"
                  alt="Regulatory Affairs"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-blue-600 font-semibold">
                    Specialized Expertise
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    Regulatory Affairs
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Expert regulatory support including DCGI submissions, ethics committee approvals, and comprehensive compliance management.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-lg overflow-hidden w-full aspect-[16/9]">
                <Image
                  src="https://i.ibb.co/ksZHzdZG/image.png"
                  alt="Patient Recruitment"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-blue-600 font-semibold">
                    Proven Success
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    Site Management & Patient Recruitment
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Strategic patient recruitment with proven track record of exceeding enrollment targets and comprehensive site management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose SMO India */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Why Choose SMO India
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Trusted Clinical Research Partner
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              CDSCO-registered CRO specializing in Phase I-IV clinical trials with 25+ years of experience and 50+ sites across India.
            </p>
          </div>

          {/* Key Highlights - More visual and concise */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">50+ Sites</h3>
              <p className="mt-2 text-sm text-gray-600">Exclusive and associated sites across India</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">115+ Trials</h3>
              <p className="mt-2 text-sm text-gray-600">Successfully completed as SMO</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">25+ Years</h3>
              <p className="mt-2 text-sm text-gray-600">Domain clinical trial experience</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">CDSCO Registered</h3>
              <p className="mt-2 text-sm text-gray-600">Full compliance with NDCT Rules 2019</p>
            </div>
          </div>

          {/* Quick Services Overview */}
          <div className="mt-20">
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-8">What We Do</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                "Clinical Trials",
                "Site Management", 
                "Patient Recruitment",
                "Regulatory Support",
                "Quality Assurance"
              ].map((service) => (
                <div key={service} className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-100">
                  <h4 className="font-medium text-gray-900 text-sm">{service}</h4>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                View all services
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to advance your clinical research?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how we can support your clinical trial requirements with our comprehensive services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
