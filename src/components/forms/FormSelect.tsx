import React from "react";

interface FormSelectProps{
    options: string[];
    isSolid?: boolean;
    isDisabled?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
    options,
    isSolid = false,
    isDisabled = false
}) => {
    const selectClass = isSolid ? 'form-select form-select-solid' : 'form-select';

    return(
        <select className={selectClass} disabled={isDisabled}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default FormSelect;