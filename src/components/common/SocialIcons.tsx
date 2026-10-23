import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  variant?: 'gradient' | 'monochrome' | 'outline';
}

/**
 * Modern Instagram Brand Icon with Authentic Sunset Gradient
 */
export const InstagramIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  variant = 'gradient',
  ...props
}) => {
  const id = React.useId();
  const gradId = `ig-grad-${id.replace(/:/g, '')}`;

  if (variant === 'monochrome') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      {/* Inner Camera Outline */}
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      {/* Center Lens Circle */}
      <circle
        cx="12"
        cy="12"
        r="3.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      {/* Flash Dot */}
      <circle cx="16.2" cy="7.8" r="0.9" fill="#ffffff" />
    </svg>
  );
};

/**
 * Modern Facebook Brand Icon with Vibrant Blue Gradient
 */
export const FacebookIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  variant = 'gradient',
  ...props
}) => {
  const id = React.useId();
  const gradId = `fb-grad-${id.replace(/:/g, '')}`;

  if (variant === 'monochrome') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1877F2" />
          <stop offset="100%" stopColor="#0B57CF" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      <path
        d="M13.5 21V12.75H16.2L16.6 9.6H13.5V7.65C13.5 6.75 13.8 6.15 15.1 6.15H16.75V3.35C16.45 3.3 15.5 3.2 14.4 3.2C12.1 3.2 10.5 4.6 10.5 7.25V9.6H7.85V12.75H10.5V21H13.5Z"
        fill="#ffffff"
      />
    </svg>
  );
};

/**
 * Modern WhatsApp Brand Icon with Emerald Gradient
 */
export const WhatsAppIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  variant = 'gradient',
  ...props
}) => {
  const id = React.useId();
  const gradId = `wa-grad-${id.replace(/:/g, '')}`;

  if (variant === 'monochrome') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      <path
        d="M17.5 14.3C17.2 14.1 15.7 13.4 15.4 13.3C15.1 13.2 14.9 13.1 14.7 13.4C14.5 13.7 13.9 14.4 13.7 14.6C13.5 14.8 13.3 14.8 13 14.7C12.7 14.5 11.7 14.2 10.5 13.1C9.6 12.3 9 11.3 8.8 11C8.6 10.7 8.8 10.6 8.9 10.4C9 10.3 9.2 10.1 9.3 9.9C9.4 9.7 9.5 9.6 9.6 9.4C9.7 9.2 9.6 9 9.5 8.8C9.4 8.6 8.8 7.2 8.6 6.6C8.4 6 8.2 6.1 8 6.1C7.8 6.1 7.6 6.1 7.4 6.1C7.2 6.1 6.8 6.2 6.5 6.5C6.2 6.8 5.4 7.6 5.4 9.1C5.4 10.6 6.5 12.1 6.7 12.3C6.9 12.5 8.9 15.6 12 16.9C12.7 17.2 13.3 17.4 13.8 17.5C14.6 17.8 15.3 17.7 15.8 17.6C16.4 17.5 17.7 16.8 18 16C18.3 15.2 18.3 14.5 18.2 14.3C18.1 14.2 17.8 14.4 17.5 14.3Z"
        fill="#ffffff"
      />
    </svg>
  );
};

/**
 * Modern Social Connect / Share Icon with Luxury Styling
 */
export const SocialHubIcon: React.FC<IconProps> = ({
  size = 24,
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
};
