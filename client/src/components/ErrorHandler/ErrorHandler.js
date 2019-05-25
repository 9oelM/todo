// External
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Internal
import './ErrorHandler.scss'

const Message = ({ closeToast, handleRetry, children }) => (
    <div className="todo-notification">
        <p>{children}</p>
        <button
            className="todo-notification-button"
            onClick={e => {
                e.stopPropagation()
                handleRetry()
                closeToast()
            }}
        >
            Retry
        </button>
    </div>
)

export default Message
