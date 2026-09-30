import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeaderProps) => {
  const centered = align === 'center';

  return (
    <div className={`reveal max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <p className={`eyebrow ${light ? 'eyebrow-light' : ''} ${centered ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 className={`section-title mt-4 ${light ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
