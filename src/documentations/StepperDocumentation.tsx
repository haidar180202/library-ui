import React from 'react';
import Stepper from '../components/stepper/Stepper';


const StepperDocumentation: React.FC = () => {
    const steps = [
        {
            label: 'Step 1',
            content: <div>Content for Step 1</div>,
        },
        {
            label: 'Step 2',
            content: <div>Content for Step 2</div>,
        },
        {
            label: 'Step 3',
            content: <div>Content for Step 3</div>,
        },
        {
            label: 'Step 3',
            content: <div>Content for Step 3</div>,
        },
        {
            label: 'Step 3',
            content: <div>Content for Step 3</div>,
        },
        {
            label: 'Step 3',
            content: <div>Content for Step 3</div>,
        },
    ];

  return (
    <div className="container mt-4">
      <h1>Stepper Component Documentation</h1>
      <p>The <code>Stepper</code> component is a reusable button element that supports various configurations through props.</p>

      <h1>Usage</h1>

      <h2>Default Stepper</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info")\nshowAlert("Lorem Ipsum dolor sit amet", "error")\nshowAlert("Lorem Ipsum dolor sit amet", "success")`}</code></pre>
        <div>
            <Stepper steps={steps} orientation='horizontal'/>
        </div>
      </div>
      <h2>Default Stepper</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info")\nshowAlert("Lorem Ipsum dolor sit amet", "error")\nshowAlert("Lorem Ipsum dolor sit amet", "success")`}</code></pre>
        <div>
            <Stepper steps={steps} orientation='vertical'/>
        </div>
      </div>
      <h2>Default Stepper</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info")\nshowAlert("Lorem Ipsum dolor sit amet", "error")\nshowAlert("Lorem Ipsum dolor sit amet", "success")`}</code></pre>
        <div>
            <Stepper steps={steps} orientation='horizontal' showButtons={false}/>
        </div>
      </div>
      <h2>Default Stepper</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info")\nshowAlert("Lorem Ipsum dolor sit amet", "error")\nshowAlert("Lorem Ipsum dolor sit amet", "success")`}</code></pre>
        <div>
            <Stepper steps={steps} orientation='horizontal' showButtons={false} allowStepClick={false}/>
        </div>
      </div>
    </div>
  );
};

export default StepperDocumentation;
