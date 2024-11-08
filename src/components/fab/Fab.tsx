import React, { useState } from 'react';
import styles from './fab.module.css';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['fab-container']}>
      <div className={styles['fab-button']} onClick={toggleMenu}>
        <span className={styles['fab-icon']}>+</span>
      </div>
      {isOpen && (
        <div className={styles['fab-menu']}>
          <div className={styles['fab-menu-item']}>1</div>
          <div className={styles['fab-menu-item']}>2</div>
          <div className={styles['fab-menu-item']}>3</div>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
