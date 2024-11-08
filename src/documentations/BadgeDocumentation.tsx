import React from 'react';
import Badge from '../components/Badge';
import Separator from '../components/Separator';
import { KTIcon } from '../_metronic/helpers';


const BadgeDocumentation: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Badge Component Documentation</h1>
      <p>
        The <code>Badge</code> component is a reusable badge element that supports various configurations through props.
      </p>

      <h2>Usage</h2>
      <h4>Badge Variants</h4>
      <div className="mb-12">
        <pre><code>
{`<Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info"> Info</Badge>
  <Badge variant="light"> Light</Badge>
  <Badge variant="dark"> Dark</Badge>`}
        </code>
        </pre>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info"> Info</Badge>
        <Badge variant="light"> Light</Badge>
        <Badge variant="dark"> Dark</Badge>
      </div>

      <div className="mb-12">
        <h4>Outline Badge</h4>
        <pre><code>
{`<Badge variant="primary" outline>Outline Primary</Badge>
  <Badge variant="secondary" outline>Secondary</Badge>
  <Badge variant="success" outline>Success</Badge>
  <Badge variant="danger" outline>Danger</Badge>
  <Badge variant="warning" outline>Warning</Badge>
  <Badge variant="info" outline> Info</Badge>
  <Badge variant="light" outline> Light</Badge>
  <Badge variant="dark" outline> Dark</Badge>
`}
        </code>
        </pre>
        <Badge variant="primary" outline>Primary</Badge>
        <Badge variant="secondary" outline>Secondary</Badge>
        <Badge variant="success" outline>Success</Badge>
        <Badge variant="danger" outline>Danger</Badge>
        <Badge variant="warning" outline>Warning</Badge>
        <Badge variant="info" outline> Info</Badge>
        <Badge variant="light" outline> Light</Badge>
        <Badge variant="dark" outline> Dark</Badge>
      </div>

      <br />
      <Separator />
      <br />

      <h2>Style Badge</h2>

      <div className="mb-12">
        <h4>Sizing Badge</h4>
        <pre><code>
{`<Badge variant="primary" size="sm">Small</Badge>
  <Badge variant="primary" size="lg">Large</Badge>
  <Badge variant="primary" size="xl">X Large</Badge>`}
        </code>
        </pre>
        <Badge variant="primary" size="sm">Small</Badge>
        <Badge variant="primary" size="lg">Large</Badge>
        <Badge variant="primary" size="xl">X Large</Badge>
      </div>

      <div className="mb-12">
        <h4>Shaping Badge</h4>
        <pre><code>
{`<Badge variant="primary" shape="circle">C</Badge>
  <Badge variant="primary" shape="square">S</Badge>`}
        </code>
        </pre>
        <Badge variant="primary" shape="circle">C</Badge>
        <Badge variant="success" shape="square">S</Badge>
      </div>

      <div className="mb-12">
        <h4>Badge with Icon</h4>
        <pre><code>
        {`<Badge variant="primary">Notification <KTIcon iconName='notification' className='fs-2' /></Badge>`}
        </code>
        </pre>
        <Badge variant="primary">Notification <KTIcon iconName='notification' className='fs-2' /></Badge>
      </div>

      <br />
      <Separator />
      <br />

      <h2>Props</h2>
      <ul>
        <li><code>variant</code>: The color variant of the badge (e.g., primary, secondary, success).</li>
        <li><code>size</code>: The size of the badge (sm, lg).</li>
        <li><code>outline</code>: Adds a border and makes the background transparent.</li>
        <li><code>shape</code>: The shape of the badge (circle, square).</li>
        <li><code>className</code>: Additional CSS classes for custom styling.</li>
        <li><code>children</code>: The content inside the badge (e.g., text, number).</li>
      </ul>
    </div>
  );
};

export default BadgeDocumentation;
