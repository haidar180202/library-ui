import React, { useState } from 'react';
import Pagination from '../components/Pagination';

const PaginationDocumentation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='container mt-4'>
      <h1>Pagination Component Documentation</h1>
      <p>
        The <code>Pagination</code> component is used to display paginated
        links. The current page can be controlled via the <code>currentPage</code> prop, and
        a callback <code>onPageChange</code> can be used to handle page changes.
      </p>

      <h2>Usage</h2>
      <div className="mb-12">
      <h4>Basic Pagination</h4>
        <pre><code>
{`const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} />`}
        </code></pre>
        <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>

      <div className="mb-12">
        <h4>Circle Pagination</h4>
        <pre><code>
{`const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} circle />`}
        </code></pre>
        <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} circle />
      </div>

      <div className="mb-12">
        <h4>Outline Pagination</h4>
        <pre><code>
{`const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} outline />`}
        </code></pre>
        <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} outline />
      </div>

      <div className="mb-12">
        <h4>Circle + Outline Pagination</h4>
        <pre><code>
{`const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} circle outline /> `}
        </code></pre>
        <Pagination pages={10} currentPage={currentPage} onPageChange={handlePageChange} circle outline />
      </div>

      <h3>Props</h3>
      <ul>
        <li>
          <strong>pages</strong>: The total number of pages.
        </li>
        <li>
          <strong>currentPage</strong>: The current active page.
        </li>
        <li>
          <strong>onPageChange</strong>: A callback function that is triggered
          when a page is changed.
        </li>
        <li>
          <strong>circle</strong>: If <code>true</code>, enables circle pagination style.
        </li>
        <li>
          <strong>outline</strong>: If <code>true</code>, enables outline pagination style.
        </li>
      </ul>
    </div>
  );
};

export default PaginationDocumentation;
