// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import './Checkbox.scss'

const Checkbox = ({ handleClick, isChecked }) =>
    isChecked ? (
        <input
            type="checkbox"
            onClick={e => e.stopPropagation()}
            onChange={handleClick}
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

Checkbox.propTypes = {
    handleClick: PropTypes.func,
    isChecked: PropTypes.bool,
}

export default Checkbox
