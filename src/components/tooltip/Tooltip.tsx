import React, { useState, useRef } from 'react';
import styles from './Tooltip.module.css';

type TooltipProps = {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right'; // Add a position prop with four options
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, position = 'top', children }) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <div className={styles.tooltipWrapper}>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className={styles.target}
      >
        {children}
      </div>
      <div
        className={`${styles.tooltip} ${visible ? styles.visible : ''} ${styles[position]}`}
        ref={tooltipRef}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
