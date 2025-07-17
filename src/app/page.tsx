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
                  src="https://i.ibb.co/pvmMP5xN/industrial-factory-worker-working-in-metal-manufac-2022-02-25-02-35-11-utc.jpg"
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
                    Comprehensive Phase I-IV clinical trial management with expert protocol development, site management, and regulatory compliance across multiple therapeutic areas.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-lg overflow-hidden w-full aspect-[16/9]">
                <Image
                  src="https://i.ibb.co/B2C2b9KJ/istockphoto-1263846625-612x612.jpg"
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
                    Expert regulatory support including DCGI submissions, ethics committee approvals, safety reporting, and comprehensive regulatory compliance management.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-lg overflow-hidden w-full aspect-[16/9]">
                <Image
                  src="https://i.ibb.co/zHW14m19/women-2-696x392.jpg"
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
                    Patient Recruitment & Site Management
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Strategic patient recruitment services with proven track record of exceeding enrollment targets and comprehensive site management across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Every Service
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With years of experience and dedication to quality, we provide the
              best industrial solutions in the market.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Quality Assurance",
                  description:
                    "We maintain the highest standards of quality in all our products and services.",
                },
                {
                  name: "Expert Support",
                  description:
                    "Our team of experienced professionals is always ready to assist you.",
                },
                {
                  name: "Nationwide Service",
                  description:
                    "We provide our services across India with quick response times.",
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your industrial processes?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss how we can help improve your operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch
              </a>
              <a
                href="/products"
                className="text-sm font-semibold leading-6 text-white"
              >
                View our products <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
