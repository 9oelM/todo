// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import './Button.scss'

const Button = ({ handleClick, children, id = '', className = '' }) => (
    <div onClick={handleClick} className={`button ${className}`} id={id}>
        {children}
    </div>
)

Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.element,
    id: PropTypes.string,
    className: PropTypes.string,
}

export default Button
