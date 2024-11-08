import React from 'react';
import Tooltip from '../components/tooltip/Tooltip';


const TooltipDocumentation: React.FC = () => {

  return (
    <div className="container mt-4">
      <h1>Tooltip Component Documentation</h1>
      <p>The <code>Tooltip</code> component is a reusable button element that supports various configurations through props.</p>

      <h1>Usage</h1>

      <h2>Default Tooltip</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info")\nshowAlert("Lorem Ipsum dolor sit amet", "error")\nshowAlert("Lorem Ipsum dolor sit amet", "success")`}</code></pre>
        <div>
            Hover over this <Tooltip text="This is a tooltip!" position='bottom'><div className='blue-600'>WORD</div></Tooltip> to see the tooltip.
        </div>
      </div>
    </div>
  );
};

export default TooltipDocumentation;
