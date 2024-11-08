import React from "react";
import { Form } from "react-bootstrap";

const FormSelectDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Form Select Documentation</h1>

            <h2>Form Select</h2>

            <div className="mb-12">
                <h4>Select Default</h4>
                <pre><code>
{`<Form.Select aria-label="Default select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </Form.Select>`}
                </code></pre>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </Form.Select>
            </div>

            <div className="mb-12">
                <h4>Select Sizing</h4>
                <pre><code>
{`<Form.Select size="lg">
    <option>Large select</option>
  </Form.Select>
  <Form.Select>
    <option>Default select</option>
  </Form.Select>
  <Form.Select size="sm">
    <option>Small select</option>
  </Form.Select>`}
                </code></pre>
                <Form.Select size="lg">
                    <option>Large select</option>
                </Form.Select>
                <br />
                <Form.Select>
                    <option>Default select</option>
                </Form.Select>
                <br />
                <Form.Select size="sm">
                    <option>Small select</option>
                </Form.Select>
            </div>

            <div className="mb-12">
                <h4>Select Disabled</h4>
                <pre><code>
{`<Form.Select aria-label="Default select example" disabled>
    <option>Open this select menu</option>
    <option value="1">One</option>
  </Form.Select>`}
                </code></pre>
                <Form.Select aria-label="Default select example" disabled>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                </Form.Select>
            </div>
        </div>
    )
}

export default FormSelectDocumentation;