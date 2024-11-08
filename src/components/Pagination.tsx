import React from 'react';
import classNames from 'classnames';
import { KTIcon } from '../_metronic/helpers';

interface PaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  circle?: boolean;
  outline?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  onPageChange,
  circle = false,
  outline = false,
  className,
}) => {
  const paginationClass = classNames(
    'pagination',
    {
      'pagination-circle': circle,
      'pagination-outline': outline,
    },
    className
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPaginationRange = () => {
    const range = [];
    const delta = 5; // Number of pages to show around the current page

    const left = Math.max(2, currentPage - delta); // Minimum page shown around current page
    const right = Math.min(pages - 1, currentPage + delta); // Maximum page shown around current page

    if (left > 2) {
      range.push(1, '...');
    } else {
      range.push(1);
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < pages - 1) {
      range.push('...', pages);
    } else {
      range.push(pages);
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  return (
    <ul className={paginationClass}>
      <li className={classNames('page-item', { disabled: currentPage === 1 })}>
        <button
          className="page-link previous"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <KTIcon iconName='left'/>
        </button>
      </li>

      {paginationRange.map((page, index) => (
        <li
          key={index}
          className={classNames('page-item', {
            active: currentPage === page,
            disabled: page === '...',
          })}
        >
          {page === '...' ? (
            <span className="page-link">...</span>
          ) : (
            <button className="page-link" onClick={() => handlePageChange(Number(page))}>
              {page}
            </button>
          )}
        </li>
      ))}

      <li
        className={classNames('page-item', {
          disabled: currentPage === pages,
        })}
      >
        <button
          className="page-link next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pages}
        >
          <KTIcon iconName='right'/>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
