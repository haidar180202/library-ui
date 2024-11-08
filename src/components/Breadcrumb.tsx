import React from 'react';
import classNames from 'classnames';

interface BreadcrumbItem {
  label: string;
  href?: string; // Optional href for the breadcrumb item
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'default' | 'line' | 'dot' | 'separatorless' | 'chevron'; // Breadcrumb style
  className?: string; // Custom classes
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, variant = 'default', className }) => {
  const breadcrumbClass = classNames(
    'breadcrumb',
    {
      'breadcrumb-line': variant === 'line',
      'breadcrumb-dot': variant === 'dot',
      'breadcrumb-separatorless': variant === 'separatorless',
      'breadcrumb-chevron': variant === 'chevron',
    },
    className
  );

  return (
    <nav aria-label="breadcrumb">
      <ol className={breadcrumbClass}>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
