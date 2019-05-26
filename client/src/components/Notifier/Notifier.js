// External
import React from 'react'
import { PropTypes } from 'prop-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Internal
import './Notifier.scss'

toast.configure()

const Message = ({
    closeToast,
    handleRetry,
    buttonText = 'Retry',
    className = '',
    children,
}) => (
    <div className="todo-notification">
        <p>{children}</p>
        <button
            className={`todo-notification-button ${className}`}
            onClick={e => {
                e.stopPropagation()
                if (handleRetry) handleRetry()
                closeToast()
            }}
        >
            {buttonText}
        </button>
    </div>
)

Message.propTypes = {
    closeToast: PropTypes.func,
    handleRetry: PropTypes.func,
    buttonText: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string,
}

const onError = (msg, handleRetry) =>
    toast.error(<Message handleRetry={handleRetry}>{msg}</Message>, {
        autoClose: false,
        position: 'top-right',
        closeOnClick: false,
    })

const onInfo = (msg, buttonText = 'OK') =>
    toast.info(
        <Message className="info" buttonText={buttonText}>
            {msg}
        </Message>,
        {
            autoClose: true,
            position: 'top-right',
            closeOnClick: false,
        }
    )

export { onError, onInfo }
