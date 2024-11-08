// components/Stepper.tsx
import React, { useState } from 'react';
import styles from './Stepper.module.css';

interface Step {
  label: string;
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical'; // Add orientation prop
  showButtons?: boolean; // Add showButtons prop
  allowStepClick?: boolean; // Add allowStepClick prop
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  orientation = 'horizontal',
  showButtons = true,
  allowStepClick = true, // Default to true for clickability
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index: number) => {
    if (allowStepClick) {
      setCurrentStep(index);
    }
  };

  return (
    <div className={styles.stepper}>
      <h2>Stepper</h2>
      <div className={`${styles.progress} ${orientation === 'vertical' ? styles.vertical : styles.horizontal}`}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.step} ${index === currentStep ? styles.active : ''}`}
            onClick={() => goToStep(index)} // Make the step clickable based on the option
            style={{ cursor: allowStepClick ? 'pointer' : 'default' }} // Change cursor based on clickability
          >
            <div className={styles.stepIndicator}>{index + 1}</div>
            <div className={styles.stepLabel}>{step.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {steps[currentStep].content}
      </div>
      {showButtons && ( // Conditionally render the buttons
        <div className={styles.buttons}>
          <button onClick={prevStep} disabled={currentStep === 0} className={styles.button}>
            Previous
          </button>
          <button onClick={nextStep} disabled={currentStep === steps.length - 1} className={styles.button}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Stepper;
