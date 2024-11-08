import React from 'react';
import Button from '../components/Button';
import { showAlert } from '../components/alert/Alert';


const AlertDocumentation: React.FC = () => {

  return (
    <div className="container mt-4">
      <h1>Alert Component Documentation</h1>
      <p>The <code>Alert</code> component is a reusable button element that supports various configurations through props.</p>

      <h1>Usage</h1>

      <h2>Default Alert</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info")\nshowAlert("Lorem Ipsum dolor sit amet", "error")\nshowAlert("Lorem Ipsum dolor sit amet", "success")`}</code></pre>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info")}>Info</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "error")}>error</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "success")}>success</Button>
      </div>

      <h2>Alert Position</h2>
      <div className="mb-12">
        <pre><code>{`showAlert("Lorem Ipsum dolor sit amet", "info", 'top')`}</code></pre>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info", "top")}>top</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info", "bottom")}>bottom</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info", 'top-left')}>top-left</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info", 'top-right')}>top-right</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info", 'bottom-left')}>bottom-left</Button>
        <Button className='mx-1' onClick={() => showAlert("Lorem Ipsum dolor sit amet", "info", 'bottom-right')}>bottom-right</Button>
      </div>

    </div>
  );
};

export default AlertDocumentation;
