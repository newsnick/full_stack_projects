// // CommentButton.jsx
// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button'
// import './CommentButton.css'

// const CommentButton = () => {
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false)

//   const handleCommentClick = () => {
//     setShowConfirmDialog(true)
//   }

//   const handleConfirmYes = () => {
//     // Redirect the user to the login page
//     window.location.href = 'http://localhost:3000/login'
//   }

//   const handleConfirmNo = () => {
//     setShowConfirmDialog(false)
//   }

//   return (
//     <>
//       <Button variant="success" onClick={handleCommentClick}>
//         Comment
//       </Button>

//       {showConfirmDialog && (
//         <div className="confirm-dialog">
//           <div className="confirm-dialog-box">
//             <p>Please log in first. Do you want to go to the login page?</p>
//             <div className="confirm-dialog-buttons">
//               <button
//                 className="confirm-dialog-button confirm-dialog-button-yes"
//                 onClick={handleConfirmYes}
//               >
//                 Yes
//               </button>
//               <button
//                 className="confirm-dialog-button confirm-dialog-button-no"
//                 onClick={handleConfirmNo}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default CommentButton
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Import Link and useNavigate
import Button from 'react-bootstrap/Button'
import './CommentButton.css'

const CommentButton = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const navigate = useNavigate() // Get the navigate function from React Router

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
