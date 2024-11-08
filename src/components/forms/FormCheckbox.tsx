import React from 'react';

interface FormCheckboxProps{
    label: string;
    size?: 'sm' | 'lg';
    isSolid?: boolean;
    state?: 'success' | 'danger' | 'warning';
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
    label,
    size,
    isSolid = false,
    state,
}) => {
    const sizeClass = size ? `form-check-${size}` : '';
    const solidClass = isSolid ? 'form-check-solid' : '';
    const stateClass = state ? `form-check-${state}` : '';

    return(
        <div className={`form-check ${sizeClass} ${solidClass} ${stateClass}`}>
            <input type='checkbox' className='form-check-input' />
            <label className='form-check-label'>{label}</label>
        </div>
    )
}

export default FormCheckbox;