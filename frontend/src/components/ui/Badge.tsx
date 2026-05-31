import React from 'react';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'mono';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let baseStyle = "inline-flex items-center px-[8px] py-[3px] rounded-[4px] text-[11px] font-semibold border leading-none tracking-wide ";
  
  if (variant === 'mono') {
    baseStyle += "font-mono bg-[#EDF3F8] text-[#244B73] border-[#D7E2EC]";
  } else {
    baseStyle += "font-sans ";
    switch (variant) {
      case 'primary':
        baseStyle += "bg-[#EDF3F8] text-[#244B73] border-[#D7E2EC]";
        break;
      case 'success':
        baseStyle += "bg-[#EDF7EF] text-[#3E6B61] border-[#C5DFC9]";
        break;
      case 'warning':
        baseStyle += "bg-[#FFF8ED] text-[#C58A2B] border-[#F5DFA0]";
        break;
      case 'error':
        baseStyle += "bg-[#F5ECEC] text-[#9B4A4A] border-[#E8BCBC]";
        break;
    }
  }

  return (
    <span className={`${baseStyle} ${className}`} {...props}>
      {children}
    </span>
  );
};
