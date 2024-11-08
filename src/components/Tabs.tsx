import React, {useState} from "react";

interface TabItem{
    label: string;
    content: React.ReactNode;
    href?: string;
}

interface TabsProps{
    tabs: TabItem[];
    defaultActiveIndex?: number;
    className?: string;
}

const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultActiveIndex = 0,
    className
}) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    return(
        <div className={`nav-line-tabs ${className}`}>
            <ul className="nav">
                {tabs.map((tab, index) => (
                <li className="nav-item" key={index}>
                    <a
                    className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    href={tab.href}
                    >
                    {tab.label}
                    </a>
                </li>
                ))}
            </ul>
            <div className="tab-content mt-4">
                <div className="tab-pane active">{tabs[activeIndex].content}</div>
            </div>
        </div>
    )
}

export default Tabs;