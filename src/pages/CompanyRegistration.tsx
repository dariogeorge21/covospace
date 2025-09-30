import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icon components
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

const BusinessIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

interface FormData {
  companyName: string;
  businessType: string;
  contactName: string;
  email: string;
  phone: string;
  businessAddress: string;
  gstRegistration: boolean;
  additionalServices: string[];
}

interface FormErrors {
  [key: string]: string;
}

export default function CompanyRegistration() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessType: '',
    contactName: '',
    email: '',
    phone: '',
    businessAddress: '',
    gstRegistration: false,
    additionalServices: []
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const businessTypes = [
    'Private Limited Company',
    'Limited Liability Partnership (LLP)',
    'Partnership Firm',
    'Sole Proprietorship',
    'One Person Company (OPC)',
    'Public Limited Company',
    'Other'
  ];

  const additionalServices = [
    'Prime Business Address',
    'Bank Account Support',
    'Mail & Courier Handling',
    'Virtual Office Services',
    'Meeting Room Access',
    'Compliance Management'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Business type is required';
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact person name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter(s => s !== service)
    }));
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
      
      // For demo purposes, we'll just show success
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          companyName: '',
          businessType: '',
          contactName: '',
          email: '',
          phone: '',
          businessAddress: '',
          gstRegistration: false,
          additionalServices: []
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
      {/* Header Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <BusinessIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Company Registration
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get your business registered quickly and efficiently with our comprehensive registration services. 
            We handle all the paperwork so you can focus on growing your business.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-lime-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Company & GST Registration</h3>
            <p className="text-sm text-gray-600">Complete registration process</p>
          </div>
          <div className="bg-lime-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Prime Business Address</h3>
            <p className="text-sm text-gray-600">Professional address for your business</p>
          </div>
          <div className="bg-lime-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Bank Account Support</h3>
            <p className="text-sm text-gray-600">Assistance with account opening</p>
          </div>
          <div className="bg-lime-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Mail & Courier Handling</h3>
            <p className="text-sm text-gray-600">Professional mail management</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircleIcon />
                <span className="ml-2 text-green-800">Registration request submitted successfully! We'll contact you within 24 hours.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <ExclamationCircleIcon />
                <span className="ml-2 text-red-800">Something went wrong. Please try again or contact our support team.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                    errors.companyName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                )}
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                    errors.businessType ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
                )}
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 ${
                      errors.contactName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Full name of contact person"
                  />
                  {errors.contactName && (
                    <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>
                  )}
                </div>

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
              </div>

              {/* Email */}
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

              {/* Business Address */}
              <div>
                <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address
                </label>
                <textarea
                  id="businessAddress"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  placeholder="Enter your business address"
                />
              </div>

              {/* GST Registration */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gstRegistration"
                  name="gstRegistration"
                  checked={formData.gstRegistration}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300 rounded"
                />
                <label htmlFor="gstRegistration" className="ml-2 block text-sm text-gray-900">
                  Include GST Registration (Recommended for most businesses)
                </label>
              </div>

              {/* Additional Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Additional Services (Optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {additionalServices.map(service => (
                    <div key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service}
                        checked={formData.additionalServices.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked)}
                        className="h-4 w-4 text-lime-600 focus:ring-lime-500 border-gray-300 rounded"
                      />
                      <label htmlFor={service} className="ml-2 block text-sm text-gray-900">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
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
                      Processing...
                    </>
                  ) : (
                    'Submit Registration Request'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-lime-600 hover:text-lime-700 font-semibold text-base transition-colors duration-300"
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