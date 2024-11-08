import React from "react";
import FormInput from "../components/forms/FormInput";
import Separator from "../components/Separator";
import FormCheckbox from "../components/forms/FormCheckbox";
import FormSelect from "../components/forms/FormSelect";
import FormSwitch from "../components/forms/FormSwitch";

const FormsDocumentation: React.FC = () => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4',];

    return (
        <div className="container mt-4">
            <h1>Form Component Documentation</h1>

            <h2>Form Input</h2>

            <div className="mb-12">
                <h4>Default</h4>
                <pre><code>
                    {`<FormInput placeholder="Enter Text" label="Default Input" />`}
                </code></pre>
                <FormInput placeholder="Enter Text" label="Default Input" />
            </div>

            <div className="mb-12">
                <h4>Solid Input</h4>
                <pre><code>
                    {`<FormInput placeholder="Enter Text" label="Solid Input" isSolid />`}
                </code></pre>
                <FormInput placeholder="Enter Text" label="Solid Input" isSolid />
            </div>

            <div className="mb-12">
                <h4>Disabled Input</h4>
                <pre><code>
                    {`<FormInput placeholder="Enter Text" label="Disabled Input" isDisabled />`}
                </code></pre>
                <FormInput placeholder="Enter Text" label="Disabled Input" isDisabled />
            </div>

            <div className="mb-12">
                <h4>Password type Input</h4>
                <pre><code>
                    {`<FormInput placeholder="Enter Text" label="Disabled Input" isDisabled />`}
                </code></pre>
                <FormInput type="password" placeholder="Enter Text" label="Disabled Input" />
            </div>

            

            <br />
            <h2>Props In FormInput</h2>
            <ul>
                <li><code>type</code>: An array of breadcrumb items. Each item has a <code>label</code> and an optional <code>href</code>.</li>
                <li><code>placeholder</code>: The style variant of the breadcrumb (default, line, dot, separatorless).</li>
                <li><code>isSolid</code>: Additional custom classes for styling.</li>
                <li><code>isDisabled</code>: Additional custom classes for styling.</li>
                <li><code>isRequired</code>: Additional custom classes for styling.</li>       
            </ul>

            <br />
            <br />
            <Separator />

            <h2>Form Checkbox</h2>

            <div className="mb-12">
                <h4>Default Checkbox</h4>
                <pre><code>
                    {`<FormCheckbox label="Default Checkbox" />`}
                </code></pre>
                <FormCheckbox label="Default Checkbox" />
            </div>

            <div className="mb-12">
                <h4>Solid Checkbox</h4>
                <pre><code>
                    {`<FormCheckbox label="Solid Checkbox" isSolid />`}
                </code></pre>
                <FormCheckbox label="Solid Checkbox" isSolid />
            </div>

            <div className="mb-12">
                <h4>Success State Checkbox</h4>
                <pre><code>
                    {`<FormCheckbox label="Success Checkbox" state="success" />`}
                </code></pre>
                <FormCheckbox label="Success Checkbox" state="success" />
            </div>

            <div className="mb-12">
                <h4>Danger State Checkbox</h4>
                <pre><code>
                    {`<FormCheckbox label="Danger Checkbox" state="danger" />`}
                </code></pre>
                <FormCheckbox label="Danger Checkbox" state="danger" />
            </div>

            <div className="mb-12">
                <h4>Warning State Checkbox</h4>
                <pre><code>
                    {`<FormCheckbox label="Warning Checkbox" state="warning" />`}
                </code></pre>
                <FormCheckbox label="Warning Checkbox" state="warning" />
            </div>

            <h2>Form Select</h2>

            <div className="mb-12">
                <h4>Default Select</h4>
                <pre><code>
                    {`const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4',];
  <FormSelect options={options} />`}
                </code></pre>
                <FormSelect options={options} />
            </div>

            <div className="mb-12">
                <h4>Solid Select</h4>
                <pre><code>
                    {`const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4',];
  <FormSelect options={options} isSolid />/`}
                </code></pre>
                <FormSelect options={options} isSolid />
            </div>

            <h2>Form Switch</h2>

            <div className="mb-12">
                <h4>Default Switch</h4>
                <pre><code>
                    {`<FormSwitch label="Default Switch" />`}
                </code></pre>
                <FormSwitch label="Default Switch" />
            </div>

            <div className="mb-12">
                <h4>Solid Switch</h4>
                <pre><code>
                    {`<FormSwitch label="Solid Switch" isSolid />`}
                </code></pre>
                <FormSwitch label="Solid Switch" isSolid />
            </div>

            <div className="mb-12">
                <h4>Large Switch</h4>
                <pre><code>
                    {`<FormSwitch label="Large Switch" size="lg />`}
                </code></pre>
                <FormSwitch label="Large Switch" size="lg" />
            </div>
        </div>
    );
};

export default FormsDocumentation;