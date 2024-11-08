import React from 'react';
import Popover from '../components/Popover';
import Separator from '../components/Separator';

const PopoverDocumentation: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Popover Component Documentation</h1>
      <p>
        The <code>Popover</code> component is a reusable button that triggers a popover with content on click or focus.
      </p>

      <h2>Usage</h2>

      <h4>Basic Popover</h4>
      <div className="mb-4">
        <pre>
          <code>
{`<Popover
  buttonText="Click Me"
  popoverContent="This is the popover content!"
  placement="bottom"
/>`}
          </code>
        </pre>
        <Popover
          buttonText="Click Me"
          popoverContent="This is the popover content!"
          placement="bottom"
        />
      </div>

      <h4>Custom Styling with Metronic</h4>
      <div className="mb-4">
        <pre>
          <code>
{`<Popover
  buttonText="Styled Button"
  popoverContent="Hello from Metronic!"
  placement="right"
  buttonClass="btn btn-light btn-hover-primary"
/>`}
          </code>
        </pre>
        <Popover
          buttonText="Styled Button"
          popoverContent="Hello from Metronic!"
          placement="right"
          buttonClass="btn btn-light btn-hover-primary"
        />
      </div>

      <Separator />

      <h2>Props</h2>
      <ul>
          <li><code>buttonText: string</code> (required) — Button label.</li>
          <li><code>popoverContent: string</code> (required) — Popover content.</li>
          <li><code>placement: 'top' | 'bottom' | 'left' | 'right'</code> (optional) — Default is <code>top</code>.</li>
          <li><code>buttonClass: string</code> (optional) — Custom button styling.</li>
        </ul>
    </div>
  );
};

export default PopoverDocumentation;
