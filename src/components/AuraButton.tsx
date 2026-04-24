import React from 'react';
import './AuraButton.css';

interface AuraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const AuraButton: React.FC<AuraButtonProps> = ({ children, className = '', icon, ...props }) => {
  return (
    <button className={`bookmarkBtn ${className}`} {...props}>
      <span className="IconContainer">
        {icon || (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" style={{ width: '16px', height: '16px', color: 'rgb(255, 255, 255)' }}>
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        )}
      </span>
      <p className="text">{children}</p>
    </button>
  );
};
