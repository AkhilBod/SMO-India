const coreServices = [
	'Feasibility Studies',
	'Site Selection & Onsite Trial Management',
	'Project Management and Monitoring for Phase Clinical Trials',
	'Patient Recruitment & Retention Strategies',
	'Clinical Quality Assurance',
	'Regulatory Support',
	'Ethics Committee Services',
	'Clinical Trial Staff Support',
	'Data Management at Site',
	'Training & Education'
];

const keyStrengths = [
	'Network of experienced physicians and coordinators across India, which is continuously expanding',
	'Excellence in Onsite Coordination and Monitoring of Phase I, II, III, and IV clinical trials',
	'Leadership and management expertise necessary to produce consistent and statistically sound data for every study conducted',
	'Multiple Therapeutic Segments coverage',
	'Streamlined and expeditious start-up and completion of studies on schedule',
	'Large and diverse patient population with a positive attitude towards clinical research',
	'Dedicated full time certified Clinical Research Coordinators experienced in working with Pharmaceutical companies and Contract Research Organizations',
	'Quality source documentation, case report forms and other paperwork',
	'Sites that are top enrollers nationwide on multiple studies by virtue of their inherent merits',
	'Centralized organizational Structure offers Sponsor and CRO clients immediate access to several pre-qualified investigators in all therapeutic segments'
];

const achievements = [
	{
		number: '115+',
		label: 'Clinical Trials as SMO',
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
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: '#12529c'}}>
						 Clinical Research Services
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Delivering excellence across all spheres of clinical trial processes with customized solutions for our clients
					</p>
				</div>
			</div>

			{/* Mission Statement */}

			{/* Core Services */}
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{color: '#79b647'}}>
							Our Core Services
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							SMO-India offers the below mentioned services to cater our client&apos;s clinical trial requirements
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5">
						{coreServices.map((service) => (
							<div
								key={service}
								className="flex flex-col rounded-lg bg-white p-6 shadow-sm"
							>
								<h3 className="font-semibold text-gray-900 text-sm text-center">
									{service}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Key Strengths */}
			<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{color: '#fecb09'}}>
						Our Key Strengths
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">
						What sets us apart in clinical research excellence
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
					{keyStrengths.map((strength, index) => (
						<div
							key={index}
							className="flex items-start"
						>
							<svg
								className="h-6 w-6 flex-shrink-0 mt-1"
								style={{color: index % 3 === 0 ? '#f04b22' : index % 3 === 1 ? '#79b647' : '#fecb09'}}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p className="ml-4 text-gray-600 leading-relaxed">{strength}</p>
						</div>
					))}
				</div>
			</div>

			{/* Database & Partnership */}
			<div style={{backgroundColor: 'rgba(18, 82, 156, 0.05)'}} className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<div
							className="rounded-2xl bg-white p-8 shadow-lg"
						>
							<h3 className="text-2xl font-bold mb-6" style={{color: '#f04b22'}}>
								Advanced Clinical Trial Database
							</h3>
							<p className="text-gray-600 leading-relaxed mb-6">
								To improve current standards as well as the overall standards of Clinical Research, we are constantly developing a clinical trial database at the site level as well as central level at headquarters. This serves as a quick, efficient and effective tool to deliver accurate, precise feasibility analysis.
							</p>
							<p className="text-gray-600 leading-relaxed">
								Thus SMO-India is becoming reliable partner for Sponsor/CRO in conducting multicentric clinical trials. This also helps to efficiently organize the total clinical trial process, both centrally (HQ) and locally (Site). Our organizational structure offers Sponsor and other clients immediate access to several pre-qualified investigators in all therapeutic segments.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div style={{backgroundColor: '#12529c'}} className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Proven Track Record
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-300">
								Our achievements in clinical research excellence
							</p>
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
							{achievements.map((stat) => (
								<div
									key={stat.label}
									className="flex flex-col bg-white/5 p-8"
								>
									<dt className="text-sm font-semibold leading-6 text-gray-300">
										{stat.label}
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight" style={{color: '#fecb09'}}>
										{stat.number}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
