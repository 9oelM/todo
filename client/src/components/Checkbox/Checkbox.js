// External
import React from 'react'

// Internal
import './Checkbox.scss'

const Checkbox = ({ handleClick, isChecked }) =>
    isChecked ? (
        <input
            type="checkbox"
            onClick={e => e.stopPropagation()}
            checked
            className="checkbox"
        />
    ) : (
        <input
            type="checkbox"
            onChange={handleClick}
            onClick={e => e.stopPropagation()}
            className="checkbox"
        />
    )

export default Checkbox
