// External
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Internal
import './ErrorHandler.scss'

toast.configure()

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

const onError = handleRetry =>
    toast.error(
        <Message handleRetry={handleRetry}>
            There was an error while syncing with the server.
        </Message>,
        { autoClose: false, position: 'bottom-left', closeOnClick: false }
    )

export default onError
