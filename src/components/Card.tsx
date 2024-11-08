import React from 'react';
import classNames from 'classnames';

interface CardProps {
  variant?: string; // Color variant
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  borderless?: boolean;
  dashed?: boolean;
  flush?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  variant = '',
  children, 
  className, 
  shadow, 
  borderless, 
  dashed, 
  flush, 
}) => {
  const cardClass = classNames(
    'card',
    {
      [`card-${variant}`] : variant,
      'card-shadow': shadow,
      'card-borderless': borderless,
      'card-dashed': dashed,
      'card-flush': flush,
    },
    className
  );

  return <div className={cardClass}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  stretch?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, stretch }) => {
  const headerClass = classNames('card-header', { 'card-header-stretch': stretch }, className);
  return <div className={headerClass}>{children}</div>;
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
  return <div className={classNames('card-body', className)}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return <div className={classNames('card-footer', className)}>{children}</div>;
};
