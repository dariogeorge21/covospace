import React, { createContext, useCallback, useContext, useState } from 'react';
import QuotePanel from './QuotePanel';

interface QuotePanelContextValue {
  isOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
}

const QuotePanelContext = createContext<QuotePanelContextValue | undefined>(undefined);

export const useQuotePanel = (): QuotePanelContextValue => {
  const ctx = useContext(QuotePanelContext);
  if (!ctx) {
    throw new Error('useQuotePanel must be used within a QuotePanelProvider');
  }
  return ctx;
};

export const QuotePanelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuote = useCallback(() => setIsOpen(true), []);
  const closeQuote = useCallback(() => setIsOpen(false), []);

  return (
    <QuotePanelContext.Provider value={{ isOpen, openQuote, closeQuote }}>
      {children}
      {/* Render the panel once at the root so any component can open it */}
      <QuotePanel isOpen={isOpen} onClose={closeQuote} />
    </QuotePanelContext.Provider>
  );
};

