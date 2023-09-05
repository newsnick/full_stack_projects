// //LoginForm.jsx
// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

// import './LoginForm.css'

// function LoginForm() {
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         {/* Pills navs */}
//         <ul
//           className="nav nav-pills nav-justified mb-3"
//           id="ex1"
//           role="tablist"
//         >
//           <li className="nav-item" role="presentation">
//             <a
//               className="nav-link active"
//               id="tab-login"
//               data-mdb-toggle="pill"
//               href="#pills-login"
//               role="tab"
//               aria-controls="pills-login"
//               aria-selected="true"
//             >
//               Login
//             </a>
//           </li>
//           <li className="nav-item" role="presentation">
//             <Link
//               className="nav-link"
//               to="/register" // Set the "to" prop to the desired route
//               role="tab"
//               aria-controls="pills-register"
//               aria-selected="false"
//             >
//               Register
//             </Link>
//           </li>
//         </ul>
//         {/* Pills navs */}

//         {/* Pills content */}
//         <div className="tab-content">
//           <div
//             className="tab-pane fade show active"
//             id="pills-login"
//             role="tabpanel"
//             aria-labelledby="tab-login"
//           >
//             <form>
//               <div className="text-center mb-3">
//                 <p>Sign in</p>
//               </div>

//               {/* username input */}
//               <div className="form-outline mb-4">
//                 <input type="email" id="loginName" className="form-control" />
//                 <label className="form-label" htmlFor="loginName">
//                   username
//                 </label>
//               </div>

//               {/* Password input */}
//               <div className="form-outline mb-4">
//                 <input
//                   type="password"
//                   id="loginPassword"
//                   className="form-control"
//                 />
//                 <label className="form-label" htmlFor="loginPassword">
//                   Password
//                 </label>
//               </div>

//               {/* Submit button */}
//               <button type="submit" className="btn btn-primary btn-block mb-4">
//                 Sign in
//               </button>

//               {/* Register buttons */}
//               <div className="text-center">
//                 <p>
//                   Not a member? <Link to="/register">Register</Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//           <div
//             className="tab-pane fade"
//             id="pills-register"
//             role="tabpanel"
//             aria-labelledby="tab-register"
//           ></div>
//         </div>
//       </div>
//       {/* Pills content */}
//     </div>
//   )
// }

// export default LoginForm
import React, { useState } from 'react' // Import useState hook
import { Link } from 'react-router-dom'

import './LoginForm.css'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accessMessage, setAccessMessage] = useState('')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the form from submitting by default

    // Check if the username and password match the credentials
    if (username === 'user' && password === '123') {
      setAccessMessage('Access granted')
    } else {
      setAccessMessage('Access denied')
    }
  }

  let accessMessageClass = '' // CSS class for access message

  // Determine the CSS class based on access
  if (accessMessage === 'Access granted') {
    accessMessageClass = 'access-granted'
  } else if (accessMessage === 'Access denied') {
    accessMessageClass = 'access-denied'
  }

  return (
    <div className="login-container">
      <div className="login-form">
        {/* ... */}

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={handleSubmit}>
              <div className="text-center mb-3">
                <p>Sign in</p>
              </div>

              {/* Username input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="loginName"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label" htmlFor="loginName">
                  Username
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              {/* Access message */}
              <div className={`mb-4 ${accessMessageClass}`}>
                <p>{accessMessage}</p>
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>

              {/* Register buttons */}
              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
          {/* ... */}
        </div>
      </div>
    </div>
  )
}

export default LoginForm
