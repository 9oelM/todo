// External
import React from 'react'

// Internal
import './Button.scss'

const Button = ({ handleClick, children }) => (
    <button onClick={handleClick} className="button">
        {children}
    </button>
)

export default Button
