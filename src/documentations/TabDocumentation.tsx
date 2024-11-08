import React from "react";
import Tabs from "../components/Tabs";

const TabDocumentation: React.FC = () => {
    const tabItems = [
        {
            label: 'Tab 1',
            content: (
                <p>Content for Tab 1</p>
            ),
            href: "#"
        },
        {
            label: 'Tab 2',
            content: (
                <p>Content for Tab 2</p>
            ),
            href: "#"
        },
        {
            label: 'Tab 3',
            content: (
                <p>Content for Tab 3</p>
            ),
            href: "#"
        },
    ];

    return (
        <div className="container">
            <h1>Tabs Documentation</h1>

            <div className="mb-12">
                <h2>Default Tabs</h2>
                <pre><code>
{`<Tabs 
  tabs={[
    { label: 'Tab 1', content: <p>Content for Tab 1</p>, href: "#" },
    { label: 'Tab 2', content: <p>Content for Tab 2</p>, href: "#" },
    { label: 'Tab 3', content: <p>Content for Tab 3</p>, href: "#" }
  ]} />`}
                </code></pre>
                <Tabs tabs={tabItems} />
            </div>

            <h3>Props</h3>
            <ul>
                <li>
                <strong><code>tabs</code></strong> (required): An array of objects where each object represents a tab. Each object has:
                <ul>
                    <li><code>label</code>: The text label for the tab.</li>
                    <li><code>content</code>: The content to display when the tab is active.</li>
                </ul>
                </li>
                <li>
                <code>defaultActiveIndex</code> (optional): The index of the tab that is active by default. Defaults to 0.
                </li>
                <li>
                <code>className</code> (optional): Additional class names to apply to the tabs container.
                </li>
                <li>
                    <code>href</code> (optional): The hyperlink reference to specify the destination URL when the tab is selected.
                </li>
            </ul>
        </div>
    )
}

export default TabDocumentation;