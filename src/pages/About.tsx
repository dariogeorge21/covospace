import { Link } from 'react-router-dom';
import { useQuotePanel } from '../components/ui/QuotePanelProvider';

// Icon components for features section
const OfficeIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const FlexibilityIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function About() {
	const { openQuote } = useQuotePanel();
	return (
		<main className="bg-white">
			{/* Hero Section */}
			<section 
				className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative"
				style={{
					// removed placeholder image to avoid broken/placeholder asset
				}}
			>
				{/* subtle gradient overlay for visual interest and contrast */}
				<div className="absolute inset-0 bg-gradient-to-b from-lime-50/40 to-white pointer-events-none" aria-hidden="true"></div>
				<div className="relative text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						About <span className="text-lime-600">Covspace</span>
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Covspace is a premier coworking and shared workspace provider based in the heart of Kochi, Kerala. 
						We're transforming how professionals work, collaborate, and grow their businesses.
					</p>
				</div>
			</section>

			{/* Mission Section */}
			<section 
				className="relative py-12 sm:py-16 lg:py-20"
				style={{
					backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759945551/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_ftvh2b.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				{/* dark overlay to improve contrast with white text */}
				<div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
								Our Mission
							</h2>
							<p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
								We believe that the workspace you choose can make or break your productivity. That's why we've created 
								bold workspaces built to inspire you, fostering an environment where innovation thrives and 
								professional connections flourish.
							</p>
							<p className="text-base sm:text-lg text-white/90 leading-relaxed">
								Our mission is to provide flexible, fully managed workspace solutions that adapt to your business needs, 
								whether you're a startup, established company, or independent professional looking for a collaborative environment.
							</p>
						</div>
						<div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
							<h3 className="text-xl sm:text-2xl font-bold mb-4">Facilities Offered!</h3>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Unlimited Daily pass subject to availability
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Reception Desk & Guest Services
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Unlimited Wi-Fi Access
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Mail & Courier Management
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Print/Photocopy Facility (50 prints/mo)
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Scanning Facilities (Unlimited)
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Conference Room Access
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Pantry & Toilet
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Temp Sign board
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Housekeeping & Security
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Interactive Display
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Car & Bike Parking Facility
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Uninterrupted Power Supply
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Locker Facility
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Hot Beverages (On Demand)
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Individual Biometric Access
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									Air Conditioned
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
									24x7 CCTV Surveillance
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section 
				className="py-12 sm:py-16 lg:py-20 relative"
				style={{
					backgroundImage: 'url(https://res.clouinary.com/dobqxxtml/image/upload/v1759945668/group-business-executives-working-together_m0lxs8.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				{/* light overlay so white cards remain legible */}
				<div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Our Workspace Solutions
						</h2>
						<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
							From private offices to virtual office services, we offer comprehensive workspace solutions 
							designed to meet diverse business needs.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{/* Value for Money */}
						<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
							<div className="mb-4">
								<OfficeIcon />
							</div>
							<h3 className="text-xl font-semibold text-lime-600 mb-3">💰 Value for Money</h3>
							<p className="text-gray-600 text-sm sm:text-base mb-4">
								Covspace's all-inclusive pricing offers fully furnished offices with premium amenities and services, ensuring a valuable and hassle-free workspace experience.
							</p>
						</div>

						{/* Low CapEx */}
						<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
							<div className="mb-4">
								<CommunityIcon />
							</div>
							<h3 className="text-xl font-semibold text-lime-600 mb-3">💪 Low CapEx</h3>
							<p className="text-gray-600 text-sm sm:text-base mb-4">
								Accelerate growth and optimize cash flow with Covspace's fully furnished offices, designed to eliminate large upfront expenses and ensure smooth, efficient operations.
							</p>
						</div>

						{/* Transparent Pricing */}
						<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
							<div className="mb-4">
								<FlexibilityIcon />
							</div>
							<h3 className="text-xl font-semibold text-lime-600 mb-3">💎 Transparent Pricing, No Surprises</h3>
							<p className="text-gray-600 text-sm sm:text-base mb-4">
								At Covspace, what you see is what you get - transparent upfront costs and a smooth, hassle-free workspace experience.
							</p>
						</div>
						
						{/* Bottom centered cards */}
						<div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-3xl mx-auto">
							{/* Holistic Workplace */}
							<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full">
								<div className="mb-4">
									<LocationIcon />
								</div>
								<h3 className="text-xl font-semibold text-lime-600 mb-3">🏢 Holistic Workplace</h3>
								<p className="text-gray-600 text-sm sm:text-base mb-4">
									Vibrant workspaces designed to boost productivity and well-being through a holistic approach, fostering a healthy and engaged professional community with regular events and activities.
								</p>
							</div>

							{/* Flexible & Dynamic Workspaces */}
							<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full">
								<div className="mb-4">
									<FlexibilityIcon />
								</div>
								<h3 className="text-xl font-semibold text-lime-600 mb-3">🚀 Flexible & Dynamic Workspaces</h3>
								<p className="text-gray-600 text-sm sm:text-base mb-4">
									Flexible workspaces at Covspace adapt to your growth, making it easy for solo entrepreneurs and startups to scale effortlessly.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Location & Contact */}
			<section 
				className="relative py-12 sm:py-16 lg:py-20"
				style={{
					backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759946073/new_litted_g4kces.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
						<div>
							<div className="flex items-center mb-6">
								<LocationIcon />
								<h2 className="text-2xl sm:text-3xl font-bold text-white ml-3">
									Located in Kochi, Kerala
								</h2>
							</div>
							<p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
								Strategically positioned in the center of Kochi, Covspace offers easy accessibility and puts you 
								at the heart of Kerala's business district. Our location provides the perfect blend of urban 
								convenience and professional atmosphere.
							</p>
							<div className="space-y-4">
								<div className="flex items-start">
									<span className="text-lime-200 font-semibold text-sm uppercase tracking-wide w-20 flex-shrink-0">Address:</span>
									<span className="text-white/90">GK Tower, Chakkarapparambu Road, Near to NH 66 Bypass, Near Holiday Inn Hotel, Ernakulam- 682028</span>
								</div>
								<div className="flex items-start">
									<span className="text-lime-200 font-semibold text-sm uppercase tracking-wide w-20 flex-shrink-0">Features:</span>
									<span className="text-white/90">30+ Private Offices, 65+ Workstations, Premium Conference Rooms</span>
								</div>
							</div>
						</div>

						<div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
							<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
							<p className="text-gray-600 mb-6">
								Ready to upgrade your office experience? Contact us to schedule a tour or learn more about our workspace solutions.
							</p>
							<div className="space-y-4">
								<button
									onClick={openQuote}
									className="inline-flex items-center justify-center w-full bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
								>
									Quick Quote
								</button>
								<Link 
									to="/" 
									className="inline-flex items-center justify-center w-full border-2 border-lime-600 text-lime-600 font-semibold py-3 px-6 rounded-lg hover:bg-lime-50 transition-colors duration-300"
								>
									Schedule a Tour
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Bottom Navigation */}
			<section 
				className="py-8 sm:py-12"
				style={{
					// removed placeholder background for footer to avoid broken asset and keep footer clean
				}}
			>
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<Link 
						to="/" 
						className="inline-flex items-center text-lime-600 hover:text-lime-700 font-semibold text-base sm:text-lg transition-colors duration-300"
					>
						<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						Back to Home
					</Link>
				</div>
			</section>
		</main>
	);
}