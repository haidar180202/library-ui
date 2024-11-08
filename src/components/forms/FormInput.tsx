import React from "react";

interface FormInputProps{
    type?: string;
    placeholder?: string;
    label?: string;
    isSolid?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
    type = 'text',
    placeholder,
    label,
    isSolid = false,
    isDisabled = false
}) => {
    const inputClass = isSolid ? 'form-control form-control-solid' : 'form-control';

    return(
        <div className="form-floating">
            <input 
                type={type}
                className={inputClass}
                placeholder={placeholder || label}
                disabled={isDisabled}
            />
            {label && <label>{label}</label>}
        </div>
    )
}

export default FormInput;