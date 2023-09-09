// AddComment.jsx
import React, { useState } from 'react'

const AddComment = ({ addComment }) => {
  const [commentText, setCommentText] = useState('')

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    // Check if the comment is not empty
    if (commentText.trim() !== '') {
      // Call the addComment function to add the comment
      addComment(commentText)
      // Clear the input field
      setCommentText('')
    }
  }

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Enter your comment"
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  )
}

export default AddComment
