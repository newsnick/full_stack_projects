// added:
// ReactPage.jsx: Main React articles page with list and selected article display.
// ArticleList.jsx: Displays a list of article links.
// SelectedArticle.jsx: Displays selected article details or a selection prompt.
// DisplayArticle.jsx: Displays content of a selected article.
// FetchReactArticles.jsx: Provides a context for fetching and storing React-related articles.
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
import CourseTopicsPage from './pages/CourseTopicsPage/CourseTopicsPage.jsx' // Import the component
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
              <Route path="/courses" element={<CourseList />} />

              {/* Route for individual course and its topics */}
              <Route
                path="/courses/:courseTitle"
                element={<CourseTopicsPage />}
              />
              <Route
                path="/courses/:courseTitle/topics/:topicIndex"
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
