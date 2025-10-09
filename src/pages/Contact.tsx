import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icon components
const PhoneIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ExclamationCircleIcon = () => (
  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Private Offices',
    'Dedicated Desk',
    'Flexi Desk',
    'Virtual Office',
    'Meeting Rooms',
    'Business Address',
    'General Inquiry'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759947548/DSCN0759_eaza4f.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get in <span className="text-lime-400">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your work experience? Contact us to learn more about our workspace solutions, 
                schedule a tour, or get a personalized quote for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us and get the support you need for your workspace requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-4 p-3 bg-lime-50 rounded-full w-fit mx-auto group-hover:bg-lime-100 transition-colors duration-300">
                <LocationIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors duration-300">Location</h3>
              <p className="text-gray-600 text-sm">
                Center of Kochi<br />
                Kerala, India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-4 p-3 bg-lime-50 rounded-full w-fit mx-auto group-hover:bg-lime-100 transition-colors duration-300">
                <PhoneIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors duration-300">Phone</h3>
              <p className="text-gray-600 text-sm">
                +91 XXXXX XXXXX<br />
                <span className="text-xs text-gray-500">Available 24/7</span>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-4 p-3 bg-lime-50 rounded-full w-fit mx-auto group-hover:bg-lime-100 transition-colors duration-300">
                <EmailIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors duration-300">Email</h3>
              <p className="text-gray-600 text-sm">
                info@covspace.com<br />
                <span className="text-xs text-gray-500">Quick response guaranteed</span>
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-4 p-3 bg-lime-50 rounded-full w-fit mx-auto group-hover:bg-lime-100 transition-colors duration-300">
                <ClockIcon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors duration-300">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Fri: 9AM - 6PM<br />
                <span className="text-xs text-gray-500">24x7 Access Available</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircleIcon />
                  <span className="ml-2 text-green-800">Message sent successfully! We'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <ExclamationCircleIcon />
                  <span className="ml-2 text-red-800">Something went wrong. Please try again or call us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your workspace needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-colors duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Services & Pricing Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Covspace?
              </h2>
              
              <div className="space-y-6">
                {/* Pricing Highlight */}
                <div className="bg-lime-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Starting from INR 9,500/month</h3>
                  <p className="text-lime-100 mb-4">
                    Get your own private office with all-inclusive services in the heart of Kochi.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span>24x7 Security & Access</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span>High-speed Internet Included</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span>Mail & Courier Handling</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span>Meeting Rooms Available</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <Link
                    to="/"
                    className="block w-full bg-black text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Schedule a Tour
                  </Link>
                  <Link
                    to="/"
                    className="block w-full border-2 border-lime-600 text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-50 transition-colors duration-300"
                  >
                    Get Quick Quote
                  </Link>
                </div>

                {/* Additional Services */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Our Services</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                    <div>• Private Offices</div>
                    <div>• Dedicated Desks</div>
                    <div>• Flexi Desk</div>
                    <div>• Virtual Office</div>
                    <div>• Meeting Rooms</div>
                    <div>• Business Address</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Showcase Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759948956/Covspace_-short_gekd2n.tiff)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Professional Consultation
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
                Our experienced team provides personalized workspace solutions tailored to your business needs. 
                Schedule a consultation to explore how Covspace can enhance your productivity and business growth.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-white/90">
                  <CheckCircleIcon />
                  <span className="ml-3 text-sm">Free workspace assessment</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircleIcon />
                  <span className="ml-3 text-sm">Customized solution recommendations</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircleIcon />
                  <span className="ml-3 text-sm">Flexible membership options</span>
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircleIcon />
                  <span className="ml-3 text-sm">Same-day space availability</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Book Your Visit</h3>
              <p className="text-white/90 mb-6">
                Experience our workspace firsthand and discover why businesses across Kochi choose Covspace 
                for their professional needs.
              </p>
              
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="block w-full bg-lime-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  Virtual Tour Available
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the center of Kochi, our workspace is easily accessible by public transport 
              and offers convenient parking facilities for our members.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="bg-gray-100 rounded-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="p-4 bg-lime-50 rounded-full w-fit mx-auto mb-4">
                  <LocationIcon />
                </div>
                <p className="text-gray-600 mt-2 font-medium">Interactive map coming soon</p>
                <p className="text-sm text-gray-500">Center of Kochi, Kerala, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 sm:py-12">
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