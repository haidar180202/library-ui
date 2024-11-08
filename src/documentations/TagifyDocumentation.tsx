import React from 'react';
import Tagify from '../components/Tagify'

const TagifyDocumentation: React.FC = () => {
  return (
    <div className='container mt-4'>
        <h1>Tagify Component Documentation</h1>

        <div className='mb-12'>
            <h4>Default Tagify</h4>
            <pre><code>
                {`<Tagify />`}
            </code></pre>
            <Tagify />
        </div>

        <div className='mb-12'>
            <h4>Small Tagify</h4>
            <pre><code>
                {`<Tagify size="sm" />`}
            </code></pre>
            <Tagify size="sm" />
        </div>

        <div className='mb-12'>
            <h4>Large Tagify</h4>
            <pre><code>
                {`<Tagify size="lg" />`}
            </code></pre>
            <Tagify size="lg" />
        </div>
    </div>
  );
};

export default TagifyDocumentation;
