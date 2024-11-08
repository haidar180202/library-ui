import { Form, FormControl, InputGroup } from "react-bootstrap"
import Button from "../components/Button";

const InputGroupDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Input Group</h1>

            <div className="mb-12">
                <h4>Input Group Basic</h4>
                <pre><code>
{`<InputGroup className="mb-3">
    <InputGroup.Text id="basic">@</InputGroup.Text>
    <Form.Control placeholder="Username" aria-describedby="basic" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text>Rp.</InputGroup.Text>
    <Form.Control placeholder="Rupiah Amount" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text>With Textarea</InputGroup.Text>
    <Form.Control as="textarea" aria-label="With Textarea" />
  </InputGroup>`}
                </code></pre>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic">@</InputGroup.Text>
                    <Form.Control placeholder="Username" aria-describedby="basic" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Rp.</InputGroup.Text>
                    <Form.Control placeholder="Rupiah Amount" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>With Textarea</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With Textarea" />
                </InputGroup>
            </div>

            <div className="mb-12">
                <h4>Input Group Sizing</h4>
                <pre><code>
{`<InputGroup size="sm" className="mb-3">
    <InputGroup.Text>Small</InputGroup.Text>
    <Form.Control placeholder="Small" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text>Default</InputGroup.Text>
    <Form.Control placeholder="Default" />
  </InputGroup>
  <InputGroup size="lg" className="mb-3">
    <InputGroup.Text>Large</InputGroup.Text>
    <Form.Control placeholder="Large" />
  </InputGroup>`}
                </code></pre>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text>Small</InputGroup.Text>
                    <Form.Control placeholder="Small" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Default</InputGroup.Text>
                    <Form.Control placeholder="Default" />
                </InputGroup>
                <InputGroup size="lg" className="mb-3">
                    <InputGroup.Text>Large</InputGroup.Text>
                    <Form.Control placeholder="Large" />
                </InputGroup>
            </div>

            <div className="mb-12">
                <h4>Multiple Input</h4>
                <pre><code>
{`<InputGroup className="mb-3">
    <InputGroup.Text>First and Last Name</InputGroup.Text>
    <FormControl placeholder="First Name" />
    <FormControl placeholder="Last Name" />
  </InputGroup>`}
                </code></pre>
                <InputGroup className="mb-3">
                    <InputGroup.Text>First and Last Name</InputGroup.Text>
                    <FormControl placeholder="First Name" />
                    <FormControl placeholder="Last Name" />
                </InputGroup>
            </div>

            <div className="mb-12">
                <h4>Multiple Addons</h4>
                <pre><code>
{`<InputGroup className="mb-3">
    <InputGroup.Text>Rp.</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <FormControl placeholder="Rupiah Amount" />
  </InputGroup>`}
                </code></pre>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Rp.</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                    <FormControl placeholder="Rupiah Amount" />
                </InputGroup>
            </div>

            <div className="mb-12">
                <h4>Button Addons</h4>
                <pre><code>
{`<InputGroup className="mb-3">
    <FormControl placeholder="Example" aria-describedby="button-addon1" />
    <Button variant="primary" id="button-addon1">Button</Button>
  </InputGroup>`}    
                </code></pre>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Example" aria-describedby="button-addon1" />
                    <Button variant="primary" id="button-addon1">Button</Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default InputGroupDocumentation;