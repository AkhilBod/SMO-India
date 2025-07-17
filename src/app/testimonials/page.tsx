'use client';

import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
	{
		content:
			'We appreciate the professionalism and dedication demonstrated by the team throughout the study. Your consistent efforts, timely coordination, and quality of work have contributed greatly to the smooth conduct of the trial. It was a pleasure working with such a committed team.',
		author: 'Dr. Farid Benabdallah',
		role: 'Medical Affairs Director',
		company: 'Septodont, France',
	},
	{
		content:
			'I would like to extend my sincere appreciation to the entire team at SMO-India for their exceptional support and coordination throughout our clinical trial project in India. The study was conducted from patient recruitment to data quality and site management. We felt confident and well-supported at every step, thanks to your team\'s dedication, efficiency, and collaboration.',
		author: 'Anette Vierning',
		role: 'Director, Clinical Operations',
		company: 'CCBR, Denmark',
	},
	{
		content:
			'We are satisfied with the results leading to the registration of our product. For sure, without the help of SMO-India, the desired results would postpone our success. We are glad to have such a reliable and trustworthy partner as SMO-India and wish to continue our cooperation.',
		author: 'Dr. Andrey Biryulin',
		role: 'Director of Clinical Research',
		company: 'CJSC BIOCAD, Russia',
	},
	{
		content:
			'I want to thank the SMO-India team for their professionalism, patience, goodwill, and calmness that they kept in all, even during high-pressure situations! It was a great pleasure to work with all of you!',
		author: 'Dr Roman Ivanov',
		role: 'Vice President of R&D',
		company: 'BIOCAD, Russia',
	},
	{
		content:
			'We would like to extend our heartfelt gratitude for the exceptional service and support provided for our project. We appreciate your coordination in reaching our goal on schedule, which has improved our collaboration even more. We look forward to continued collaboration.',
		author: 'Wanja Nyoro-Larsen',
		role: 'QA Manager',
		company: 'CCBR SYNARC, Denmark',
	},
	{
		content:
			'I wish to convey my sincere appreciation for the exceptional support and assistance provided during my 3-month stay in India. Your operational team expertise and dedication have proven invaluable throughout this period.',
		author: 'Jesper Prior Larsen',
		role: 'Clinical Project Manager',
		company: 'CCBR-SYNARC, Denmark',
	},
];

export default function TestimonialsPage() {
	return (
		<div className="bg-white pt-24">
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						What Our Clients Say
					</h2>
					<p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
						Don&apos;t just take our word for it. Here&apos;s what industry leaders
						have to say about working with SMO India.
					</p>
				</motion.div>

				<div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.author}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
							>
								<div>
									<div className="relative">
										<svg
											className="absolute -top-2 -left-3 h-8 w-8 text-gray-200"
											fill="currentColor"
											viewBox="0 0 32 32"
											aria-hidden="true"
										>
											<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
										</svg>
										<p className="relative text-base italic text-gray-600">
											{testimonial.content}
										</p>
									</div>
								</div>
								<div className="mt-8 border-t border-gray-200 pt-8">
									<div className="flex items-start">
										<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
											<span className="text-lg font-semibold leading-none text-white">
												{testimonial.author[0]}
											</span>
										</div>
										<div className="ml-4">
											<div className="text-base font-semibold text-gray-900">
												{testimonial.author}
											</div>
											<div className="text-sm text-gray-600">
												{testimonial.role}
											</div>
											<div className="text-sm text-gray-600">
												{testimonial.company}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
