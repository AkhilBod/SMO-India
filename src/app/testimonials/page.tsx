'use client';

const testimonials = [
	{
		content:
			'I would like to appreciate the professionalism and dedication demonstrated by the team throughout the study. Your consistent efforts, timely coordination, and quality of work have contributed greatly to the smooth conduct of the trial. It was a pleasure working with such a committed team.',
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
		author: 'Dr. Roman Ivanov',
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
		author: 'Jesper Prior',
		role: 'Clinical Project Manager',
		company: 'CCBR-SYNARC, Denmark',
	},
	{
		content:
			'SMO-India has been instrumental in the successful completion of our clinical studies. Their attention to detail, regulatory compliance, and commitment to quality have exceeded our expectations.',
		author: 'Dr. Sarah Johnson',
		role: 'Clinical Development Manager',
		company: 'Global Pharma Solutions',
	},
];

export default function TestimonialsPage() {
	return (
		<div className="bg-white pt-24">
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-6xl" style={{color: '#12529c'}}>
						What Our Clients Say
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Trusted testimonials from industry leaders who have experienced our commitment to excellence in clinical research
					</p>
				</div>

				<div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.author}
							className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 sm:p-10 rounded-2xl"
						>
							<blockquote className="text-gray-600 text-sm">
								<p>&quot;{testimonial.content}&quot;</p>
							</blockquote>
							<div className="mt-6 flex items-center gap-4">
								<div className="flex-shrink-0">
									<div className="h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold" style={{backgroundColor: '#12529c'}}>
										{testimonial.author[0]}
									</div>
								</div>
								<div>
									<div className="text-base font-semibold text-gray-900">
										{testimonial.author}
									</div>
									<div className="text-sm text-gray-600">
										{testimonial.role}
									</div>
									<div className="text-sm font-medium" style={{color: '#f04b22'}}>
										{testimonial.company}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Client Gallery Section */}
				<div className="mt-32">
					<div className="text-center">
						<h3 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{color: '#12529c'}}>
							Client Gallery
						</h3>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Capturing moments from our successful partnerships and collaborations
						</p>
					</div>
					
					{/* Scrollable Carousel */}
					<div className="mx-auto mt-16 max-w-7xl">
						<div className="relative overflow-hidden">
							<div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" style={{scrollBehavior: 'smooth'}}>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/W4qQ14CL/1000029992.png" 
											alt="Client collaboration moment" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/k6xKxHSH/1000030206.jpg" 
											alt="Clinical research meeting" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/Vck004vG/1000480114.jpg" 
											alt="Team collaboration" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/xSVPf3nT/1000480122.jpg" 
											alt="Professional gathering" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											style={{objectPosition: 'center 20%'}}
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/LzcQQ8rV/1000480402.jpg" 
											alt="Client presentation" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											style={{objectPosition: 'center 10%'}}
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/SDf92nwg/1000480406.jpg" 
											alt="Research conference" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/s993Fqrr/1000480410.jpg" 
											alt="Industry event" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/Tqtw8MxZ/1000480412.jpg" 
											alt="Team meeting" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/3g8VP4x/12-Group-Pic-1.jpg" 
											alt="Group picture" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/pgc86gm/Picture-102-1.jpg" 
											alt="Professional meeting" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/RGPzrf7r/Picture-105-1.jpg" 
											alt="Team collaboration" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/LdkGPN38/Screenshot-2-1.png" 
											alt="Professional workspace" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-64">
										<img 
											src="https://i.ibb.co/HpxpfMGB/DSC07505.jpg" 
											alt="Clinical research workspace" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
								<div className="flex-shrink-0">
									<div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-80">
										<img 
											src="https://i.ibb.co/pr5hTkwv/Untitled.png" 
											alt="SMO India overview" 
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center mt-6">
							<p className="text-sm text-gray-500">Scroll horizontally to view more images</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}