import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const BreadcrumbDocumentation: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data' },
  ];

  return (
    <div className="container mt-4">
      <h1>Breadcrumb Component Documentation</h1>
      <p>
        The <code>Breadcrumb</code> component is a reusable component that allows for different breadcrumb styles and configurations.
      </p>

      <h2>Breadcrumb Usage</h2>

      <h3>Default Breadcrumb</h3>
      <pre><code>
{`const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data' },
  ];
  <Breadcrumb items={breadcrumbItems} />`}
      </code></pre>
      <Breadcrumb items={breadcrumbItems} />
      <br />
      <br />
      <h3>Line Style Breadcrumb</h3>
      <pre><code>
{`const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data' },
  ];
<Breadcrumb items={breadcrumbItems} variant="line" />`}
      </code></pre>
      <Breadcrumb items={breadcrumbItems} variant="line" />
      <br />
      <br />
      <h3>Dot Style Breadcrumb</h3>
      <pre><code>
{`const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data' },
  ];
  <Breadcrumb items={breadcrumbItems} variant="dot" />`}
      </code></pre>
      <Breadcrumb items={breadcrumbItems} variant="dot" />
      <br />
      <br />
      <h3>Separatorless Breadcrumb</h3>
      <pre><code>
{`const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data' },
  ];
<Breadcrumb items={breadcrumbItems} variant="separatorless" />`}
      </code></pre>
      <Breadcrumb items={breadcrumbItems} variant="separatorless" />
      <br />
      <br />
      <h3>Chevron Breadcrumb</h3>
      <pre><code>
{`const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data' },
];
<Breadcrumb items={breadcrumbItems} variant="chevron" />`}
      </code></pre>
      <Breadcrumb items={breadcrumbItems} variant="chevron" />
      <br />
      <br />
      <br />
      <h2>Props</h2>
      <ul>
        <li><code>items</code>: An array of breadcrumb items. Each item has a <code>label</code> and an optional <code>href</code>.</li>
        <li><code>variant</code>: The style variant of the breadcrumb (default, line, dot, separatorless).</li>
        <li><code>className</code>: Additional custom classes for styling.</li>
      </ul>
    </div>
  );
};

export default BreadcrumbDocumentation;
