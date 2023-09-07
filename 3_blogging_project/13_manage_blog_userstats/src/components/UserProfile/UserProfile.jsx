// UserProfile.jsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth'
import './UserProfile.css'

function UserProfile({ user }) {
  const [isHovered, setIsHovered] = useState(false)
  const dispatch = useDispatch()

  const toggleHover = () => {
    setIsHovered(!isHovered)
  }

  const handleLogout = () => {
    setTimeout(() => {
      // Dispatch the logout action to update the login state
      dispatch(logout())
    }, 1000)
  }

  return (
    <div
      className={`user-profile-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="user-icon">{user.username.charAt(0).toUpperCase()}</div>
      {isHovered && (
        <div className="user-data">
          <p>
            User: <strong>{user.username}</strong>
          </p>
          <p>
            Email: <strong>{user.email}</strong>
          </p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default UserProfile
