import { CheckIcon, UserGroupIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const teamMembers = [
  {
    name: "Rakshith Katta",
    title: "Director – Regulatory Affairs",
    experience: "12+ years",
    specialization: "Over 12 years of global regulatory experience, including 8+ years consulting directly with the FDA in Washington, DC. MBA from Johns Hopkins University and Master's degree in Regulatory Affairs for Drugs, Biologics, and Medical Devices from Northeastern University.",
    color: "#f04b22"
  },
  {
    name: "Dr. Suresh Anand",
    title: "Lead Reviewer",
    experience: "20+ years",
    specialization: "PhD from IIT Madras, specialized in biomedical optical spectroscopy and vascular dynamics. Over 20 years of expertise in medical device regulatory affairs, FDA 510(k) submissions, EU Technical Files, and global regulatory compliance.",
    color: "#79b647"
  },
  {
    name: "Nancy Pavan",
    title: "Lead Quality Assurance Consultant",
    experience: "15+ years",
    specialization: "Specializes in quality management systems aligned with FDA and ISO 13485 standards. Leads internal audits, manages CAPA processes, and coordinates SOP development and annex template creation.",
    color: "#fecb09"
  }
];

const services = [
  {
    title: "FDA 510(k) Third Party Review",
    description: "Expert 510(k) reviews for Class I and eligible Class II medical devices through our FDA 3P510k pathway alignment",
    color: "#f04b22"
  },
  {
    title: "Medical Device Regulatory Strategy",
    description: "Comprehensive regulatory strategy development for medical device manufacturers targeting U.S. market access",
    color: "#79b647"
  },
  {
    title: "Quality Management Systems",
    description: "Quality management systems aligned with FDA and ISO 13485 standards with rigorous compliance processes",
    color: "#fecb09"
  },
  {
    title: "Regulatory Compliance Reviews",
    description: "Independent and expert evaluations of medical device submissions with transparent review processes",
    color: "#f04b22"
  },
  {
    title: "Data Security & Confidentiality",
    description: "Advanced encryption technologies and secure digital platforms to protect sensitive client data",
    color: "#79b647"
  },
  {
    title: "Global Market Access",
    description: "Expertise in FDA processes with understanding of Indian and regional manufacturing landscapes",
    color: "#fecb09"
  }
];

const benefits = [
  {
    text: "Cost-Effective Services: India's competitive cost environment enables top-tier regulatory reviews at significantly reduced fees",
    color: "#f04b22"
  },
  {
    text: "Time Zone and Cultural Alignment: Timely communication and collaboration with Asia-Pacific manufacturers",
    color: "#79b647"
  },
  {
    text: "In-Depth Local Knowledge: Nuanced understanding of Indian and regional manufacturing landscapes",
    color: "#fecb09"
  },
  {
    text: "First-Mover Advantage: One of the earliest India-based FDA-accredited 3POs with unique market position",
    color: "#f04b22"
  },
  {
    text: "Scalable Expertise: Broad network of experts and consultants for efficient scaling without compromising quality",
    color: "#79b647"
  },
  {
    text: "Advanced Technology: Streamlined workflows with automation to enhance review accuracy and reduce turnaround times",
    color: "#fecb09"
  }
];

export default function RegulatoryAffairs() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: '#12529c'}}>
            Regulatory Affairs 3PO
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FDA Third Party Review Unit dedicated to supporting medical device manufacturers
          </p>
        </div>
      </div>



      {/* Services Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#12529c] sm:text-4xl">
              Our Regulatory Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive regulatory affairs services designed to navigate the complex FDA landscape 
              and accelerate your product development timeline.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4" style={{borderLeftColor: service.color}}>
                  <h3 className="text-lg font-semibold mb-3" style={{color: service.color}}>{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    {/* FDA 3PO Team Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#12529c] sm:text-4xl">
                Our FDA Third Party Review (3PO) Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our FDA Third Party Review (3PO) Team comprises highly experienced regulatory professionals dedicated to delivering thorough, independent, and expert evaluations of medical device 510(k) submissions. We combine deep regulatory knowledge, practical clinical research experience, and rigorous quality management to ensure a compliant, efficient, and transparent review process.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#12529c] sm:text-4xl">
              Advantages of Partnering with an Indian FDA 3PO Organization
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckIcon className="h-6 w-6 flex-shrink-0 mt-1" style={{color: benefit.color}} />
                  <p className="text-gray-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <UserGroupIcon className="h-12 w-12 mx-auto mb-4" style={{color: '#f04b22'}} />
            <h2 className="text-3xl font-bold tracking-tight text-[#12529c] sm:text-4xl">
              Our Expert Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Led by seasoned regulatory professionals with extensive FDA experience and deep understanding 
              of the Third Party Review Unit processes.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-t-4" style={{borderTopColor: member.color}}>
                  <h3 className="text-lg font-semibold mb-2" style={{color: member.color}}>{member.name}</h3>
                  <p className="text-[#12529c] font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 mb-3">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.specialization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-[#12529c] sm:text-4xl">
                Commitment to Data Safety and Process Efficiency
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-8 border-l-4" style={{borderLeftColor: '#79b647'}}>
                <h3 className="text-xl font-semibold mb-4" style={{color: '#79b647'}}>Data Security</h3>
                <p className="text-gray-600">
                  SMO India is committed to maintaining the highest levels of data security and confidentiality. We utilize advanced encryption technologies and secure digital platforms to protect sensitive client data and submission materials.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8 border-l-4" style={{borderLeftColor: '#fecb09'}}>
                <h3 className="text-xl font-semibold mb-4" style={{color: '#fecb09'}}>Process Efficiency</h3>
                <p className="text-gray-600">
                  Our streamlined workflows, supported by automation and technology, enhance review accuracy, reduce turnaround times, and ensure strict adherence to FDA regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#12529c] sm:text-4xl">
              Contact Our Regulatory Affairs Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to accelerate your regulatory pathway? Contact our team of experts to discuss 
              your specific needs and learn how our FDA 3PO partnership can benefit your project.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-[#12529c]">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-6 w-6" style={{color: '#f04b22'}} />
                      <span className="text-gray-600">Rakshithkatta@smo-india.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-6 w-6" style={{color: '#79b647'}} />
                      <span className="text-gray-600">+91 9148779836</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="h-6 w-6" style={{color: '#fecb09'}} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href="https://www.linkedin.com/in/rakshith-katta-8b204048" className="text-gray-600 hover:text-blue-600">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#12529c]">Important Note</h3>
                  <div className="bg-yellow-50 border-l-4 p-4 rounded" style={{borderLeftColor: '#fecb09'}}>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Note:</span> SMO India is in the process of seeking FDA Third Party Reviewer accreditation. No service is offered as accredited until FDA approval is granted.
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
