// External
import React from 'react'
import { PropTypes } from 'prop-types'
import si from 'shortid'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

// Internal
import { Priority as PriorityIcon } from '../Icons/Icons'
import './PriorityButton.scss'

const PriorityButton = ({ priority, handleClick }) => (
    <div
        onClick={e => {
            e.stopPropagation()
        }}
    >
        <Tooltip
            // options
            html={
                <div className="todo-preview-set-priority">
                    <p>Set a priority of this todo</p>
                    {[1, 2, 3].map(num => (
                        <PriorityIcon level={num} key={si.generate()} />
                    ))}
                </div>
            }
            interactive
            position="left"
            trigger="click"
        >
            <PriorityIcon level={priority} />
        </Tooltip>
    </div>
)

export default PriorityButton
