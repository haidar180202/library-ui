import { ProgressBar } from "react-bootstrap";

type ProgressVariant = 
| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark';

interface ProgressProps{
    now?: number;
    label?: string;
    variant?: ProgressVariant;
    striped?: boolean;
    animated?: boolean;
    className?: string;
}

const Progress: React.FC<ProgressProps> = ({
    now, 
    label, 
    variant, 
    striped, 
    animated,
    className
}) => {
    return <ProgressBar className={className} now={now} label={label} variant={variant} striped={striped} animated={animated} />
}

export default Progress;