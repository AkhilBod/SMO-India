import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const keyPoints = [
  "FDA remains the final authority for all 510(k) clearance decisions",
  "Third Party reviewers operate under defined FDA-recognized scopes",
  "Reviews follow the same regulatory standards applied by FDA",
  "The role is evaluation-only, not advocacy"
];

const fdaServices = [
  "Independent Third Party 510(k) reviews for eligible Class II devices",
  "Technical and regulatory evaluation aligned with FDA review expectations",
  "Identification of deficiencies and clarification requests",
  "Structured review outputs suitable for FDA submission under the Third Party pathway"
];

const nonFdaServices = [
  "US FDA – 510(k) readiness audits",
  "CDSCO (India) – Regulatory submission readiness",
  "MHRA (UK) – UKCA readiness and regulatory gap assessments"
];

const prohibitedActivities = [
  "Author or prepare 510(k) submissions",
  "Act as regulatory advocates", 
  "Interact with FDA on behalf of sponsors",
  "Provide or imply guaranteed clearance outcomes"
];

const collaborations = [
  {
    name: "BETiC – IIT Bombay",
    description: "Biomedical Engineering & Technology Incubation Centre",
    logo: "/image-1771735640216.png"
  },
  {
    name: "HTIC – IIT Madras", 
    description: "Healthcare Technology Innovation Centre",
    logo: "/image-1771735654528.png"
  }
];

export default function FDAThirdPartyReview() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner - FDA Style */}
      <div className="bg-gray-50 border-b border-gray-200 pt-20">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-6 mb-6">
            <Image
              src="/image-1771735667532.png"
              alt="FDA Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <div>
              <div className="text-sm text-gray-600 mb-1">U.S. Food and Drug Administration</div>
              <h1 className="text-2xl font-bold text-gray-900">
                FDA-Recognized Third Party 510(k) Review Unit
              </h1>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-black font-medium">
              Independent review of eligible Class II medical devices under the U.S. FDA Third Party 510(k) Review Program
            </p>
            <p className="text-sm text-black mt-2">
              Recognition granted under Section 523 of the U.S. Federal Food, Drug, and Cosmetic Act
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {/* Recognition Letter */}
        <div className="mb-8">
          <a 
            href="/SMO India Authorization Letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
          >
            <DocumentTextIcon className="h-4 w-4 mr-2" />
            View FDA Recognition Letter (PDF)
          </a>
        </div>

        {/* Who We Are Section */}
        <section id="who-we-are" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-300 pb-2">
            Who We Are
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="mb-4 text-black">
              SMO India Clinical Research Pvt. Ltd. is formally recognized by the U.S. Food & Drug Administration (FDA), 
              Center for Devices and Radiological Health (CDRH) as a Third Party Review Organization under the FDA's 
              Third Party 510(k) Review Program.
            </p>
            <p className="text-black">
              This recognition authorizes our Third Party Review Unit to conduct independent reviews of eligible 
              Class I & II medical device 510(k) submissions, in accordance with FDA regulatory requirements.
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section id="program-overview" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-300 pb-2">
            What Is FDA Third Party 510(k) Review?
          </h2>
          <p className="mb-6 text-black">
            The FDA Third Party 510(k) Review Program allows FDA-accredited organizations to perform primary reviews 
            of eligible Class II medical device submissions.
          </p>
          
          <h3 className="text-lg font-semibold text-black mb-4">Key Program Elements:</h3>
          <ul className="space-y-3 mb-8">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-black">{point}</span>
              </li>
            ))}
          </ul>

          {/* Prohibited Activities */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-md">
            <h3 className="text-lg font-semibold text-black mb-4">Scope Limitations</h3>
            <p className="text-black mb-4">
              Our Third Party Review Unit operates strictly as an independent regulatory evaluator and does not:
            </p>
            <ul className="space-y-2">
              {prohibitedActivities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  <span className="text-black">{activity}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-black mt-4 pt-4 border-t border-red-200 font-medium">
              This independence is a core requirement of FDA recognition and is maintained across all Third Party engagements.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-300 pb-2">
            Services
          </h2>
          
          <h3 className="text-lg font-semibold text-black mb-4">FDA Third Party 510(k) Review Services</h3>
          <ul className="space-y-3 mb-8">
            {fdaServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-black">{service}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-8">
            <p className="text-black text-sm">
              <strong>Note:</strong> Eligibility depends on FDA-defined product codes and scope.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-black mb-4">Additional Regulatory Services</h3>
          <p className="text-black mb-4">
            In addition to FDA Third Party reviews, SMO India provides regulatory readiness audits across multiple jurisdictions. 
            These services are not part of the FDA Third Party program and are offered under our independent regulatory services.
          </p>
          <ul className="space-y-3">
            {nonFdaServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-black">{service}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Academic Partnerships */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-300 pb-2">
            Academic Partnerships
          </h2>
          <p className="text-black mb-6">
            Our Third Party Review Unit actively engages with India's medical device innovation ecosystem to promote 
            early regulatory clarity, including collaborations with leading academic institutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {collaborations.map((collab, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-md">
                <div className="flex items-center mb-3">
                  <Image
                    src={collab.logo}
                    alt={`${collab.name} Logo`}
                    width={50}
                    height={50}
                    className="object-contain mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-black">{collab.name}</h3>
                    <p className="text-sm text-black">{collab.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
            <p className="text-black text-sm">
              <strong>Note:</strong> These engagements are educational and readiness-focused and do not involve 
              submission, authorship or regulatory advocacy.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-300 pb-2">
            Contact Information
          </h2>
          <p className="text-black mb-6">
            For inquiries related to FDA Third Party 510(k) eligibility, Third Party review engagements, 
            or regulatory readiness audits (US FDA, CDSCO, MHRA):
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-black mb-2">Contact Details</h3>
                <p className="text-black mb-2">
                  <strong>Email:</strong> 
                  <a href="mailto:rakshithkatta@smo-india.com" className="text-blue-600 hover:text-blue-800 ml-1">
                    rakshithkatta@smo-india.com
                  </a>
                </p>
                <p className="text-black">
                  <strong>Website:</strong> 
                  <a href="https://www.smo-india.com" className="text-blue-600 hover:text-blue-800 ml-1">
                    www.smo-india.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Inquiry Types</h3>
                <ul className="text-sm text-black space-y-1">
                  <li>• FDA Third Party 510(k) eligibility</li>
                  <li>• Third Party review engagements</li>
                  <li>• Regulatory readiness audits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}