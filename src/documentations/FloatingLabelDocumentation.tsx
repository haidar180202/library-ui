import { FloatingLabel, Form } from "react-bootstrap";

const FloatingLabelDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Floating Label Documentation</h1>
            <div className="mb-12">
                <h4>Floating Label Basic</h4>
                <pre><code>
{`<FloatingLabel label="Email Address">
  <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>`}
                </code></pre>
                <FloatingLabel label="Email Address">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </div>

            <div className="mb-12">
                <h4>Floating Label Type</h4>
                <pre><code>
{`<FloatingLabel className="mb-3" label="Username">
    <Form.Control type="text" placeholder="Username" />
  </FloatingLabel>
  <FloatingLabel className="mb-3" label="Password">
    <Form.Control type="password" placeholder="*****"/>
  </FloatingLabel>
  <FloatingLabel className="mb-3" label="Email Address">
    <Form.Control type="email" placeholder="email@example.com" />
  </FloatingLabel>
  <FloatingLabel className="mb-3" label="Example Textarea">
    <Form.Control as="textarea" placeholder="Textarea Example" rows={3} />
  </FloatingLabel>`}
                </code></pre>
                <FloatingLabel className="mb-3" label="Username">
                    <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
                <FloatingLabel className="mb-3" label="Password">
                    <Form.Control type="password" placeholder="*****"/>
                </FloatingLabel>
                <FloatingLabel className="mb-3" label="Email Address">
                    <Form.Control type="email" placeholder="email@example.com" />
                </FloatingLabel>
                <FloatingLabel className="mb-3" label="Example Textarea">
                    <Form.Control as="textarea" placeholder="Textarea Example" rows={3} />
                </FloatingLabel>
            </div>
            <div className="mb-12">
                <h4>Floating Label Selects</h4>
                <pre><code>
{`<FloatingLabel label="Select an Options">
    <Form.Select>
        <option>Open this Select Menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
  </FloatingLabel>`}
                </code></pre>
                <FloatingLabel label="Select an Options">
                    <Form.Select>
                        <option>Open this Select Menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
        </div>
    )
}

export default FloatingLabelDocumentation;