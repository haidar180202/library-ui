import React from 'react'
import style from './Modal.module.css'


interface HeaderProps {
    children?: React.ReactNode
    className?: string
}

const ModalHeader: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    return (
        <div className={`${className} ${style.modalBody}`}>
            {children}
        </div>
    )
}

export default ModalHeader
