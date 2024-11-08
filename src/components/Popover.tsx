import { useEffect, useRef } from 'react';

interface PopoverProps {
  buttonText: string;
  popoverContent: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  buttonClass?: string; // For custom button styling
  inverse?: boolean; // Optional prop to enable inverse styling
}

const Popover: React.FC<PopoverProps> = ({
  buttonText,
  popoverContent,
  placement = 'top',
  buttonClass = 'btn btn-primary', // Default to Bootstrap primary button styling
  inverse = false // Default to false, will toggle inverse styling
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let popoverInstance: any;
    if (typeof window !== 'undefined' && buttonRef.current) {
      import('bootstrap').then((bootstrap) => {
        popoverInstance = new bootstrap.Popover(buttonRef.current!, {
          trigger: 'focus',
          content: popoverContent,
          placement: placement
        });
      });
    }

    return () => {
      if(popoverInstance){
        popoverInstance.dispose();
      }
    };
  }, [popoverContent, placement]);

  return (
    <button
      type="button"
      className={`${buttonClass} ${inverse ? 'popover-inverse' : ''}`} // Add inverse class if specified
      ref={buttonRef}
      data-bs-toggle="popover"
      aria-label={popoverContent}
    >
      {buttonText}
    </button>
  );
};

export default Popover;
