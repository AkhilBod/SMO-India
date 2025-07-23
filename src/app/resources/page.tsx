import { BuildingOfficeIcon, GlobeAsiaAustraliaIcon, BeakerIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const partners = [
	{
		name: 'Arrowhead Community Surgical Medical Group Inc.',
		location: 'California, USA',
		description:
			'Strategic partnership for clinical research initiatives in the United States.',
	},
	{
		name: 'CCBR Synarc',
		location: 'Denmark',
		description:
			'Collaboration for conducting Multi-national and Multicentric clinical trials, bringing knowledge of best practices and processes of conducting Global clinical trials.',
	},
	{
		name: 'CJSC BIOCAD',
		location: 'Russia',
		description: 
			'Partnership with leading Biopharmaceutical company for conducting Multinational, Multicentric Clinical Trials in India.',
	},
	{
		name: 'Septodont',
		location: 'France',
		description:
			'Collaboration with leading Dental Pharmaceutical Company for clinical research and development.',
	},
];

const features = [
	{
		name: 'Global Network',
		description:
			'Network of experienced investigators and trial-ready sites across India, continuously expanding.',
		icon: GlobeAsiaAustraliaIcon,
	},
	{
		name: 'Quality Standards',
		description: 'Clinical trials conducted in accordance with ICH-GCP and FDA standards.',
		icon: BeakerIcon,
	},
	{
		name: 'Research Excellence',
		description:
			'High performance delivery with lofty ethical standards and quality data.',
		icon: BuildingOfficeIcon,
	},
	{
		name: 'Expert Team',
		description:
			'Dedicated professionals with extensive experience in clinical research.',
		icon: UserGroupIcon,
	},
];

export default function ResourcesPage() {
	return (
		<div className="bg-white pt-24">
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: '#12529c'}}>
						Resources & Alliances
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Leveraging global partnerships and comprehensive infrastructure to deliver excellence in clinical research
					</p>
				</div>
			</div>

			{/* Features Section */}
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{color: '#12529c'}}>
						Our Capabilities
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Comprehensive infrastructure and expertise to support global clinical
						trials.
					</p>
				</div>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="flex flex-col"
							>
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">{feature.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>

			{/* Partners Section */}
			<div className="bg-gray-50 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight" style={{color: '#12529c'}}>
							Our Strategic Partners
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Collaborating with global leaders to advance clinical research.
						</p>
					</div>

					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						{partners.map((partner, index) => (
							<div
								key={partner.name}
								className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
							>
								<h3 className="text-xl font-semibold" style={{color: '#12529c'}}>
									{partner.name}
								</h3>
								<p className="mt-2 text-sm" style={{color: '#79b647'}}>
									{partner.location}
								</p>
								<p className="mt-4 text-base text-gray-600">
									{partner.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="relative isolate overflow-hidden">
				<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Ready to Start Your Clinical Trial?
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Contact us to discuss how our resources and partnerships can
								support your research objectives.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="/contact"
									className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>
									Contact Us
								</a>
								<a
									href="/services"
									className="text-sm font-semibold leading-6 text-gray-900"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
