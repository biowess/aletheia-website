import React from 'react';

export interface SectionDividerProps extends React.HTMLAttributes<HTMLHRElement> {}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '', ...props }) => {
  return (
    <hr 
      className={`border-[#D7E2EC] m-0 p-0 w-full ${className}`} 
      {...props} 
    />
  );
};
