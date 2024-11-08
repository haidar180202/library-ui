import React from 'react';
import Separator from '../components/Separator';

const SeparatorDocumentation: React.FC = () => {
  return (
    <div className='container mt-4'>
      <h1>Separator Component Documentation</h1>
      
      <div className="mb-12">
        <h4>Basic Separator</h4>
        <pre><code>
          {`<Separator />`}
        </code></pre>
        <Separator />
      </div>

      <div className="mb-12">
        <h4>Dotted Separator</h4>
        <pre><code>
          {`<Separator type="dotted" />`}
        </code></pre>
        <Separator type="dotted" />
      </div>

      <div className="mb-12">
        <h4>Dashed Separator</h4>
        <pre><code>
          {`<Separator type="dashed" />`}
        </code></pre>
        <Separator type="dashed" />
      </div>

      <div className="mb-12">
        <h4>Separator with Content</h4>
        <pre><code>
{`<Separator content={true}>
    <span>Separator with text</span>
  </Separator>`}
        </code></pre>
        <Separator content={true}>
          <span>Separator with text</span>
        </Separator>
      </div>

      <div className="mb-12">
        <h4>Vertical Separator</h4>
        <pre><code>
          {`<Separator vertical={true} />`}
        </code></pre>
        <Separator vertical={true} />
      </div>

      <div className="mb-12">
        <h4>Vertical Dotted Separator</h4>
        <pre><code>
          {`<Separator type="dotted" vertical={true} />`}
        </code></pre>
        <Separator type="dotted" vertical={true} />
      </div>

      <div className="mb-12">
        <h4>Vertical Dashed Separator</h4>
        <pre><code>
          {`<Separator type="dashed" vertical={true} />`}
        </code></pre>
        <Separator type="dashed" vertical={true} />
      </div>

      <div className="mb-12">
        <h4>Vertical Separator with Content</h4>
        <pre><code>
{`<Separator vertical={true} content={true}>
    <span>Vertical Separator with text</span>
  </Separator>`}
        </code></pre>
        <Separator vertical={true} content={true}>
          <span>Vertical Separator with text</span>
        </Separator>
      </div>
    </div>
  );
};

export default SeparatorDocumentation;
