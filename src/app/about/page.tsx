'use client';

export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: '#12529c'}}>
            About SMO India
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pioneering clinical research excellence since 2007 with comprehensive CRO services and regulatory compliance
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{color: '#f04b22'}}>Who We Are</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SMO Clinical Research (I) Pvt Ltd (SMO-India) was established in 2007 and is a privately held Contract Research Organization (CRO), headquartered in Bangalore, India&apos;s healthcare services and IT hub. We are registered under the Central Drug Standard Control Organization (CDSCO) and operate in full compliance with the New Drugs and Clinical Trials (NDCT) Rules, 2019.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{color: '#79b647'}}>Our Expertise</h2>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
              <li>• Successfully completed 14+ Clinical trials as a full-service CRO</li>
              <li>• 115+ Clinical trials as Site Management Organization (SMO)</li>
              <li>• 50+ exclusive and associated sites across India</li>
              <li>• End-to-end Multinational and Multi-centric FDA-approved studies</li>
              <li>• 25+ years of domain clinical trial experience</li>
              <li>• Managing over 70 trials in various therapeutic areas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
            <div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight" style={{color: '#fecb09'}}>Our Vision</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To charter new frontiers of medical and pharmaceutical science and technology by excelling in providing true-blue professional services in the realm of Clinical research.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div>
                <h2 className="text-3xl font-bold tracking-tight" style={{color: '#f04b22'}}>Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To establish ourselves as India&apos;s trail-blazer Contract Research Organization by weaving a network of highly qualified and experienced clinical researchers and healthcare professionals with demonstrated expertise in conducting clinical trials and to maintain the highest standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16" style={{color: '#12529c'}}>Core Values</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Patient Safety",
              description: "We ensure research subjects are fully apprised of all risks & benefits arising from the study and strictly adhere to privacy and confidentiality principles.",
              color: "#f04b22"
            },
            {
              title: "Quality & Compliance",
              description: "We conduct research with total integrity and impartiality, following strict compliance principles and maintaining the highest quality standards.",
              color: "#79b647"
            },
            {
              title: "Professional Excellence",
              description: "We ensure research is conducted only by competent and qualified persons who act with total integrity and impartiality.",
              color: "#fecb09"
            },
            {
              title: "Transparency",
              description: "We conduct research in a fair, honest, objective and transparent manner with full disclosures of all aspects.",
              color: "#f04b22"
            },
            {
              title: "Cost-Effectiveness",
              description: "We provide services in a most cost-effective manner without compromising on quality.",
              color: "#79b647"
            },
            {
              title: "Research Ethics",
              description: "Care and caution are our watchwords at all stages of research to ensure subjects are not put to undue risk.",
              color: "#fecb09"
            }
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <h3 className="text-lg font-semibold" style={{color: value.color}}>{value.title}</h3>
              <p className="mt-4 text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
