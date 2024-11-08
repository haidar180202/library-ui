import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  variant?: string; // Color variant
  light?: boolean; // Light variant
  size?: 'sm' | 'lg' | 'xl'; // Badge size
  outline?: boolean; // Outline variant
  shape?: 'circle' | 'square'; // Badge shape
  className?: string; // Additional custom classes
  children: React.ReactNode; // Badge content
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size,
  outline = false,
  shape,
  className,
  children,
}) => {
  const badgeClass = classNames(
    'badge',
    {
      [`badge-light-${variant}`]: !outline && variant,
      [`badge-outline badge-${variant}`]: outline && variant,
      [`badge-${size}`]: size,
      [`badge-${shape}`]: shape,
    },
    className
  );

  return <span className={badgeClass}>{children}</span>;
};

export default Badge;
