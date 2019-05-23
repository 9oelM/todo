// External
import React from 'react'

// Internal
import './Button.scss'

const Button = ({ handleClick, children, id = '', className = '' }) => (
    <div
        onClick={() => console.log('clicked')}
        className={`button ${className}`}
        id={id}
    >
        {children}
    </div>
)

export default Button
