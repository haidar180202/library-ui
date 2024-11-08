import Progress from "../components/Progress";

const ProgressDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Progress Bar Component Documentation</h1>
            <p>The <code>Progress</code> component is..</p>

            <div className="mb-12">
                <h4>Default Progress Bar</h4>
                <pre><code>
{`<Progress now={70} />`}
                </code></pre>
                <Progress now={70} />
            </div>

            <div className="mb-12">
                <h4>Progress Bar with label</h4>
                <pre><code>
{`<Progress now={70} label="70%" />`}
                </code></pre>
                <Progress now={70} label="70%" />
            </div>

            <div className="mb-12">
                <h4>Progress Bar with Variant</h4>
                <pre><code>
{`<Progress variant="primary" now={35} />
  <Progress variant="secondary" now={40} />
  <Progress variant="success" now={45} />
  <Progress variant="danger" now={50} />
  <Progress variant="warning" now={55} />
  <Progress variant="info" now={60} />
  <Progress variant="light" now={65} />
  <Progress variant="dark" now={70} />`}
                </code></pre>
                <Progress variant="primary" now={35} />
                <br />
                <Progress variant="secondary" now={40} />
                <br />
                <Progress variant="success" now={45} />
                <br />
                <Progress variant="danger" now={50} />
                <br />
                <Progress variant="warning" now={55} />
                <br />
                <Progress variant="info" now={60} />
                <br />
                <Progress variant="light" now={65} />
                <br />
                <Progress variant="dark" now={70} />
            </div>

            <div className="mb-12">
                <h4>Progress bar with Strip</h4>
                <pre><code>
{`<Progress variant="success" now={80} striped />`}
                </code></pre>
                <Progress variant="success" now={80} striped />
            </div>

            <div className="mb-12">
                <h4>Progress bar with Animaterd</h4>
                <pre><code>
{`<Progress variant="danger" now={70} animated />`}
                </code></pre>
                <Progress variant="danger" now={70} animated />
            </div>
        </div>
    )
}

export default ProgressDocumentation;