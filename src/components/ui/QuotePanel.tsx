import { useState, useEffect, useRef } from 'react';
import { quoteServices, ServicePricing, PricingOption } from '../data/quoteServices';
import ServiceTile from './ServiceTile';
import PricingDisplay from './PricingDisplay';

interface QuotePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePanel = ({ isOpen, onClose }: QuotePanelProps) => {
  const [selectedService, setSelectedService] = useState<ServicePricing | null>(null);
  const [hoveredService, setHoveredService] = useState<ServicePricing | null>(null);
  const [selectedPricingOption, setSelectedPricingOption] = useState<PricingOption | undefined>();
  const [announcement, setAnnouncement] = useState<string>('');
  const panelRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add a small delay to prevent immediate closing when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      document.body.style.overflow = 'hidden'; // Prevent background scroll

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Focus management and focus trap
  useEffect(() => {
    if (isOpen && panelRef.current) {
      // Store the previously focused element
      const previouslyFocusedElement = document.activeElement as HTMLElement;

      // Focus the first service tile when panel opens
      const firstTile = panelRef.current.querySelector('[role="button"]') as HTMLElement;
      if (firstTile) {
        firstTile.focus();
      }

      // Focus trap implementation
      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab' && panelRef.current) {
          const focusableElements = panelRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);

      return () => {
        document.removeEventListener('keydown', handleTabKey);
        // Return focus to previously focused element when panel closes
        if (previouslyFocusedElement && !isOpen) {
          previouslyFocusedElement.focus();
        }
      };
    }
  }, [isOpen]);

  const handleServiceSelect = (service: ServicePricing) => {
    setSelectedService(service);
    setSelectedPricingOption(undefined); // Reset pricing option when service changes
    setAnnouncement(`${service.name} selected. Starting from ${service.startingPrice} ${service.startingPeriod}.`);
    
    // Auto scroll to pricing section on mobile
    if (pricingRef.current && window.innerWidth < 1024) {
      setTimeout(() => {
        pricingRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  const handleServiceHover = (service: ServicePricing | null) => {
    setHoveredService(service);
    if (service && service !== selectedService) {
      setSelectedPricingOption(undefined); // Reset pricing option when hovering different service
      setAnnouncement(`Viewing ${service.name} pricing. Starting from ${service.startingPrice} ${service.startingPeriod}.`);
    } else if (!service) {
      setAnnouncement('');
    }
  };

  const handlePricingOptionSelect = (option: PricingOption) => {
    setSelectedPricingOption(option);
    setAnnouncement(`${option.type} plan selected. ${option.price} ${option.period}.`);
  };

  // Determine which service to display in pricing panel
  const displayService = hoveredService || selectedService;

  if (!isOpen) return null;

  return (
    <>
      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`
          fixed top-0 left-0 right-0 bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          lg:top-[90px] sm:top-[120px] top-[100px]
        `}
        style={{
          maxHeight: 'calc(100vh - 100px)',
          overflowY: 'auto'
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-panel-title"
        aria-describedby="quote-panel-description"
      >
        {/* Panel Header */}
        <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h2 id="quote-panel-title" className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                Get Your Quote
              </h2>
              <p id="quote-panel-description" className="text-gray-600 mt-1 text-sm sm:text-base">
                Select a service to see pricing and book your workspace.
                <span className="hidden sm:inline"> Use tab to navigate between services and pricing options.</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-500 touch-manipulation"
              aria-label="Close quote panel"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Panel Content */}
        <div className="flex flex-col lg:flex-row min-h-[500px]">
          {/* Left Column - Service Selection */}
          <div className="lg:w-1/2 p-4 sm:p-6 lg:border-r border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choose Your Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {quoteServices.map((service) => (
                <ServiceTile
                  key={service.id}
                  service={service}
                  isSelected={selectedService?.id === service.id}
                  onSelect={handleServiceSelect}
                  onHover={handleServiceHover}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Pricing Display */}
          <div ref={pricingRef} className="lg:w-1/2 bg-gray-50 lg:bg-gray-50">
            <PricingDisplay
              service={displayService}
              selectedPricingOption={selectedPricingOption}
              onPricingOptionSelect={handlePricingOptionSelect}
            />
          </div>
        </div>

        {/* Mobile-specific bottom padding */}
        <div className="h-6 lg:hidden" />
      </div>
    </>
  );
};

export default QuotePanel;
