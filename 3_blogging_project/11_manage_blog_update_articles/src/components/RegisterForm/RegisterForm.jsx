//RegisterForm.jsx
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'

function RegisterForm() {
  // Create state to manage form data
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    userType: 'IT Professional',
  })

  // Create state to store user data objects
  const [userList, setUserList] = useState([])

  // Success message state
  const [successMessage, setSuccessMessage] = useState('')

  //   // Function to convert userList to JSON and print to console
  const printUserListToConsole = useCallback(() => {
    const userListJSON = JSON.stringify(userList, null, 2)
    console.log(userListJSON)
  }, [userList])

  // Log userList to the console whenever it changes
  useEffect(() => {
    console.log(userList)
    // Call the function to print userList as JSON
    printUserListToConsole()
  }, [userList, printUserListToConsole])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Update the state with form data
    const { name, username, email, password, repeatPassword, userType } =
      formData

    // Check if passwords match
    if (password !== repeatPassword) {
      alert("Passwords don't match")
      return
    }

    // Create an object to represent the user
    const user = {
      id: userList.length + 1, // Generate a unique ID
      name,
      username,
      email,
      password,
      userType,
    }

    try {
      // Save the user data to the list of users
      setUserList([...userList, user])

      // Display success message
      setSuccessMessage('Account successfully created')

      // Clear the form
      setFormData({
        name: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        userType: 'IT Professional',
      })
    } catch (error) {
      console.error('Error saving user data:', error)
    }
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <Link to="/login" className="back-button">
          Back to Login
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="form-label text-center mb-3">
            <p>Sign up:</p>
          </div>

          <div className="form-outline mb-4">
            {' '}
            <label className="form-label" htmlFor="registerName">
              Name
            </label>
            <input
              type="text"
              id="registerName"
              className="form-control"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="form-outline mb-4">
            {' '}
            <label className="form-label" htmlFor="registerUsername">
              Username
            </label>
            <input
              type="text"
              id="registerUsername"
              className="form-control"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="form-outline mb-4">
            {' '}
            <label className="form-label" htmlFor="registerEmail">
              Email
            </label>
            <input
              type="email"
              id="registerEmail"
              className="form-control"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="form-outline mb-4">
            {' '}
            <label className="form-label" htmlFor="registerPassword">
              Password
            </label>
            <input
              type="password"
              id="registerPassword"
              className="form-control"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="form-outline mb-4">
            {' '}
            <label className="form-label" htmlFor="registerRepeatPassword">
              Repeat password
            </label>
            <input
              type="password"
              id="registerRepeatPassword"
              className="form-control"
              value={formData.repeatPassword}
              onChange={(e) =>
                setFormData({ ...formData, repeatPassword: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <select
              className="form-control"
              id="userType"
              value={formData.userType}
              onChange={(e) =>
                setFormData({ ...formData, userType: e.target.value })
              }
            >
              <option value="IT Professional">IT Professional</option>
              <option value="Student">Student</option>
            </select>
          </div>
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-block mb-3 mt-4 w-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
