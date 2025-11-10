import { ServicePricing, PricingOption } from '../data/quoteServices';
import { Link } from 'react-router-dom';
import { useQuotePanel } from './QuotePanelProvider';

interface PricingDisplayProps {
  service: ServicePricing | null;
  selectedPricingOption?: PricingOption;
  onPricingOptionSelect?: (option: PricingOption) => void;
}

const PricingDisplay = ({
  service,
  selectedPricingOption,
  onPricingOptionSelect
}: PricingDisplayProps) => {
  const { openQuote } = useQuotePanel();
  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8">
        <div className="w-16 h-16 mb-4 text-gray-300">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8-2a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Select a Service
        </h3>
        <p className="text-gray-500 max-w-sm">
          Hover over a service on the left to see detailed pricing information and available plans.
        </p>
      </div>
    );
  }



  return (
    <div className="h-full min-h-[400px] p-4 sm:p-6 animate-fadeIn">
      {/* Service Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {service.name}
          </h2>
          {service.popular && (
            <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        
        {/* Starting Price */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-sm text-gray-500 mb-1">Starting from</div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">
              {service.startingPrice}
            </span>
            <span className="text-gray-500 ml-2">
              {service.startingPeriod}
            </span>
          </div>
          <p className="text-xs text-gray-600 italic mt-2">* All prices are exclusive of GST</p>
        </div>
      </div>

      {/* Pricing Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Available Plans
        </h3>
        <div className="space-y-3">
          {service.pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`
                border rounded-lg p-3 sm:p-4 cursor-pointer transition-all duration-200 touch-manipulation
                active:scale-[0.98] min-h-[44px] flex flex-col justify-center
                ${selectedPricingOption?.type === option.type || (!selectedPricingOption && index === 0)
                  ? 'border-lime-500 bg-lime-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
                ${option.highlight ? 'ring-2 ring-lime-200' : ''}
              `}
              onClick={() => onPricingOptionSelect?.(option)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onPricingOptionSelect?.(option);
                }
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">
                  {option.type}
                </h4>
                {option.popular && (
                  <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
                {option.highlight && !option.popular && (
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Best Value
                  </span>
                )}
              </div>
              
              <div className="flex items-baseline mb-2">
                <span className="text-xl font-bold text-gray-900">
                  {option.price}
                </span>
                <span className="text-gray-500 ml-2 text-sm">
                  {option.period}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                {option.description}
              </p>
              
              {/* Features preview for selected option */}
              {(selectedPricingOption?.type === option.type || (!selectedPricingOption && index === 0)) && (
                <div className="space-y-1">
                  {option.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <svg 
                        className="w-3 h-3 text-lime-500 mr-2 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {option.features.length > 3 && (
                    <div className="text-xs text-gray-400 ml-5">
                      +{option.features.length - 3} more features
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="space-y-3">
        <Link
          to="/contact"
          className="w-full bg-lime-500 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-lime-600 transition-colors duration-200 flex items-center justify-center group"
        >
          <span>Book Now</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
        
        <button
          onClick={openQuote}
          className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors duration-200 block"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PricingDisplay;
