import React, { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  content: any;
}

interface AccordionProps {
  items: AccordionItem[];
  iconToggle?: boolean;
  borderless?: boolean;
//   iconCollapse?: boolean;
//   flush?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  iconToggle = false,
  borderless = false,
//   iconCollapse = false,
//   flush = false,
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const getAccordionClasses = () => {
    let classes = 'accordion';
    if (borderless) classes += ' accordion-borderless';
    if (iconToggle) classes += ' accordion-icon-toggle';
    // if (iconCollapse) classes += ' accordion-icon-collapse';
    // if (flush) classes += ' accordion-flush';
    return classes;
  };

  return (
    <div className={getAccordionClasses()}>
      {items.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeItem === item.id ? '' : 'collapsed'}`}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
              <span className="accordion-icon">
                {iconToggle && <i className="svg-icon svg-icon-2"></i>}
                {/* {iconCollapse && (
                  <>
                    <i className={`accordion-icon-on svg-icon svg-icon-2 ${activeItem === item.id ? '' : 'd-none'}`}></i>
                    <i className={`accordion-icon-off svg-icon svg-icon-2 ${activeItem !== item.id ? '' : 'd-none'}`}></i>
                  </>
                )} */}
              </span>
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${activeItem === item.id ? 'show' : ''}`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
