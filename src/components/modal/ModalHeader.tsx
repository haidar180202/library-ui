import React from 'react'
import Separator from '../Separator'
import style from './Modal.module.css'

interface HeaderProps {
    title?: string
    className?: string
}

const ModalHeader: React.FC<HeaderProps> = ({
    title,
    className
}) => {
    return (
        <div className={`${className} ${style.modalHeader}`}>
            <h2>{title}</h2>
            <Separator />
        </div>
    )
}

export default ModalHeader
