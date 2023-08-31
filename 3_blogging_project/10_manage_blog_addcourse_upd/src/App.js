// updates:
//App.js: 1. added route for the Course Listing Page 2. added route for the Course List
// CourseListingsPage.jsx: display list of topics using context
// CourseSnippets.jsx: Display course titles and snippets of all topics through mapping
// App.js
import React from 'react'
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
import CourseListingPage from './pages/CourseListingPage/CourseListingPage.jsx'
import AddCourse from './components/AddCourse/AddCourse.jsx'
import AddCourseButton from './components/AddCourseButton/AddCourseButton.jsx'
import DeleteCourse from './components/DeleteCourse/DeleteCourse.jsx'
import DeleteCourseButton from './components/DeleteCourseButton/DeleteCourseButton.jsx'
import UpdateCourse from './components/UpdateCourse/UpdateCourse.jsx'
import UpdateCourseButton from './components/UpdateCourseButton/UpdateCourseButton.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FetchCourses>
          {' '}
          <NavBar />{' '}
          <div className="buttons">
            <AddCourseButton /> <UpdateCourseButton />
            <DeleteCourseButton />
          </div>
          <div id="page-body">
            <Routes>
              {' '}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CourseListingPage />} />
              {/* Route for course list */}
              <Route path="/courses/*" element={<CourseList />} />
              {/* Route for individual course and its topics */}
              <Route
                path="/courses/:courseId/topics/:topicIndex"
                element={<CourseTopicsPage />}
              />
              <Route path="/courses/:courseId" element={<CourseTopicsPage />} />
              {/* Place AddCourse component within the Routes */}
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/delete-course" element={<DeleteCourse />} />
              <Route path="/update-course" element={<UpdateCourse />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </FetchCourses>
      </div>
    </BrowserRouter>
  )
}

export default App
