import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '../components/Card';
import Button from '../components/Button';

const CardDocumentation: React.FC = () => {
  return (
    <div className='container  mt-4'>
      <h1>Card Component Documentation</h1>

      <div className='mb-12'>
        <h4>Basic Card</h4>
        <pre><code>
{`<Card>
    <CardHeader>Basic Card Header</CardHeader>
    <CardBody>This is a basic card body</CardBody>
    <CardFooter>Basic Card Footer</CardFooter>
  </Card>`}
        </code></pre>
        <Card>
          <CardHeader>Basic Card Header</CardHeader>
          <CardBody>This is a basic card body</CardBody>
          <CardFooter>Basic Card Footer</CardFooter>
        </Card>
      </div>

      <div className='mb-12'>
        <h4>Card with Shadow</h4>
        <pre><code>
{`<Card shadow>
    <CardHeader>Shadow Card Header</CardHeader>
    <CardBody>This card has a shadow</CardBody>
    <CardFooter>Shadow Card Footer</CardFooter>
  </Card>`}
        </code></pre>
        <Card shadow>
          <CardHeader>Shadow Card Header</CardHeader>
          <CardBody>This card has a shadow</CardBody>
          <CardFooter>Shadow Card Footer</CardFooter>
        </Card>
      </div>

      <div className='mb-12'>
        <h4>Borderless Card</h4>
        <pre><code>
{`<Card borderless>
    <CardHeader>Borderless Card Header</CardHeader>
    <CardBody>This card has no borders</CardBody>
    <CardFooter>Borderless Card Footer</CardFooter>
  </Card>`}
        </code></pre>
        <Card borderless>
          <CardHeader>Borderless Card Header</CardHeader>
          <CardBody>This card has no borders</CardBody>
          <CardFooter>Borderless Card Footer</CardFooter>
        </Card>
      </div>

      <div className='mb-12'>
        <h4>Dashed Border Card</h4>
        <pre><code>
{`<Card dashed>
    <CardHeader>Dashed Border Card Header</CardHeader>
    <CardBody>This card has dashed borders</CardBody>
    <CardFooter>Dashed Border Card Footer</CardFooter>
  </Card>`}
        </code></pre>
        <Card dashed>
          <CardHeader>Dashed Border Card Header</CardHeader>
          <CardBody>This card has dashed borders</CardBody>
          <CardFooter>Dashed Border Card Footer</CardFooter>
        </Card>
      </div>

      <div className='mb-12'>
        <h4>Flush Card (No Header/Footer Borders)</h4>
        <pre><code>
{`<Card flush>
    <CardHeader>Flush Card Header</CardHeader>
    <CardBody>This card has no header or footer borders</CardBody>
    <CardFooter>Flush Card Footer</CardFooter>
  </Card>`}
        </code></pre>
        <Card flush>
          <CardHeader>Flush Card Header</CardHeader>
          <CardBody>This card has no header or footer borders</CardBody>
          <CardFooter>Flush Card Footer</CardFooter>
        </Card>
      </div>

      <div className='mb-12'>
        <h4>Example Card</h4>
        <pre><code>
{`<Card>
    <CardHeader><b>Example Card</b></CardHeader>
    <CardBody>
      <img src='../media/illustrations/misc/upgrade.svg' />
      <h1>Title Content Card Here</h1>
      <p>This is Content Description</p>
      <Button className='mx-1' variant='secondary' isLight>Close</Button>
      <Button className='mx-1' variant='primary'>Success Button</Button>
    </CardBody>
    <CardFooter><b>Footer</b></CardFooter>
  </Card>`}
        </code></pre>
        <Card>
          <CardHeader><b>Example Card</b></CardHeader>
          <CardBody>
            <img src='../media/illustrations/misc/upgrade.svg' />
            <h1>Title Content Card Here</h1>
            <p>This is Content Description</p>
            <Button className='mx-1' variant='danger' outline>Close</Button>
            <Button className='mx-1' variant='primary'>Success Button</Button>
          </CardBody>
          <CardFooter><b>Footer</b></CardFooter>
        </Card>
      </div>

      <div className='mb-12'>
        <h4>Card with color</h4>
        <pre><code>
{`<div className='row mb-4'>
    <div className="col-3">
      <Card variant='primary' borderless>
        <CardBody><b>Primary</b></CardBody>
      </Card>
    </div>
    <div className="col-3">
      <Card variant='secondary' borderless>
        <CardBody><b>Secondary</b></CardBody>
      </Card>
    </div>
    <div className="col-3">
      <Card variant='success' borderless>
        <CardBody><b>Success</b></CardBody>
      </Card>
    </div>
    <div className="col-3">
      <Card variant='danger' borderless>
        <CardBody><b>Danger</b></CardBody>
      </Card>
    </div>
  </div>

  <div className="row">
    <div className="col-3">
      <Card variant='warning' borderless>
        <CardBody><b>Warning</b></CardBody>
      </Card>
    </div>
    <div className='col-3'>
      <Card variant='info' borderless>
        <CardBody><b>Info</b></CardBody>
      </Card>
    </div>
    <div className='col-3'>
      <Card variant='light' borderless>
        <CardBody><b>Light</b></CardBody>
      </Card>
    </div>
    <div className="col-3">
      <Card variant='dark' borderless>
        <CardBody><b>Dark</b></CardBody>
      </Card>
    </div>
  </div>`}
        </code></pre>
        <div className='row mb-4'>
          <div className="col-3">
            <Card variant='primary' borderless>
              <CardBody><b>Primary</b></CardBody>
            </Card>
          </div>
          <div className="col-3">
            <Card variant='secondary' borderless>
              <CardBody><b>Secondary</b></CardBody>
            </Card>
          </div>
          <div className="col-3">
            <Card variant='success' borderless>
              <CardBody><b>Success</b></CardBody>
            </Card>
          </div>
          <div className="col-3">
            <Card variant='danger' borderless>
              <CardBody><b>Danger</b></CardBody>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <Card variant='warning' borderless>
              <CardBody><b>Warning</b></CardBody>
            </Card>
          </div>
          <div className='col-3'>
            <Card variant='info' borderless>
              <CardBody><b>Info</b></CardBody>
            </Card>
          </div>
          <div className='col-3'>
            <Card variant='light' borderless>
              <CardBody><b>Light</b></CardBody>
            </Card>
          </div>
          <div className="col-3">
            <Card variant='dark' borderless>
              <CardBody><b>Dark</b></CardBody>
            </Card>
          </div>
        </div>

      </div>

      <h4>Suggest</h4>
      <ul>
        <li><code>CardHeader</code> : Card Header is used as the head/top of the card such as title, header, and others.</li>
        <li><code>CardBody</code> : Card Body is used as the content part of the card, such as data content, forms, and others.</li>
        <li><code>CardFooter</code> : Card Footer is used as the footer of the card which contains supplementary data.</li>
        <li>You can apply all parts of the card or use them as needed.</li>
      </ul>
    </div>
  );
};

export default CardDocumentation;
