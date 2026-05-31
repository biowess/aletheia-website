import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`font-sans text-[13px] tracking-wide ${className}`}>
      <ol className="flex items-center space-x-2 m-0 p-0 list-none">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <li>
                {isLast || !item.href ? (
                  <span 
                    className={isLast ? "text-[#162C41] font-medium" : "text-[#6D7E8F]"}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} className="text-[#6D7E8F] hover:text-[#162C41] transition-colors">
                    {item.label}
                  </a>
                )}
              </li>
              {!isLast && (
                <li className="text-[#6D7E8F]" aria-hidden="true">
                  →
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
