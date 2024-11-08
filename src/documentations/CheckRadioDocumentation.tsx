import { Form } from "react-bootstrap";
import Separator from "../components/Separator";

const CheckRadioDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Checks, Radio, and Switches Documentation</h1>
            <br />
            <h2>Checkbox</h2>

            <div className="mb-12">
                <h4>Checkbox Default</h4>
                <pre><code>
                {`<Form.Check type="checkbox" id="default-checkbox" label="Default Checkbox" />`}
                </code></pre>
                <Form.Check type="checkbox" id="default-checkbox" label="Default Checkbox" />
            </div>

            <div className="mb-12">
                <h4>Checkbox Disabled</h4>
                <pre><code>
                {`<Form.Check type="checkbox" id="default-checkbox" label="Disabled Checkbox" disabled />`}
                </code></pre>
                <Form.Check type="checkbox" id="default-checkbox" label="Disabled Checkbox" disabled />
            </div>

            <div className="mb-12">
                <h4>Checkbox Inline</h4>
                <pre><code>
{`<Form.Check type="checkbox" name="inline-check" id="default-checkbox" label="Checkbox 1" inline />
  <Form.Check type="checkbox" name="inline-check" id="default-checkbox" label="Checkbox 2" inline />
  <Form.Check type="checkbox" name="inline-check" id="default-checkbox" label="Checkbox 3" inline disabled />`}
                </code></pre>
                <Form.Check type="checkbox" name="inline-check" id="default-checkbox" label="Checkbox 1" inline />
                <Form.Check type="checkbox" name="inline-check" id="default-checkbox" label="Checkbox 2" inline />
                <Form.Check type="checkbox" name="inline-check" id="default-checkbox" label="Checkbox 3" inline disabled />
            </div>

            <div className="mb-12">
                <h4>Checkbox Reverse</h4>
                <pre><code>
{`<Form.Check className="mb-3" name="reverse-check" type="checkbox" id="default-checkbox" label="Checkbox 1" reverse />
  <Form.Check className="mb-3" name="reverse-check" type="checkbox" id="default-checkbox" label="Checkbox 2" reverse />
  <Form.Check className="mb-3" name="reverse-check" type="checkbox" id="default-checkbox" label="Checkbox 3" reverse disabled />`}
                </code></pre>
                <Form.Check className="mb-3" name="reverse-check" type="checkbox" id="default-checkbox" label="Checkbox 1" reverse />
                <Form.Check className="mb-3" name="reverse-check" type="checkbox" id="default-checkbox" label="Checkbox 2" reverse />
                <Form.Check className="mb-3" name="reverse-check" type="checkbox" id="default-checkbox" label="Checkbox 3" reverse disabled />
            </div>

            <div className="mb-12">
                <h4>Checkbox Customizing</h4>
                <pre><code>
{`<Form.Check className="mb-3" type="checkbox">
    <Form.Check.Input type="checkbox" isValid/>
    <Form.Check.Label>Customizing Label Valid</Form.Check.Label>
    <Form.Control.Feedback type="valid">
        You did it!
    </Form.Control.Feedback>
  </Form.Check>

  <Form.Check className="mb-3" type="checkbox">
    <Form.Check.Input type="checkbox" isInvalid/>
    <Form.Check.Label>Customizing Label Invalid</Form.Check.Label>
    <Form.Control.Feedback type="invalid">
        You don't did it!
    </Form.Control.Feedback>
  </Form.Check>`}
                </code></pre>
                <Form.Check className="mb-3" type="checkbox">
                    <Form.Check.Input type="checkbox" isValid/>
                    <Form.Check.Label>Customizing Label Valid</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                        You did it!
                    </Form.Control.Feedback>
                </Form.Check>

                <Form.Check className="mb-3" type="checkbox">
                    <Form.Check.Input type="checkbox" isInvalid/>
                    <Form.Check.Label>Customizing Label Invalid</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                        You don't did it!
                    </Form.Control.Feedback>
                </Form.Check>
            </div>

            <Separator />
            <br />

            <h2>Radio</h2>
            <div className="mb-12">
                <h4>Radio Default</h4>
                <pre><code>
                {`<Form.Check type="radio" label="Default Radio" />`}
                </code></pre>
                <Form.Check type="radio" label="Default Radio" />
            </div>

            <div className="mb-12">
                <h4>Radio Disabled</h4>
                <pre><code>
                {`<Form.Check type="radio" label="Disabled Radio" disabled />`}
                </code></pre>
                <Form.Check type="radio" label="Disabled Radio" disabled />
            </div>

            <div className="mb-12">
                <h4>Radio Inline</h4>
                <pre><code>
{`<Form.Check type="radio" name="inline-radio" label="Radio 1" inline />
  <Form.Check type="radio" name="inline-radio" label="Radio 2" inline />
  <Form.Check type="radio" name="inline-radio" label="Radio 3" inline />`}
                </code></pre>
                <Form.Check type="radio" name="inline-radio" label="Radio 1" inline />
                <Form.Check type="radio" name="inline-radio" label="Radio 2" inline />
                <Form.Check type="radio" name="inline-radio" label="Radio 3" inline />
            </div>

            <div className="mb-12">
                <h4>Radio Reverse</h4>
                <pre><code>
{`<Form.Check className="mb-3" type="radio" name="reverse-radio" label="Radio 1" reverse />
  <Form.Check className="mb-3" type="radio" name="reverse-radio" label="Radio 2" reverse />
  <Form.Check className="mb-3" type="radio" name="reverse-radio" label="Radio 3" reverse disabled />`}
                </code></pre>
                <Form.Check className="mb-3" type="radio" name="reverse-radio" label="Radio 1" reverse />
                <Form.Check className="mb-3" type="radio" name="reverse-radio" label="Radio 2" reverse />
                <Form.Check className="mb-3" type="radio" name="reverse-radio" label="Radio 3" reverse disabled />
            </div>

            <div className="mb-12">
                <h4>Radio Customizing</h4>
                <pre><code>
{`<Form.Check className="mb-3" type="radio">
    <Form.Check.Input type="radio" isValid/>
    <Form.Check.Label>Customizing Radio Valid</Form.Check.Label>
    <Form.Control.Feedback type="valid">
        You did It!
    </Form.Control.Feedback>
  </Form.Check>
  <Form.Check className="mb-3" type="radio">
    <Form.Check.Input type="radio" isInvalid/>
    <Form.Check.Label>Customizing Radio Invalid</Form.Check.Label>
    <Form.Control.Feedback type="invalid">
        You did It!
    </Form.Control.Feedback>
  </Form.Check>`}
                </code></pre>
                <Form.Check className="mb-3" type="radio">
                    <Form.Check.Input type="radio" isValid/>
                    <Form.Check.Label>Customizing Radio Valid</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                        You did It!
                    </Form.Control.Feedback>
                </Form.Check>
                <Form.Check className="mb-3" type="radio">
                    <Form.Check.Input type="radio" isInvalid/>
                    <Form.Check.Label>Customizing Radio Invalid</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                        You did It!
                    </Form.Control.Feedback>
                </Form.Check>
            </div>

            <Separator />
            <br />

            <h2>Switches</h2>
            <div className="mb-12">
                <h4>Default Switch</h4>
                <pre><code>
                {`<Form.Check className="mb-3" type="switch" label="Switch 1" />`}
                </code></pre>
                <Form.Check className="mb-3" type="switch" label="Switch 1" />
            </div>

            <div className="mb-12">
                <h4>Switch Disabled</h4>
                <pre><code>
                {`<Form.Check type="switch" label="Disabled Switch" disabled />`}
                </code></pre>
                <Form.Check type="switch" label="Disabled Switch" disabled />
            </div>

            <div className="mb-12">
                <h4>Switch Inline</h4>
                <pre><code>
{`<Form.Check type="switch" name="inline-switch" label="Switch 1" inline />
  <Form.Check type="switch" name="inline-switch" label="Switch 2" inline />
  <Form.Check type="switch" name="inline-switch" label="Switch 3" inline />`}
                </code></pre>
                <Form.Check type="switch" name="inline-switch" label="Switch 1" inline />
                <Form.Check type="switch" name="inline-switch" label="Switch 2" inline />
                <Form.Check type="switch" name="inline-switch" label="Switch 3" inline />
            </div>

            <div className="mb-12">
                <h4>Switch Reverse</h4>
                <pre><code>
{`<Form.Check className="mb-3" type="switch" name="reverse" label="Switch 1" reverse />
  <Form.Check className="mb-3" type="switch" name="reverse" label="Switch 2" reverse />
  <Form.Check className="mb-3" type="switch" name="reverse" label="Switch 3" reverse disabled/>`}
                </code></pre>
                <Form.Check className="mb-3" type="switch" name="reverse" label="Switch 1" reverse />
                <Form.Check className="mb-3" type="switch" name="reverse" label="Switch 2" reverse />
                <Form.Check className="mb-3" type="switch" name="reverse" label="Switch 3" reverse disabled />
            </div>

            <div className="mb-12">
                <h4>Switch Customizing</h4>
                <pre><code>
{`<Form.Check className="mb-3" type="switch">
    <Form.Check.Input isValid/>
    <Form.Check.Label>Customizing Switch Valid</Form.Check.Label>
    <Form.Control.Feedback type="valid">
        You did It!
    </Form.Control.Feedback>
  </Form.Check>
  <Form.Check className="mb-3" type="switch">
    <Form.Check.Input isInvalid/>
    <Form.Check.Label>Customizing Switch Invalid</Form.Check.Label>
    <Form.Control.Feedback type="invalid">
        You did It!
    </Form.Control.Feedback>
  </Form.Check>`}
                </code></pre>
                <Form.Check className="mb-3" type="switch">
                    <Form.Check.Input isValid/>
                    <Form.Check.Label>Customizing Switch Valid</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                        You did It!
                    </Form.Control.Feedback>
                </Form.Check>
                <Form.Check className="mb-3" type="switch">
                    <Form.Check.Input isInvalid/>
                    <Form.Check.Label>Customizing Switch Invalid</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                        You did It!
                    </Form.Control.Feedback>
                </Form.Check>
            </div>
        </div>
    )
}

export default CheckRadioDocumentation;