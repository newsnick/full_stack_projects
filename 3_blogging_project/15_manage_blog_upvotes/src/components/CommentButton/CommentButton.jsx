// CommentButton.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './CommentButton.css'

const CommentButton = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const navigate = useNavigate()

  const handleCommentClick = () => {
    setShowConfirmDialog(true)
  }

  const handleConfirmYes = () => {
    // Use navigate to redirect the user to the login page
    navigate('/login')
  }

  const handleConfirmNo = () => {
    setShowConfirmDialog(false)
  }

  return (
    <>
      <Button variant="success" onClick={handleCommentClick}>
        Comment
      </Button>

      {showConfirmDialog && (
        <div className="confirm-dialog">
          <div className="confirm-dialog-box">
            <p>Please log in first. Do you want to go to the login page?</p>
            <div className="confirm-dialog-buttons">
              <button
                className="confirm-dialog-button confirm-dialog-button-yes"
                onClick={handleConfirmYes}
              >
                Yes
              </button>
              <button
                className="confirm-dialog-button confirm-dialog-button-no"
                onClick={handleConfirmNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CommentButton
