/**added:
 * CommentButton.jsx - This component represents a button for adding comments. It handles the confirmation dialog for unauthenticated users.
 * 1. State to control the display of the confirmation dialog.
 * 2. Handler for clicking the comment button
 * 3. Handlers for confirming "Yes" or "no" in the confirmation dialog
 * AddComment.jsx - This component allows users to add comments to an article.
 * 1. State to store the comment text
 * 2. Handler for submitting a comment
 */

// App.js
import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { FetchCourses } from './components/FetchCourses/FetchCourses.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import CourseList from './components/CourseList/CourseList.jsx'
import CourseTopicsPage from './pages/CourseTopicsPage/CourseTopicsPage.jsx'
import ArticleListing from './pages/ArticleListing/ArticleListing.jsx'
import AddCourse from './components/AddCourse/AddCourse.jsx'
//import AddCourseButton from './components/AddCourseButton/AddCourseButton.jsx'
import DeleteCourse from './components/DeleteCourse/DeleteCourse.jsx'
//import DeleteCourseButton from './components/DeleteCourseButton/DeleteCourseButton.jsx'
import UpdateCourse from './components/UpdateCourse/UpdateCourse.jsx'
//import UpdateCourseButton from './components/UpdateCourseButton/UpdateCourseButton.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import UserProfile from './components/UserProfile/UserProfile.jsx'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  // Log the loggedInUser whenever it changes
  useEffect(() => {
    console.log('loggedInUser:', loggedInUser)
  }, [loggedInUser])

  //set the logged-in user
  const handleLogin = (user) => {
    setLoggedInUser(user)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <FetchCourses>
          {' '}
          <NavBar />{' '}
          {/* <div className="buttons">
            <AddCourseButton /> <UpdateCourseButton />
            <DeleteCourseButton />
          </div>  */}
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticleListing />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              {/* Place AddCourse component within the Routes */}
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/delete-course" element={<DeleteCourse />} />
              <Route path="/update-course" element={<UpdateCourse />} />
              {/* Route for course list */}
              <Route path="/courses/*" element={<CourseList />} />
              {/* Route for individual course and its topics */}
              <Route
                path="/courses/:courseId/topics/:topicIndex"
                element={<CourseTopicsPage />}
              />
              <Route path="/courses/:courseId" element={<CourseTopicsPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="/login"
                element={<LoginForm onLogin={handleLogin} />}
              />
              <Route path="/register" element={<RegisterForm />} />
              {/* Conditionally render UserProfile when loggedInUser is not null */}
              {loggedInUser && (
                <Route
                  path="/user-profile"
                  element={<UserProfile user={loggedInUser} />}
                />
              )}
            </Routes>
          </div>
        </FetchCourses>
      </div>
    </BrowserRouter>
  )
}

export default App
