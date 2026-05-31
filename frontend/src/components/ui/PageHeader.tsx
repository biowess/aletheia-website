import React from 'react';
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb';
import { SectionDivider } from './SectionDivider';

export interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumbs, title, subtitle, className = '' }) => {
  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumb items={breadcrumbs} className="mb-6" />
        <h1 className="font-sans font-bold text-[28px] sm:text-[36px] lg:text-[40px] text-[#162C41] leading-tight mb-3 sm:mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans font-normal text-[15px] sm:text-[17px] text-[#4F606F]">
            {subtitle}
          </p>
        )}
      </div>
      <SectionDivider />
    </div>
  );
};
