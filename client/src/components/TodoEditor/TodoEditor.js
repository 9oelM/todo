// External
import React, { useState } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { PropTypes } from 'prop-types'

// Internal
import './TodoEditor.scss'
import Button from '../Button/Button'

const handleCheckboxToggle = () => {
    // 1. UPDATE difference
    // 2. Strikethrough
}

const EditablePlainText = ({value, onClick}) => {
    const [toggle, setToggle] = useState(false)
    const displayEditableTextArea = (value) => <textarea>value</textarea>
    return toggle ? <Button className = "editable" handleClick={onClick}>{value}</Button> : displayEditableTextArea(value)
}

const TodoEditor = ({title, content}) => {
    return <div>
    <EditablePlainText value={title} onClick ={}/>
    <textarea>
    asdasd
    </textarea>
    </div>
}

TodoEditor.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    due: PropTypes.number,
    priority: PropTypes.number,
    completed: PropTypes.bool,
}

export default TodoEditor
