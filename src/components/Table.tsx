import React from 'react';

interface Column {
  header: string;   // Header name for the column
  accessor: string; // Key for accessing data in the row object
  className?: string; // Optional class for individual columns
}

interface TableProps {
  columns?: Column[]; // Make columns optional
  data: Record<string, any>[]; // Flexible data structure for rows
  classCard?: string; // Optional class for the card
  footerContent?: React.ReactNode; // Optional footer content
  headerClassName?: string; // Optional class for thead
  bodyClassName?: string;   // Optional class for tbody
  footerClassName?: string; // Optional class for tfoot
}

const Table: React.FC<TableProps> = ({
  columns = [],
  data,
  classCard = '', // Default to empty string if not provided
  footerContent,
  headerClassName,
  bodyClassName,
  footerClassName,
}) => {
  // If columns are not provided, infer them from the first data object
  if (columns.length === 0 && data.length > 0) {
    columns = Object.keys(data[0]).map(key => ({
      header: key,    // Use the key as the header
      accessor: key,  // Use the key to access data
    }));
  }

  return (
    <div className="table-responsive">
      <table className={`table ${classCard}`}>
        <thead className={headerClassName}>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={bodyClassName}>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={column.className}>
                    {row[column.accessor] !== undefined ? row[column.accessor] : '-'}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No data available</td>
            </tr>
          )}
        </tbody>
        {footerContent && (
          <tfoot className={footerClassName}>
            <tr>
              <td colSpan={columns.length} className="text-center">
                {footerContent}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Table;
