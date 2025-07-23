'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative isolate bg-white pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{background: `linear-gradient(to bottom right, #12529c, #79b647)`}} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Welcome to <span style={{color: '#12529c'}}>SMO India</span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl lg:text-xl max-w-2xl mx-auto">
                SMO India Clinical Research Pvt Ltd is a CDSCO-registered, full-service Contract Research Organization (CRO) headquartered in Bangalore. We specialize in clinical trial operations, site management, and regulatory affairs across diverse therapeutic areas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="/contact"
                className="w-full sm:w-auto rounded-xl px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{backgroundColor: '#12529c', outlineColor: '#12529c'}}
              >
                Get Started Today
              </a>
              <a href="/about" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200" style={{"--hover-text": "#12529c", "--hover-border": "#12529c"} as any}>
                Learn more 
                <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{background: `linear-gradient(to bottom right, #f04b22, #fecb09)`}} />
      </div>
    </div>
  );
}
