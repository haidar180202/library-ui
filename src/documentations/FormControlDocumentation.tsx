import React from "react";
import { Form } from "react-bootstrap";

const FormControlDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Form Control Documentation</h1>

            <h2>Form Control</h2>

            <div className="mb-12">
                <h4>Form Sizing</h4>
                <pre><code>
{`<Form.Control size="lg" type="text" placeholder="Large Text" />
  <Form.Control type="text" placeholder="Normal Text" />
  <Form.Control size="sm" type="text" placeholder="Small Text" />`}
                </code></pre>
                <Form.Control size="lg" type="text" placeholder="Large Text" />
                <br />
                <Form.Control type="text" placeholder="Normal Text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small Text" />
            </div>

            <div className="mb-12">
                <h4>Form Disabled and Readonly</h4>
                <pre><code>
{`<Form.Control type="text" placeholder="Disabled" disabled />
  <Form.Control type="text" placeholder="Readonly" readOnly />`}
                </code></pre>
                <Form.Control type="text" placeholder="Disabled" disabled />
                <br />
                <Form.Control type="text" placeholder="Readonly" readOnly />
            </div>

            <div className="mb-12">
                <h2>File Input</h2>
                <h4>Default file input</h4>
                <pre><code>
{`<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" />
  </Form.Group>`}
                </code></pre>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <br />
                <h4>Disabled file input example</h4>
                <pre><code>
{`<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Disabled file input example</Form.Label>
    <Form.Control type="file" disabled />
  </Form.Group>`}
                </code></pre>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Disabled file input example</Form.Label>
                    <Form.Control type="file" disabled />
                </Form.Group>
                <br />
                <h4>Disabled file input example</h4>
                <pre><code>
{`<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Small file input example</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>`}
                </code></pre>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control type="file" size="sm" />
                </Form.Group>
                <br />
                <h4>Disabled file input example</h4>
                <pre><code>
{`<Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Large file input example</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>`}
                </code></pre>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
            </div>

            <div className="mb-12">
                <h2>Form with text</h2>
                <pre><code>
{`<Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
    <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long.
  </Form.Text>`}
                </code></pre>
                <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long.
                </Form.Text>
            </div>

            <div className="mb-12">
                <h2>Form Input Type</h2>
                <pre><code>
{`<Form.Label>Text</Form.Label>
  <Form.Control type="text" />`}
                </code></pre>
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" />
                <br /><br />
                <pre><code>
{`<Form.Label>Password</Form.Label>
  <Form.Control type="password" />`}
                </code></pre>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
                <br /><br />
                <pre><code>
{`<Form.Label>Email</Form.Label>
  <Form.Control type="email" />`}
                </code></pre>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
                <br /><br />
                <pre><code>
{`<Form.Label>Example textarea</Form.Label>
  <Form.Control as="textarea" rows={3} />`}
                </code></pre>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <br /><br />
                <pre><code>
{`<Form.Label>Number</Form.Label>
  <Form.Control type="number" />`}
                </code></pre>
                <Form.Label>Number</Form.Label>
                <Form.Control type="number" />
            </div>

        </div>
    )
}

export default FormControlDocumentation;