// updates:
//App.js: 1. fetch and provide courses context (FetchCourses) 2. route for course list 3. route for individual course and its topics.
// FetchCourses.jsx: fetch courses from local JSON file dynamically
// NavBarLinks.jsx: map and display courses in dropdown
// CourseTopicsPage.jsx: Find the selected course based on courseId dynamically
// CourseList.jsx: map and display selected course's topics

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
import TopicContent from './pages/TopicContent/TopicContent.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FetchCourses>
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />

              {/* Route for course list */}
              <Route path="/courses/" element={<CourseList />} />

              {/* Route for individual course and its topics */}
              {/* <Route
                path="/courses/:courseTitle"
                element={<CourseTopicsPage />}
              /> */}
              <Route path="/courses/:courseId" element={<CourseTopicsPage />} />
              {/* <Route
                path="/courses/:courseTitle/topics/:topicIndex"
                element={<TopicContent />}
              /> */}
              <Route
                path="/courses/:courseId/topics/:topicIndex"
                element={<TopicContent />}
              />
            </Routes>
          </div>
        </FetchCourses>
      </div>
    </BrowserRouter>
  )
}

export default App
