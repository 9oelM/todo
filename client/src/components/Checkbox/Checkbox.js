// External
import React from 'react'

// Internal
import './Checkbox.scss'

const Checkbox = ({ handleClick, isChecked }) =>
    isChecked ? (
        <input
            type="checkbox"
            onChange={handleClick}
            checked
            className="checkbox"
        />
    ) : (
        <input type="checkbox" onChange={handleClick} className="checkbox" />
    )

export default Checkbox
