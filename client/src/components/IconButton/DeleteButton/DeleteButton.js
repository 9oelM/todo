// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import { Delete as DeleteIcon } from '../Icons/Icons'
import './DeleteButton.scss'

const DeleteButton = ({ handleClick, className = '' }) => (
    <div
        data-confirm="Are you sure to delete?"
        onClick={e => {
            e.stopPropagation()
            if (handleClick) handleClick()
        }}
        className={`icon-button ${className}`}
    >
        <DeleteIcon />
    </div>
)

DeleteButton.propTypes = {
    handleClick: PropTypes.func,
    className: PropTypes.string,
}

export default DeleteButton
