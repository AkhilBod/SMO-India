'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      {/* Who We Are Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who We Are</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SMO Clinical Research (I) Pvt Ltd (SMO-India) was established in 2007 and is a privately held Contract Research Organization (CRO), headquartered in Bangalore, India's healthcare services and IT hub. We are registered under the Central Drug Standard Control Organization (CDSCO) and operate in full compliance with the New Drugs and Clinical Trials (NDCT) Rules, 2019.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Expertise</h2>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Vision</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To charter new frontiers of medical and pharmaceutical science and technology by excelling in providing true-blue professional services in the realm of Clinical research.
                </p>
              </motion.div>
            </div>
            <div className="mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To establish ourselves as India's trail-blazer Contract Research Organization by weaving a network of highly qualified and experienced clinical researchers and healthcare professionals with demonstrated expertise in conducting clinical trials and to maintain the highest standards of quality.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">Core Values</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Patient Safety",
              description: "We ensure research subjects are fully apprised of all risks & benefits arising from the study and strictly adhere to privacy and confidentiality principles."
            },
            {
              title: "Quality & Compliance",
              description: "We conduct research with total integrity and impartiality, following strict compliance principles and maintaining the highest quality standards."
            },
            {
              title: "Professional Excellence",
              description: "We ensure research is conducted only by competent and qualified persons who act with total integrity and impartiality."
            },
            {
              title: "Transparency",
              description: "We conduct research in a fair, honest, objective and transparent manner with full disclosures of all aspects."
            },
            {
              title: "Cost-Effectiveness",
              description: "We provide services in a most cost-effective manner without compromising on quality."
            },
            {
              title: "Research Ethics",
              description: "Care and caution are our watchwords at all stages of research to ensure subjects are not put to undue risk."
            }
          ].map((value) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-4 text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
