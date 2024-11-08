import React from 'react';
import classNames from 'classnames';

interface SeparatorProps {
  type?: 'default' | 'dotted' | 'dashed';
  vertical?: boolean;
  content?: boolean;
  children?: React.ReactNode;
}

const Separator: React.FC<SeparatorProps> = ({ type = 'default', vertical = false, content = false, children }) => {
  const separatorClass = classNames('separator', {
    'separator-dotted': type === 'dotted',
    'separator-dashed': type === 'dashed',
    'separator-vertical': vertical,
    'separator-content': content,
    [`separator-${type}`]: type !== 'default',
  });

  return (
    <div className={separatorClass}>
      {content && children ? children : null}
    </div>
  );
};

export default Separator;
