'use client';

import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
	{
		title: 'ALVEOGYL Medical Device Study (2024)',
		description:
			'Successfully completed clinical trial for Post-Extraction Dry Socket treatment across India and France.',
		details: [
			'14 locations in India',
			'2 locations in France',
			'90 patients enrolled',
			'Comprehensive dossier preparation',
			'Regulatory submissions & approvals',
			'Timeline adherence',
		],
	},
	{
		title: "Oncology Study - Non-Hodgkin's Lymphoma",
		description:
			"Top recruiting country for Phase III clinical trial of CD20 positive Indolent non-Hodgkin's Lymphoma treatment.",
		details: [
			'40 patients enrolled',
			'12 clinical sites',
			'Full service management',
			'Regulatory approvals',
			'Project monitoring',
			'Drug depot management',
		],
	},
	{
		title: 'Type II Diabetes with Chronic Renal Insufficiency',
		description:
			'Successful rescue of struggling Phase III comparator study with enhanced recruitment strategy.',
		details: [
			'45 patients enrolled',
			'Exceeded target of 36',
			'Multiple site management',
			'Efficient recruitment',
			'Timeline recovery',
		],
	},
];

const clinicalExpertise = [
	{
		title: 'Project Management',
		points: [
			'Expert protocol development',
			'Comprehensive feasibility studies',
			'Timeline optimization',
			'Risk management',
			'Quality control',
		],
	},
	{
		title: 'Site Management',
		points: [
			'Site identification & selection',
			'Investigator meetings',
			'Staff training',
			'Documentation management',
			'Patient recruitment',
		],
	},
	{
		title: 'Regulatory Compliance',
		points: [
			'DCGI submissions',
			'Ethics committee approvals',
			'Safety reporting',
			'Regulatory inspections',
			'SOP development',
		],
	},
];

export default function ClinicalTrialsPage() {
	return (
		<div className="bg-white pt-24">
			{/* Hero Section */}
			<div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
				<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mx-auto max-w-2xl lg:mx-0"
					>
						<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Global Clinical Trials
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Delivering excellence in clinical research through comprehensive trial
							management and successful patient outcomes.
						</p>
					</motion.div>
				</div>
			</div>

			{/* Case Studies Section */}
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Success Stories
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Our track record of successful clinical trials across various therapeutic
						areas.
					</p>
				</div>

				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{caseStudies.map((study, index) => (
						<motion.div
							key={study.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
						>
							<h3 className="text-xl font-semibold text-gray-900">
								{study.title}
							</h3>
							<p className="mt-4 text-sm text-gray-600">
								{study.description}
							</p>
							<ul className="mt-8 space-y-3">
								{study.details.map((detail) => (
									<li key={detail} className="flex items-start">
										<svg
											className="h-5 w-5 flex-shrink-0 text-blue-500"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="ml-3 text-sm text-gray-600">
											{detail}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>

			{/* Expertise Section */}
			<div className="bg-gray-50 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Clinical Trial Expertise
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Comprehensive capabilities across all aspects of clinical trial
							management.
						</p>
					</div>

					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{clinicalExpertise.map((area, index) => (
							<motion.div
								key={area.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="rounded-2xl bg-white p-8 shadow-lg"
							>
								<h3 className="text-xl font-semibold text-gray-900">
									{area.title}
								</h3>
								<ul className="mt-8 space-y-3">
									{area.points.map((point) => (
										<li key={point} className="flex items-start">
											<svg
												className="h-5 w-5 flex-shrink-0 text-blue-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M5.5 7a4.5 4.5 0 019 0H16a1 1 0 010 2h-1.5a4.5 4.5 0 01-9 0H4a1 1 0 110-2h1.5z" />
											</svg>
											<span className="ml-3 text-sm text-gray-600">
												{point}
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
