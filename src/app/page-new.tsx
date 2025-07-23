import Hero from "@/components/Hero";

const coreServices = [
  'Feasibility Studies',
  'Site Selection & Onsite Trial Management',
  'Project Management and Monitoring for Phase Clinical Trials',
  'Patient Recruitment & Retention Strategies',
  'Clinical Quality Assurance',
  'Regulatory Support',
  'Ethics Committee Services',
  'Clinical Trial Staff Support',
  'Data Management at Site',
  'Training & Education'
];

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
              SMO-India offers the below mentioned services to cater our client&apos;s clinical trial requirements
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {coreServices.map((service, index) => (
              <div
                key={service}
                className="flex flex-col rounded-lg bg-white p-6 shadow-sm border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 text-sm text-center">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              About SMO India
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CDSCO-Registered Contract Research Organization
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SMO Clinical Research (I) Pvt Ltd (SMO-India) was established in 2007 and is a privately held Contract Research Organization (CRO), headquartered in Bangalore, India&apos;s healthcare services and IT hub. We are registered under the Central Drug Standard Control Organization (CDSCO) and operate in full compliance with the New Drugs and Clinical Trials (NDCT) Rules, 2019.
            </p>
          </div>

          {/* Key Statistics */}
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
              <h3 className="mt-6 text-lg font-semibold text-gray-900">14+ Full-Service CRO Trials</h3>
              <p className="mt-2 text-sm text-gray-600">Successfully completed as full-service CRO</p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                To establish ourselves as India&apos;s trail-blazer Contract Research Organization by weaving a network of highly qualified and experienced clinical researchers and healthcare professionals with demonstrated expertise in conducting clinical trials and to maintain the highest standards of quality.
              </p>
            </div>
          </div>

          {/* Core Values Preview */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Patient Safety</h4>
                <p className="text-sm text-gray-600">We ensure research subjects are fully apprised of all risks & benefits and strictly adhere to privacy and confidentiality principles.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality & Compliance</h4>
                <p className="text-sm text-gray-600">We conduct research with total integrity and impartiality, following strict compliance principles and maintaining the highest quality standards.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                <p className="text-sm text-gray-600">We conduct research in a fair, honest, objective and transparent manner with full disclosures of all aspects.</p>
              </div>
            </div>
          </div>

          {/* Therapeutic Areas Preview */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">Major Therapeutic Areas</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-100">
                <h4 className="font-medium text-blue-600 text-sm">CARDIOVASCULAR</h4>
                <p className="text-xs text-gray-600 mt-1">37 studies</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-100">
                <h4 className="font-medium text-blue-600 text-sm">ENDOCRINOLOGY</h4>
                <p className="text-xs text-gray-600 mt-1">38 studies</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-100">
                <h4 className="font-medium text-blue-600 text-sm">GASTROENTEROLOGY</h4>
                <p className="text-xs text-gray-600 mt-1">11 studies</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border border-gray-100">
                <h4 className="font-medium text-blue-600 text-sm">NEPHROLOGY</h4>
                <p className="text-xs text-gray-600 mt-1">10 studies</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/therapeutic-areas"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                View all therapeutic areas
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Success Story */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Success Story</h3>
              <div className="max-w-3xl mx-auto">
                <h4 className="text-lg font-semibold text-blue-600 mb-3">ALVEOGYL Medical Device Study</h4>
                <p className="text-gray-600 mb-4">
                  Successfully completed clinical trial for Post-Extraction Dry Socket treatment across India and France.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">16</div>
                    <div className="text-sm text-gray-600">Total Locations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">90</div>
                    <div className="text-sm text-gray-600">Patients Enrolled</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">14</div>
                    <div className="text-sm text-gray-600">Sites in India</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2</div>
                    <div className="text-sm text-gray-600">Sites in France</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <a
                    href="/clinical-trials"
                    className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                  >
                    View more success stories
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
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
