'use client';

import { motion } from 'framer-motion';

const therapeuticAreas = [
	{
		name: 'CARDIOVASCULAR',
		count: 37,
		studies: [
			'Acute Coronary Syndrome (ACS) in Type 2 Diabetes Mellitus',
			'Atrial fibrillation',
			'Hypertension',
			'Coronary Artery Disease',
			'Myocardial Infarction',
			'Cardiovascular Events/Risks',
			'Stroke',
			'Mixed hyperlipidemia',
			'Pericardial And Porcine Tissue Valves',
			'Coronary Artery Bypass Surgery',
			'Arterial Revascularization Trial',
			'PCSI Congenital and Structural Study',
			'Shockwave Coronary Intravascular Lithotripsy',
		],
	},
	{
		name: 'ENDOCRINOLOGY',
		count: 38,
		studies: [
			'Type 2 Diabetes Mellitus',
			'Glycemic Control Studies',
			'Insulin Management',
			'Metabolic Disorders',
		],
	},
	{
		name: 'GASTROENTEROLOGY',
		count: 11,
		studies: [
			'Gastrointestinal Disorders',
			'Digestive System Studies',
			'Liver Function Studies',
		],
	},
	{
		name: 'NEPHROLOGY',
		count: 10,
		studies: [
			'Chronic Kidney Disease',
			'Renal Insufficiency',
			'Dialysis Studies',
		],
	},
	{
		name: 'MEDICAL DEVICE',
		count: 6,
		studies: [
			'Medical Device Clinical Trials',
			'Device Safety Studies',
			'Performance Evaluation',
		],
	},
	{
		name: 'ONCOLOGY',
		count: 4,
		studies: [
			'Cancer Treatment Studies',
			"Non-Hodgkin's Lymphoma",
			'Tumor Response Studies',
		],
	},
];

export default function TherapeuticAreasPage() {
	return (
		<div className="bg-white pt-24">
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Therapeutic Areas
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Comprehensive expertise across multiple therapeutic domains with
							proven success in clinical trials
						</p>
					</motion.div>
				</div>

				<div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{therapeuticAreas.map((area, index) => (
						<motion.div
							key={area.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
						>
							<div className="absolute -top-4 left-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
								{area.count} Studies
							</div>

							<h3 className="text-xl font-semibold text-gray-900 mt-2">
								{area.name}
							</h3>

							<ul className="mt-6 space-y-3">
								{area.studies.map((study) => (
									<li key={study} className="text-sm text-gray-600">
										• {study}
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
