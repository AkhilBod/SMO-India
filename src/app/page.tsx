import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Core Services Section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Core Services
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Comprehensive clinical research solutions across diverse therapeutic areas with proven track record of success
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="group flex flex-col items-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="rounded-t-2xl overflow-hidden w-full aspect-[16/9] relative">
                <Image
                  src="https://i.ibb.co/KxQxcXRc/image.png"
                  alt="Clinical Trial Management"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-blue-700 font-semibold">
                    Expert Service
                  </span>
                </div>
                <div className="group-inner relative">
                  <h3 className="mt-6 text-xl font-bold leading-6 text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    Clinical Trial Management
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Comprehensive Phase I-IV clinical trial management with expert protocol development, site management, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="group flex flex-col items-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="rounded-t-2xl overflow-hidden w-full aspect-[16/9] relative">
                <Image
                  src="https://i.ibb.co/c5y4XGK/image.png"
                  alt="Regulatory Affairs"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-green-800 font-semibold">
                    Specialized Expertise
                  </span>
                </div>
                <div className="group-inner relative">
                  <h3 className="mt-6 text-xl font-bold leading-6 text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    Regulatory Affairs
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Expert regulatory support including DCGI submissions, ethics committee approvals, and comprehensive compliance management.
                  </p>
                </div>
              </div>
            </div>
            <div className="group flex flex-col items-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="rounded-t-2xl overflow-hidden w-full aspect-[16/9] relative">
                <Image
                  src="https://i.ibb.co/NdXHRYd2/image.png"
                  alt="Patient Recruitment"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full px-3 py-1 font-semibold text-white" style={{backgroundColor: '#f04b22'}}>
                    Proven Success
                  </span>
                </div>
                <div className="group-inner relative">
                  <h3 className="mt-6 text-xl font-bold leading-6 text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    Site Management & Patient Recruitment
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Strategic patient recruitment with proven track record of exceeding enrollment targets and comprehensive site management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose SMO India */}
      <div className="bg-white py-32 sm:py-40 lg:py-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight" style={{color: '#12529c'}}>
              Your Trusted Clinical Research Partner
            </h2>
            <p className="mt-12 text-2xl leading-9 text-gray-600 max-w-4xl mx-auto lg:text-2xl">
              CDSCO-registered CRO specializing in Phase I-IV clinical trials with 25+ years of experience and 50+ sites across India.
            </p>
          </div>

          {/* Key Highlights - More visual and concise */}
          <div className="mt-28 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" style={{backgroundColor: '#12529c'}}>
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold" style={{color: '#12529c'}}>50+</h3>
              <p className="mt-2 text-base text-gray-700">Sites</p>
              <p className="mt-1 text-sm text-gray-500">Exclusive and associated sites across India</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" style={{backgroundColor: '#79b647'}}>
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold" style={{color: '#12529c'}}>115+</h3>
              <p className="mt-2 text-base text-gray-700">Trials</p>
              <p className="mt-1 text-sm text-gray-500">Successfully completed as SMO</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" style={{backgroundColor: '#f04b22'}}>
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold" style={{color: '#12529c'}}>25+</h3>
              <p className="mt-2 text-base text-gray-700">Years</p>
              <p className="mt-1 text-sm text-gray-500">Domain clinical trial experience</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" style={{backgroundColor: '#fecb09'}}>
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold" style={{color: '#12529c'}}>CDSCO</h3>
              <p className="mt-2 text-base text-gray-700">Registered</p>
              <p className="mt-1 text-sm text-gray-500">Full compliance with NDCT Rules 2019</p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mt-24">
            <div className="text-center mb-12 bg-gray-50 rounded-3xl p-12 border border-gray-200">
              <h3 className="text-3xl font-bold mb-6" style={{color: '#12529c'}}>Our Mission</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To establish ourselves as India&apos;s trail-blazer Contract Research Organization by weaving a network of highly qualified and experienced clinical researchers and healthcare professionals with demonstrated expertise in conducting clinical trials.
              </p>
            </div>
          </div>

          {/* Core Values Preview */}
          <div className="mt-24">
            <h3 className="text-center text-3xl font-bold mb-16" style={{color: '#12529c'}}>Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-6 shadow-lg" style={{backgroundColor: '#f04b22'}}>
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl mb-4" style={{color: '#12529c'}}>Patient Safety</h4>
                <p className="text-base text-gray-600 leading-relaxed">We ensure research subjects are fully apprised of all risks & benefits and strictly adhere to privacy and confidentiality principles.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-6 shadow-lg" style={{backgroundColor: '#79b647'}}>
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl mb-4" style={{color: '#12529c'}}>Quality & Compliance</h4>
                <p className="text-base text-gray-600 leading-relaxed">We conduct research with total integrity and impartiality, following strict compliance principles and maintaining the highest quality standards.</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-6 shadow-lg" style={{backgroundColor: '#12529c'}}>
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl mb-4" style={{color: '#12529c'}}>Transparency</h4>
                <p className="text-base text-gray-600 leading-relaxed">We conduct research in a fair, honest, objective and transparent manner with full disclosures of all aspects.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Therapeutic Areas Preview */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{color: '#12529c'}}>Major Therapeutic Areas</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive experience across diverse medical specialties with proven success rates
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100" style={{"--hover-border": "#f04b22"} as any}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#f04b22'}}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2" style={{color: '#12529c'}}>CARDIOVASCULAR</h4>
              <p className="text-2xl font-bold mb-1" style={{color: '#12529c'}}>37</p>
              <p className="text-sm text-gray-600">studies completed</p>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#79b647'}}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2" style={{color: '#12529c'}}>ENDOCRINOLOGY</h4>
              <p className="text-2xl font-bold mb-1" style={{color: '#12529c'}}>38</p>
              <p className="text-sm text-gray-600">studies completed</p>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#fecb09'}}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2" style={{color: '#12529c'}}>GASTROENTEROLOGY</h4>
              <p className="text-2xl font-bold mb-1" style={{color: '#12529c'}}>11</p>
              <p className="text-sm text-gray-600">studies completed</p>
            </div>
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#12529c'}}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2" style={{color: '#12529c'}}>NEPHROLOGY</h4>
              <p className="text-2xl font-bold mb-1" style={{color: '#12529c'}}>10</p>
              <p className="text-sm text-gray-600">studies completed</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/therapeutic-areas"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#12529c'}}
            >
              View all therapeutic areas
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#12529c'}}>
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(18, 82, 156, 0.95)'}}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to advance your clinical research?
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-8" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Contact us today to discuss how we can support your clinical trial requirements with our comprehensive services.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{color: '#12529c'}}
              >
                <span className="relative z-10">Get in touch</span>
                <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
