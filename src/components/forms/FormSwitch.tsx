import React from "react";

interface FormSwitchProps{
    label: string;
    size?: 'sm' | 'lg';
    isSolid?: boolean;
}

const FormSwitch: React.FC<FormSwitchProps> = ({
    label,
    size,
    isSolid = false,
}) => {
    const sizeClass = size ? `form-check-custom form-switch-${size}` : '';
    const solidClass = isSolid ? 'form-check-solid' : '';

    return(
        <div className={`form-check form-switch ${sizeClass} ${solidClass}`}>
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">{label}</label>
        </div>
    )
}

export default FormSwitch;