import React from 'react'
import './AlertBox.css'

const AlertBox = ({ message, onClose }) => {
  return (
    <div className="confirm-dialog">
      <div className="confirm-dialog-box">
        <p>{message}</p>
        <div className="confirm-dialog-buttons">
          <button
            className="confirm-dialog-button confirm-dialog-button-yes"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlertBox
