import Spinner from "../components/Spinner";

const SpinnerDocumentation: React.FC = () => {
    return(
        <div className="container mt-4">
            <h1>Spinner Component Documentation</h1>
            <p>The <code>Spinner</code> component is .....</p>

            <div className="mb-12">
                <h4>Default Spinner</h4>
                <pre><code>
                {`<Spinner animation="border" />`}
                </code></pre>
                <Spinner animation="border" />
            </div>

            <div className="mb-12">
                <h4>Spinner Variants</h4>
                <pre><code>
{`<Spinner animation="border" />
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />`}
                </code></pre>
                <Spinner animation="border" className="mx-2" />
                <Spinner animation="border" className="mx-2" variant="primary" />
                <Spinner animation="border" className="mx-2" variant="secondary" />
                <Spinner animation="border" className="mx-2" variant="success" />
                <Spinner animation="border" className="mx-2" variant="danger" />
                <Spinner animation="border" className="mx-2" variant="warning" />
                <Spinner animation="border" className="mx-2" variant="info" />
                <Spinner animation="border" className="mx-2" variant="light" />
                <Spinner animation="border" className="mx-2" variant="dark" />
            </div>
            <div className="mb-12">
                <h4>Spinner Animations</h4>
                <pre><code>
{`<Spinner animation="border" />
  <Spinner animation="grow" />`}
                </code></pre>
                <Spinner animation="border" className="mx-2" />
                <Spinner animation="grow" className="mx-2" />
            </div>
            <div className="mb-12">
                <h4>Spinner Size</h4>
                <pre><code>
{`<Spinner animation="border" size="sm" />
  <Spinner animation="border" />`}
                </code></pre>
                <Spinner animation="border" size="sm" className="mx-2" />
                <Spinner animation="border" className="mx-2" />
            </div>
        </div>
    )
}

export default SpinnerDocumentation;