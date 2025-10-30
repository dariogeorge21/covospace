import { useState, useEffect, useRef } from 'react';
import { quoteServices, ServicePricing, PricingOption } from '../data/quoteServices';
import ServiceTile from './ServiceTile';

interface QuotePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotePanel = ({ isOpen, onClose }: QuotePanelProps) => {
  const [selectedService, setSelectedService] = useState<ServicePricing | null>(null);
  const [hoveredService, setHoveredService] = useState<ServicePricing | null>(null);
  const [selectedPricingOption, setSelectedPricingOption] = useState<PricingOption | undefined>();
  const [seatCount, setSeatCount] = useState<number>(1);
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
    setHoveredService(null); // Clear hover state on selection to prevent conflicts
    setSelectedPricingOption(undefined); // Reset pricing option when service changes
    setSeatCount(1); // Reset seat count when service changes
    setAnnouncement(`${service.name} selected. Starting from ${service.startingPrice} ${service.startingPeriod}.`);
    
    // Auto scroll to pricing section on mobile
    if (pricingRef.current && window.innerWidth < 1024) {
      // Use requestAnimationFrame for smoother scroll without flicker
      requestAnimationFrame(() => {
        pricingRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      });
    }
  };

  const handleServiceHover = (service: ServicePricing | null) => {
    // Disable hover effects on mobile/touch devices to prevent flicker
    if (window.innerWidth < 1024) {
      return;
    }
    
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

  const handleSeatCountChange = (newCount: number) => {
    const maxSeats = getMaxSeats();
    if (newCount >= 1 && newCount <= maxSeats) {
      setSeatCount(newCount);
      if (selectedPricingOption) {
        const basePrice = parseFloat(selectedPricingOption.price.replace(/[^0-9.]/g, ''));
        const totalPrice = basePrice * newCount;
        setAnnouncement(`${newCount} seat${newCount > 1 ? 's' : ''} selected. Total: ₹${totalPrice.toLocaleString()} ${selectedPricingOption.period}.`);
      }
    }
  };

  // Determine which service to display in pricing panel
  const displayService = hoveredService || selectedService;

  // Extract maximum seat count from the workspace
  const getMaxSeats = (): number => {
    if (!displayService?.seats) return 50; // Default fallback
    
    // Extract numbers from strings like "9 seats" or "4 Total (3 Chair + 1 Manager)"
    const match = displayService.seats.match(/(\d+)\s*(?:Total|seats?)/i);
    if (match) {
      return parseInt(match[1], 10);
    }
    
    // Fallback: try to extract first number
    const firstNumber = displayService.seats.match(/\d+/);
    return firstNumber ? parseInt(firstNumber[0], 10) : 50;
  };

  // Calculate total price based on seat count
  const calculateTotalPrice = (basePrice: string): string => {
    const price = parseFloat(basePrice.replace(/[^0-9.]/g, ''));
    const total = price * seatCount;
    return `₹${total.toLocaleString()}`;
  };

  // Seat Counter Component
  const SeatCounter = () => {
    const maxSeats = getMaxSeats();
    
    return (
      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 mb-4">
        <div>
          <span className="text-sm font-medium text-gray-900">Seats</span>
          <p className="text-xs text-gray-500 mt-0.5">Max: {maxSeats}</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleSeatCountChange(seatCount - 1)}
            disabled={seatCount <= 1}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
            aria-label="Decrease seat count"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="w-10 text-center font-bold text-gray-900 text-lg">{seatCount}</span>
          <button
            onClick={() => handleSeatCountChange(seatCount + 1)}
            disabled={seatCount >= maxSeats}
            className="w-8 h-8 rounded-full bg-lime-500 hover:bg-lime-600 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
            aria-label="Increase seat count"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

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
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
              Select Workspace
            </h3>
            <div className="grid grid-cols-2 gap-3">
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
          <div ref={pricingRef} className="lg:w-1/2 bg-gray-50">
            <div className="p-4 sm:p-6">
              {displayService ? (
                <>
                  {/* Header */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {displayService.name}
                    </h3>
                    {displayService.spaceId && (
                      <p className="text-sm text-gray-500">ID: {displayService.spaceId}</p>
                    )}
                  </div>

                  {/* Workspace Details - Compact */}
                  {(displayService.area || displayService.seats) && (
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      {displayService.area && (
                        <div className="p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-2 mb-1">
                            <svg className="w-4 h-4 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            <p className="text-xs text-gray-500 font-medium">Area</p>
                          </div>
                          <p className="text-sm font-semibold text-gray-900">{displayService.area}</p>
                        </div>
                      )}
                      {displayService.seats && (
                        <div className="p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-2 mb-1">
                            <svg className="w-4 h-4 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-xs text-gray-500 font-medium">Capacity</p>
                          </div>
                          <p className="text-sm font-semibold text-gray-900">{displayService.seats}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Seat Counter */}
                  <SeatCounter />

                  {/* Pricing Options - Simplified */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Choose Plan</h4>
                    <div className="space-y-2">
                      {displayService.pricingOptions?.map((option) => (
                        <button
                          key={option.type}
                          onClick={() => handlePricingOptionSelect(option)}
                          className={`w-full p-3 text-left rounded-lg border-2 transition-all duration-200 ${
                            selectedPricingOption?.type === option.type
                              ? 'border-lime-500 bg-lime-50 shadow-sm'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">{option.type}</h4>
                              <p className="text-xs text-gray-500">{option.period}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-base text-gray-900">
                                {calculateTotalPrice(option.price)}
                              </div>
                              {seatCount > 1 && (
                                <div className="text-xs text-gray-500">
                                  {option.price} × {seatCount}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Total Summary - Only when option selected */}
                  {selectedPricingOption && (
                    <div className="mb-4 p-4 bg-gradient-to-r from-lime-50 to-lime-100 rounded-lg border-2 border-lime-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Total Amount</span>
                        <span className="text-2xl font-bold text-lime-700">
                          {calculateTotalPrice(selectedPricingOption.price)}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1 flex justify-between">
                        <span>{seatCount} seat{seatCount > 1 ? 's' : ''} • {selectedPricingOption.type}</span>
                        <span className="font-medium">{selectedPricingOption.period}</span>
                      </div>
                    </div>
                  )}

                  {/* Facilities - Collapsible/Compact */}
                  {displayService.facilities && displayService.facilities.length > 0 && (
                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <svg className="w-4 h-4 text-lime-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        What's Included
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {displayService.facilities.map((facility, index) => (
                          <li key={index} className="flex items-start text-xs text-gray-600">
                            <svg className="w-3 h-3 text-lime-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-300 mb-4">
                    <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose a Workspace</h3>
                  <p className="text-gray-500 text-sm max-w-xs mx-auto">
                    Select any workspace to view pricing details and available facilities
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile-specific bottom padding */}
        <div className="h-6 lg:hidden" />
      </div>
    </>
  );
};

export default QuotePanel;
