import React from 'react';
import Button from '../components/Button';
import Separator from '../components/Separator';
import Badge from '../components/Badge';
import { KTIcon } from '../_metronic/helpers';


const ButtonDocumentation: React.FC = () => {
  const handleClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked`);
  };

  return (
    <div className="container mt-4">
      <h1>Button Component Documentation</h1>
      <p>The <code>Button</code> component is a reusable button element that supports various configurations through props.</p>

      <h1>Usage</h1>

      <h2>Button Variants</h2>

      <div className="mb-12">
        <h4>Primary Button</h4>
        <pre><code>
{`<Button variant="primary" size="sm" onClick={() => console.log('clicked')}> Primary Button</Button>
  <Button variant="secondary" size="sm" onClick={() => console.log('clicked')}>Secondary</Button>
  <Button variant="success" size="sm" onClick={() => console.log('clicked')}>Success</Button>
  <Button variant="danger" size="sm" onClick={() => console.log('clicked')}>Danger</Button>
  <Button variant="warning" size="sm" onClick={() => console.log('clicked')}>Warning</Button>
  <Button variant="info" size="sm" onClick={() => console.log('clicked')}>Info</Button>
  <Button variant="light" size="sm" onClick={() => console.log('clicked')}>Light</Button>
  <Button variant="dark" size="sm" onClick={() => console.log('clicked')}>Dark</Button>`}
        </code></pre>
        <Button className='mx-1' variant="primary" size="sm" onClick={() => console.log('clicked')}>Primary</Button>
        <Button className='mx-1' variant="secondary" size="sm" onClick={() => console.log('clicked')}>Secondary</Button>
        <Button className='mx-1' variant="success" size="sm" onClick={() => console.log('clicked')}>Success</Button>
        <Button className='mx-1' variant="danger" size="sm" onClick={() => console.log('clicked')}>Danger</Button>
        <Button className='mx-1' variant="warning" size="sm" onClick={() => console.log('clicked')}>Warning</Button>
        <Button className='mx-1' variant="info" size="sm" onClick={() => console.log('clicked')}>Info</Button>
        <Button className='mx-1' variant="light" size="sm" onClick={() => console.log('clicked')}>Light</Button>
        <Button className='mx-1' variant="dark" size="sm" onClick={() => console.log('clicked')}>Dark</Button>
      </div>

      <div className="mb-12">
        <h4>Light Button</h4>
        <pre><code>
{`<Button variant="primary" isLight size="sm" onClick={() => console.log('clicked')}>Primary</Button>
  <Button variant="secondary" isLight size="sm" onClick={() => console.log('clicked')}>Secondary</Button>
  <Button variant="success" isLight size="sm" onClick={() => console.log('clicked')}>Success</Button>
  <Button variant="danger" isLight size="sm" onClick={() => console.log('clicked')}>Danger</Button>
  <Button variant="warning" isLight size="sm" onClick={() => console.log('clicked')}>Warning</Button>
  <Button variant="info" isLight size="sm" onClick={() => console.log('clicked')}>Info</Button>
  <Button variant="light" isLight size="sm" onClick={() => console.log('clicked')}>Light</Button>
  <Button variant="dark" isLight size="sm" onClick={() => console.log('clicked')}>Dark</Button>>`}
        </code></pre>
        <Button className='mx-1' variant="primary" isLight size="sm" onClick={() => console.log('clicked')}>Primary</Button>
        <Button className='mx-1' variant="secondary" isLight size="sm" onClick={() => console.log('clicked')}>Secondary</Button>
        <Button className='mx-1' variant="success" isLight size="sm" onClick={() => console.log('clicked')}>Success</Button>
        <Button className='mx-1' variant="danger" isLight size="sm" onClick={() => console.log('clicked')}>Danger</Button>
        <Button className='mx-1' variant="warning" isLight size="sm" onClick={() => console.log('clicked')}>Warning</Button>
        <Button className='mx-1' variant="info" isLight size="sm" onClick={() => console.log('clicked')}>Info</Button>
        <Button className='mx-1' variant="light" isLight size="sm" onClick={() => console.log('clicked')}>Light</Button>
        <Button className='mx-1' variant="dark" isLight size="sm" onClick={() => console.log('clicked')}>Dark</Button>
      </div>

      <div className="mb-12">
        <h4>Outline Button</h4>
        <pre><code>
{`<Button variant="primary" outline size="sm" onClick={() => console.log('clicked')}>Primary</Button>
  <Button variant="secondary" outline size="sm" onClick={() => console.log('clicked')}>Secondary</Button>
  <Button variant="success" outline size="sm" onClick={() => console.log('clicked')}>Success</Button>
  <Button variant="danger" outline size="sm" onClick={() => console.log('clicked')}>Danger</Button>
  <Button variant="warning" outline size="sm" onClick={() => console.log('clicked')}>Warning</Button>
  <Button variant="info" outline size="sm" onClick={() => console.log('clicked')}>Info</Button>
  <Button variant="light" outline size="sm" onClick={() => console.log('clicked')}>Light</Button>
  <Button variant="dark" outline size="sm" onClick={() => console.log('clicked')}>Dark</Button>>`}
        </code></pre>
        <Button className='mx-1' variant="primary" outline size="sm" onClick={() => console.log('clicked')}>Primary</Button>
        <Button className='mx-1' variant="secondary" outline size="sm" onClick={() => console.log('clicked')}>Secondary</Button>
        <Button className='mx-1' variant="success" outline size="sm" onClick={() => console.log('clicked')}>Success</Button>
        <Button className='mx-1' variant="danger" outline size="sm" onClick={() => console.log('clicked')}>Danger</Button>
        <Button className='mx-1' variant="warning" outline size="sm" onClick={() => console.log('clicked')}>Warning</Button>
        <Button className='mx-1' variant="info" outline size="sm" onClick={() => console.log('clicked')}>Info</Button>
        <Button className='mx-1' variant="light" outline size="sm" onClick={() => console.log('clicked')}>Light</Button>
        <Button className='mx-1' variant="dark" outline size="sm" onClick={() => console.log('clicked')}>Dark</Button>
      </div>

      <br />
      <Separator />
      <br />

      <h2>Style Button</h2>

      <div className="mb-12">
        <h4>Sizing Button</h4>
        <pre><code>
{`<Button variant="primary" size="sm">Small</Button>
  <Button className='mx-1' variant="primary">Default</Button>
  <Button variant="primary" size="lg">Large</Button>`}
        </code>
        </pre>
        <Button className='mx-1' variant="primary" size="sm">Small</Button>
        <Button className='mx-1' variant="primary">Default</Button>
        <Button className='mx-1' variant="primary" size="lg">Large</Button>
      </div>
      <div className="mb-12">
        <h4>Button with Icon</h4>
        <pre><code>
{`<Button variant="primary" size="sm" onClick={() => handleClick('Primary')}>
    <KTIcon iconName='notification' className='fs-2' />
    Notification
  </Button>`}
        </code></pre>
        <Button variant="primary" size="sm" onClick={() => handleClick('Primary')}>
          <KTIcon iconName='notification' className='fs-2' />
          Notification
        </Button>
      </div>
      
      <div className="mb-12">
        <h4>Button with Badge</h4>
        <pre><code>
{`<Button variant="primary" size="sm" onClick={() => handleClick('Primary')}>
    Notification
    <Badge variant="primary">1</Badge>
  </Button>`}
        </code></pre>
        <Button variant="primary" size="sm" onClick={() => handleClick('Primary')}>
          Notification
          <Badge variant="primary">1</Badge>
        </Button>
      </div>

      <div className="mb-12">
        <h4>Button Icon</h4>
        <pre><code>
{`<Button variant="primary" size="sm" isIcon onClick={() => handleClick('Primary')}>
    <KTIcon iconName='star' className='fs-2' />
  </Button>`}
        </code></pre>
        <Button variant="primary" size="sm" isIcon onClick={() => handleClick('Primary')}>
        <KTIcon iconName='star' className='fs-4' />
        </Button>
      </div>

      <h2>Props</h2>
      <ul>
        <li><code>variant</code>: The color variant of the Button (e.g., primary, secondary, success).</li>
        <li><code>size</code>: The size of the Button (sm, lg).</li>
        <li><code>isLight</code>: The light color variant of the Button.</li>
        <li><code>isIcon</code>: The icon variant of the Button.</li>
        <li><code>onClick</code>: Action for the Button.</li>
        <li><code>className</code>: Additional CSS classes for custom styling.</li>
        <li><code>children</code>: The content inside the Button (e.g., text, number).</li>
      </ul>
    </div>
  );
};

export default ButtonDocumentation;
