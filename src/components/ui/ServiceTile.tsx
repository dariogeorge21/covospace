import { ServicePricing } from '../data/quoteServices';
import { useHoverDelay } from '../utils/useHoverDelay';

interface ServiceTileProps {
  service: ServicePricing;
  isSelected: boolean;
  onSelect: (service: ServicePricing) => void;
  onHover: (service: ServicePricing | null) => void;
}

const ServiceTile = ({ service, isSelected, onSelect, onHover }: ServiceTileProps) => {
  const { onMouseEnter, onMouseLeave } = useHoverDelay(
    () => onHover(service),
    150
  );

  const handleMouseLeave = () => {
    onMouseLeave();
    onHover(null);
  };

  const handleClick = () => {
    onSelect(service);
    // On mobile, also trigger hover to show pricing immediately
    if (window.innerWidth < 1024) {
      onHover(service);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(service);
      // Also trigger hover for keyboard users
      onHover(service);
    }
  };

  return (
    <div
      className={`
        relative p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 min-h-[120px] sm:min-h-[140px]
        hover:shadow-md lg:hover:scale-[1.02] focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-2
        active:scale-[0.98] touch-manipulation
        ${isSelected
          ? 'border-lime-500 bg-lime-50 shadow-md'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Select ${service.name} service`}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Popular
        </div>
      )}

      {/* Service name */}
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {service.name}
      </h3>

      {/* Service description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {service.description}
      </p>

      {/* Key features preview */}
      <div className="space-y-1">
        {service.features.slice(0, 2).map((feature, index) => (
          <div key={index} className="flex items-center text-xs text-gray-500">
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
            <span className="truncate">{feature}</span>
          </div>
        ))}
        {service.features.length > 2 && (
          <div className="text-xs text-gray-400 mt-1">
            +{service.features.length - 2} more features
          </div>
        )}
      </div>

      {/* Hover indicator */}
      <div className={`
        absolute bottom-2 right-2 transition-opacity duration-200
        ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
      `}>
        <svg 
          className="w-4 h-4 text-lime-500" 
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
      </div>
    </div>
  );
};

export default ServiceTile;
