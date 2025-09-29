import { Link } from 'react-router-dom';

export default function CompanyRegistration() {
	return (
		<main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">Company Registration</h1>
			<p className="text-gray-600 mb-6">This is a placeholder Company Registration page. Add your service details here.</p>
			<Link to="/" className="text-lime-600 hover:text-lime-700 font-semibold">Go back home</Link>
		</main>
	);
} 