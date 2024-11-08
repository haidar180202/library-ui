import styles from './Alert.module.css'

let alertContainer: HTMLElement | null = null;

const createAlertContainer = (position: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
  alertContainer = document.createElement('div');
  alertContainer.className = styles.alertContainer;

  switch (position) {
    case 'top':
      alertContainer.style.top = '20px';
      alertContainer.style.left = '50%';
      alertContainer.style.transform = 'translateX(-50%)';
      break;
    case 'bottom':
      alertContainer.style.bottom = '20px';
      alertContainer.style.left = '50%';
      alertContainer.style.transform = 'translateX(-50%)';
      break;
    case 'top-left':
      alertContainer.style.top = '20px';
      alertContainer.style.left = '20px';
      break;
    case 'top-right':
      alertContainer.style.top = '20px';
      alertContainer.style.right = '20px';
      break;
    case 'bottom-left':
      alertContainer.style.bottom = '20px';
      alertContainer.style.left = '20px';
      break;
    case 'bottom-right':
      alertContainer.style.bottom = '20px';
      alertContainer.style.right = '20px';
      break;
    default:
      alertContainer.style.top = '20px';
      alertContainer.style.left = '50%';
      alertContainer.style.transform = 'translateX(-50%)';
      break;
  }

  document.body.appendChild(alertContainer);
};

export const showAlert = (
  message: string,
  type: 'success' | 'error' | 'info' = 'info',
  position: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right',
  duration: number = 3000,
) => {
  if (!alertContainer) {
    createAlertContainer(position);
  }

  const alertElement = document.createElement('div');
  alertElement.textContent = message;
  alertElement.className = `${styles.alert} ${styles[type]}`;

  // Append the alert element to the container
  alertContainer?.appendChild(alertElement);

  // Trigger fade-in
  setTimeout(() => {
    alertElement.style.opacity = '1';
  }, 10);

  // Remove the alert after the specified duration
  setTimeout(() => {
    alertElement.style.opacity = '0';
    setTimeout(() => {
      alertElement.remove();
    }, 500); // Match this delay with the fade-out duration
  }, duration);
};