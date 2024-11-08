import React from 'react';
import Accordion from '../components/Accordion'; // Adjust path to your Accordion component
import { Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap

const AccordionDocumentation: React.FC = () => {
  const accordionItems = [
    {
      id: 1,
      title: 'Accordion Item #1',
      content: (
        <div>
          <p>This is custom content for the first item. You can add any elements here.</p>
          <Button variant="primary" onClick={() => alert('Button 1 clicked')}>Click Me</Button>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Accordion Item #2',
      content: (
        <div>
          <p>This is custom content for the second item.</p>
        </div>
      ),
    }
  ];

  return (
    <div className="container">
      <h1>Accordion Documentation</h1>

      <div className="mb-12">
        <h2>Default Accordion</h2>
        <pre><code>
{`<Accordion items={[
    {
        id: 1,
        title: 'Accordion Item #1',
        content: (
            <div>
            <p>This is custom content for the first item. You can add any elements here.</p>
            <Button variant="primary" onClick={() => alert('Button 1 clicked')}>Click Me</Button>
            </div>
        ),
    },
    {
        id: 2,
        title: 'Accordion Item #2',
        content: (
            <div>
            <p>This is custom content for the second item.</p>
            </div>
        ),
    },
]} />`}
        </code></pre>
        <Accordion items={accordionItems} />
      </div>

      <div className="mb-12">
      <h2>Borderless Accordion</h2>
      <pre><code>
      {`<Accordion items={[
    {
        id: 1,
        title: 'Accordion Item #1',
        content: (
            <div>
            <p>This is custom content for the first item. You can add any elements here.</p>
            <Button variant="primary" onClick={() => alert('Button 1 clicked')}>Click Me</Button>
            </div>
        ),
    },
    {
        id: 2,
        title: 'Accordion Item #2',
        content: (
            <div>
            <p>This is custom content for the second item.</p>
            </div>
        ),
    },
]} borderless />`}
      </code></pre>
      <Accordion items={accordionItems} borderless />
      </div>

      <h2>Props</h2>
      <ul>
        <li><code>borderless</code>: Accordion without border on the edge</li>
      </ul>
    </div>
  );
};

export default AccordionDocumentation;
