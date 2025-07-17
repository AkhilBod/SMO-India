'use client';

import { motion } from 'framer-motion';

const competenceAreas = [
	{
		title: 'Phase I, II, and III Clinical Trials',
		description:
			'With your product showing promise, we support your development programs through full-service solutions. We provide detailed Feasibility Studies, Regulatory support, and Translations, enabling us to work together to create a healthier world.',
		features: [
			'Detailed feasibility studies',
			'Regulatory compliance',
			'Safety monitoring',
			'Efficacy demonstration',
			'Benefit-risk evaluation',
		],
	},
	{
		title: 'Phase IV / Post-Marketing',
		description:
			'Supporting your research objectives through monitoring safety, demonstrating effectiveness, and evaluating benefit-risk for market access.',
		features: [
			'Retrospective data collection',
			'Health outcomes/economics',
			'Effectiveness comparatives',
			'Safety outcomes',
			'Patient-reported outcomes',
			'Patient registry studies',
		],
	},
	{
		title: 'Rescue Studies',
		description:
			'We provide seamless assistance when problems arise during ongoing studies, working alongside other CROs using established processes.',
		features: [
			'Quick site initiation',
			'Enrollment target achievement',
			'Quality data collection',
			'Regulatory approval management',
			'Site agreements handling',
			'Logistics coordination',
		],
	},
	{
		title: 'Biosimilar Studies',
		description:
			'Comprehensive solutions for biosimilar drug development, with expertise in managing critical aspects of biosimilarity analysis.',
		features: [
			'Bio-similarity analysis',
			'Extrapolation studies',
			'Immunogenicity assessment',
			'Operational management',
			'Regulatory compliance',
		],
	},
	{
		title: 'Ayurvedic / Herbal Product Studies',
		description:
			'Experienced in conducting ayurvedic/herbal consumer products clinical trials with successful track record.',
		features: [
			'Subject recruitment',
			'Patient retention',
			'Timeline management',
			'Quality assurance',
			'Data collection',
		],
	},
	{
		title: 'Audit & Inspection Management',
		description:
			'Proven track record in successfully navigating regulatory inspections and sponsor audits across multiple clinical studies.',
		features: [
			'FDA inspection support',
			'EMEA inspection handling',
			'Sponsor & CRO audits',
			'Compliance maintenance',
			'Quality assurance',
		],
	},
];

export default function CompetencePage() {
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
						Our Competence Areas
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Leveraging our extensive experience and expertise across various
						clinical research domains
					</p>
				</motion.div>

				<div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
					{competenceAreas.map((area, index) => (
						<motion.div
							key={area.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200"
						>
							<div>
								<h3 className="text-xl font-semibold leading-7 text-gray-900">
									{area.title}
								</h3>
								<p className="mt-4 text-base leading-7 text-gray-600">
									{area.description}
								</p>
							</div>
							<ul className="grid grid-cols-1 gap-3">
								{area.features.map((feature) => (
									<li key={feature} className="flex items-start">
										<svg
											className="h-5 w-5 flex-shrink-0 text-blue-500"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="ml-3 text-sm text-gray-600">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
