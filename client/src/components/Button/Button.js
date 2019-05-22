// External
import React from 'react'

const Button = ({ handleClick, children }) => (
    <button onClick={handleClick} className="button">
        {children}
    </button>
)

export default Button
