'use client';

import { motion } from 'framer-motion';

const services = [
	{
		title: 'Clinical Trial Management',
		description:
			'Comprehensive management of Phase I-IV clinical trials with expertise in:',
		features: [
			'Site Selection & Management',
			'Project Management',
			'Clinical Monitoring',
			'Patient Recruitment & Retention',
			'Quality Assurance',
			'Regulatory Support',
			'Data Management',
		],
	},
	{
		title: 'Regulatory Affairs',
		description: 'Expert guidance and support in regulatory compliance:',
		features: [
			'DCGI Clearances',
			'Ethics Committee Approvals',
			'Import/Export Licenses',
			'Regulatory Submissions',
			'Pre/Post-Regulatory Inspection Support',
			'Third Party Review Unit (TPR Unit)',
			'510(k) Submission Consulting',
		],
	},
	{
		title: 'Site Management',
		description: 'Comprehensive site management services including:',
		features: [
			'Pre-study Site Preparation',
			'Site Initiation and Training',
			'Site Monitoring',
			'Study Close-out Support',
			'Quality Documentation',
			'Ethics Committee Services',
			'Clinical Trial Staff Support',
		],
	},
];

const achievements = [
	{
		number: '115+',
		label: 'Clinical Trials as SMO',
	},
	{
		number: '50+',
		label: 'Exclusive Sites',
	},
	{
		number: '25+',
		label: 'Years Experience',
	},
	{
		number: '14+',
		label: 'Full-service CRO Trials',
	},
];

export default function ServicesPage() {
	return (
		<div className="bg-white pt-24">
			{/* Hero Section */}
			<div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
				<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Our Services
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Comprehensive clinical research services tailored to meet your
								needs with the highest standards of quality and compliance.
							</p>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Services Grid */}
			<div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
						>
							<h3 className="text-xl font-semibold text-gray-900">
								{service.title}
							</h3>
							<p className="mt-4 text-sm text-gray-600">
								{service.description}
							</p>
							<ul className="mt-6 space-y-3">
								{service.features.map((feature) => (
									<li
										key={feature}
										className="text-sm text-gray-600 flex items-start"
									>
										<svg
											className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{feature}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>

			{/* Stats Section */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Trusted by Leading Organizations
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								Our track record speaks for itself
							</p>
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
							{achievements.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="flex flex-col bg-white p-8"
								>
									<dt className="text-sm font-semibold leading-6 text-gray-600">
										{stat.label}
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
										{stat.number}
									</dd>
								</motion.div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
