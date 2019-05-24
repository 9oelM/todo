// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import { Delete as DeleteIcon } from '../Icons/Icons'
import './DeleteButton.scss'

const DeleteButton = ({ handleClick, className = '' }) => (
    <div
        onClick={e => {
            e.stopPropagation()
        }}
        className={`icon-button ${className}`}
    >
        <DeleteIcon />
    </div>
)

export default DeleteButton
