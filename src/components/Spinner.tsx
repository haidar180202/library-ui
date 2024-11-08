import { Spinner as SpinnerComponent } from "react-bootstrap";

type SpinnerVariant = 
| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark';

type AnimationVariant = 'border' | 'grow';

interface SpinnerProps{
    variant?: SpinnerVariant;
    animation: AnimationVariant;
    size?: 'sm' ;
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
    variant,
    animation,
    size,
    className
}) => {
    return <SpinnerComponent variant={variant} animation={animation} size={size} className={className} />
}

export default Spinner;