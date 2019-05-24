// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import { ArrowBack as ArrowBackIcon } from '../Icons/Icons'
import './ArrowBackButton.scss'

const ArrowBackButton = ({ handleClick }) => (
    <div
        onClick={e => {
            e.stopPropagation()
            handleClick()
        }}
        className="icon-button"
    >
        <ArrowBackIcon />
    </div>
)

export default ArrowBackButton
