// External
import React from 'react'
import { PropTypes } from 'prop-types'
import si from 'shortid'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

// Internal
import { Priority as PriorityIcon } from '../Icons/Icons'
import './PriorityButton.scss'

const PriorityButton = ({
    handleClick,
    priority,
    tooltipPosition = 'left',
}) => (
    <div
        onClick={e => {
            e.stopPropagation()
        }}
        className="icon-button"
    >
        <Tooltip
            html={
                <div className="todo-set-priority">
                    <p>Set a priority of this todo</p>
                    <div className="todo-priorities-container">
                        {[1, 2, 3].map(num => (
                            <div
                                key={si.generate()}
                                onClick={() => handleClick(num)}
                            >
                                <PriorityIcon level={num} />
                            </div>
                        ))}
                    </div>
                </div>
            }
            interactive
            position={tooltipPosition}
            trigger="click"
        >
            <PriorityIcon level={priority} />
        </Tooltip>
    </div>
)

PriorityButton.propTypes = {
    handleClick: PropTypes.func,
    priority: PropTypes.number,
    tooltipPosition: PropTypes.string,
}

export default PriorityButton
