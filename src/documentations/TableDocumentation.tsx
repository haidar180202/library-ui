import React from 'react';
import Table from '../components/Table';

const TableDocumentation: React.FC = () => {
  // Example columns and data for table documentation
  const columns = [
    { header: 'Name', accessor: 'name', className: 'text-left' },
    { header: 'Age', accessor: 'age', className: 'text-center' },
    { header: 'Occupation', accessor: 'occupation', className: 'text-right' },
  ];
  
  const data = [
    { name: 'John Doe', age: 30, occupation: 'Developer' },
    { name: 'Jane Smith', age: 25, occupation: 'Designer' },
    { name: 'Michael Brown', age: 35, occupation: 'Manager' },
  ];

  return (
    <div className="container mt-4 table-documentation">
      <h2 className="mb-4">Table Component Documentation</h2>

      {/* Usage Example */}
      <section className="mb-5">
        <h3>Usage Example</h3>
        <p>The table component can be used to display data in a tabular format. Here's an example:</p>
        <div className="table-responsive">
          <Table columns={columns} data={data} classCard='table-bordered'/>
        </div>
        <p>This table displays data for names, ages, and occupations.</p>
      </section>

      {/* Props Explanation */}
      <section className="mb-5">
        <h3>Props</h3>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Prop Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>columns</code></td>
              <td>Array&lt;{`{ header: string; accessor: string; className?: string; }`}&gt;</td>
              <td>An array of column objects where each object contains a header name, an accessor for the data, and an optional class name for styling.</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>data</code></td>
              <td>Record&lt;string, any&gt;[]</td>
              <td>An array of data objects where each key corresponds to a column accessor.</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>footerContent</code></td>
              <td>React.ReactNode</td>
              <td>Optional content to be displayed in the footer of the table.</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>headerClassName</code></td>
              <td>string</td>
              <td>Optional class for styling the table header (<code>&lt;thead&gt;</code>).</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>bodyClassName</code></td>
              <td>string</td>
              <td>Optional class for styling the table body (<code>&lt;tbody&gt;</code>).</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>footerClassName</code></td>
              <td>string</td>
              <td>Optional class for styling the table footer (<code>&lt;tfoot&gt;</code>).</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* How to Use */}
      <section>
        <h3>How to Use</h3>
        <p>Below is an example of how to use the <code>Table</code> component in your project:</p>
        <pre className="bg-light p-3 rounded">
          <code>{`
import React from 'react';
import Table from './components/Table';

const columns = [
  { header: 'Name', accessor: 'name', className: 'text-left' },
  { header: 'Age', accessor: 'age', className: 'text-center' },
  { header: 'Occupation', accessor: 'occupation', className: 'text-right' },
];

const data = [
  { name: 'John Doe', age: 30, occupation: 'Developer' },
  { name: 'Jane Smith', age: 25, occupation: 'Designer' },
  { name: 'Michael Brown', age: 35, occupation: 'Manager' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>User Information</h1>
      <Table 
        columns={columns} 
        data={data} 
        footerContent="Footer content goes here"
        headerClassName="table-dark"
        bodyClassName="table-light"
        footerClassName="table-secondary"
      />
    </div>
  );
};

export default App;
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default TableDocumentation;
