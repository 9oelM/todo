// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import { Delete as DeleteIcon } from '../Icons/Icons'
import './DeleteButton.scss'

const DeleteButton = ({ handleClick }) => (
    <div
        onClick={e => {
            e.stopPropagation()
        }}
    >
        <DeleteIcon />
    </div>
)

export default DeleteButton
