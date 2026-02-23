'use client';

import { DocumentTextIcon } from '@heroicons/react/24/outline';
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
    logo: "/betic-logo.png"
  },
  {
    name: "HTIC – IIT Madras",
    description: "Healthcare Technology Innovation Centre",
    logo: "/image-1771735654528.png"
  }
];

export default function FDAThirdPartyReview() {
  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl text-black">
            FDA 510(k) Third Party Review
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SMO India Clinical Research Pvt. Ltd. is recognized as a Third Party Review Organization for eligible Class II medical devices under the FDA Third Party 510(k) Review Program.
          </p>
          <div className="mt-8">
            <a
              href="/SMO India Authorization Letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              View FDA Recognition Letter (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Who We Are</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                SMO India Clinical Research Pvt. Ltd. is formally recognized by the U.S. Food & Drug Administration (FDA), Center for Devices and Radiological Health (CDRH) as a Third Party Review Organization under the FDA&apos;s Third Party 510(k) Review Program.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                This recognition authorizes our Third Party Review Unit to conduct independent reviews of eligible Class I & II medical device 510(k) submissions, in accordance with FDA regulatory requirements.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Program Overview</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The FDA Third Party 510(k) Review Program allows FDA-accredited organizations to perform primary reviews of eligible Class II medical device submissions.
              </p>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                {keyPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16 text-black">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-black">FDA Third Party 510(k) Review Services</h3>
            <ul className="space-y-3 text-gray-600">
              {fdaServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 bg-blue-50 p-3 rounded">
              <strong>Note:</strong> Eligibility depends on FDA-defined product codes and scope.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-black">Additional Regulatory Services</h3>
            <p className="mb-4 text-gray-600">
              In addition to FDA Third Party reviews, SMO India provides regulatory readiness audits across multiple jurisdictions:
            </p>
            <ul className="space-y-3 text-gray-600">
              {nonFdaServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scope Limitations Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8 text-black">Scope Limitations</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Our Third Party Review Unit operates strictly as an independent regulatory evaluator. We do not:
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {prohibitedActivities.map((activity, index) => (
              <div key={index} className="rounded-lg bg-red-50 p-6 border border-red-200">
                <p className="text-gray-700 text-center">{activity}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            This independence is a core requirement of FDA recognition and is maintained across all Third Party engagements.
          </p>
        </div>
      </div>

      {/* Academic Partnerships Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8 text-black">Academic Partnerships</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our Third Party Review Unit actively engages with India&apos;s medical device innovation ecosystem to promote early regulatory clarity.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {collaborations.map((collab, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200 flex items-center">
              <Image
                src={collab.logo}
                alt={collab.name}
                width={80}
                height={80}
                className="object-contain mr-6"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{collab.name}</h3>
                <p className="text-sm text-gray-600">{collab.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 bg-yellow-50 p-4 rounded max-w-2xl mx-auto">
          <strong>Note:</strong> These engagements are educational and readiness-focused and do not involve submission, authorship or regulatory advocacy.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8 text-black">Contact Us</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            For inquiries related to FDA Third Party 510(k) eligibility, Third Party review engagements, or regulatory readiness audits:
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-black">Contact Details</h3>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:rakshithkatta@smo-india.com" className="text-blue-600 hover:text-blue-800">
                  rakshithkatta@smo-india.com
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{' '}
                <a href="https://www.smo-india.com" className="text-blue-600 hover:text-blue-800">
                  www.smo-india.com
                </a>
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-black">Inquiry Types</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• FDA Third Party 510(k) eligibility</li>
                <li>• Third Party review engagements</li>
                <li>• Regulatory readiness audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
