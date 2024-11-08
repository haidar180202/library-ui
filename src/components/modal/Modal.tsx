// components/Modal.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  className?: string
  width?: string
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  isDialog?: boolean
}

const Modal: React.FC<ModalProps> = ({ 
    children, 
    className,
    isOpen, 
    onClose, 
    width='600px',
    isDialog=false
  }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
          !isDialog &&
          modalRef.current && 
          !modalRef.current.contains(event.target as Node)
        ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDialog, isOpen, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`${styles.modalOverlay} 
        ${!isOpen ? styles.hidden : ''} 
        ${className}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div 
        className={`${styles.modal} 
        ${!isOpen ? styles.hidden : ''}`} 
        ref={modalRef}
        style={{
          maxWidth: width,
        }}
        >
        {children}
      </div>
    </div>
  );
};

export default Modal;