import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children, className = '', ...props }) => {
  return (
    <span 
      className={`inline-flex items-center px-[10px] py-[4px] rounded-[4px] text-[12px] font-medium font-sans border border-[#D7E2EC] text-[#4F606F] bg-white ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
};
