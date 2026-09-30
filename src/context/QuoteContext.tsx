import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import type { QuoteSubject } from '../data/content';
import { smoothScrollTo } from '../utils/animations';

interface QuotePrefill {
  subject: QuoteSubject | '';
  message: string;
  // Incremented on every request so the form re-applies identical prefills
  nonce: number;
}

interface QuoteContextValue {
  prefill: QuotePrefill;
  requestQuote: (subject?: QuoteSubject, message?: string) => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [prefill, setPrefill] = useState<QuotePrefill>({ subject: '', message: '', nonce: 0 });

  const requestQuote = useCallback((subject?: QuoteSubject, message = '') => {
    setPrefill((prev) => ({ subject: subject ?? '', message, nonce: prev.nonce + 1 }));
    smoothScrollTo('#contact');
  }, []);

  return <QuoteContext.Provider value={{ prefill, requestQuote }}>{children}</QuoteContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
