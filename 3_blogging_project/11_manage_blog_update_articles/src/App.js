// updates:
// App.js: 1. added route for the Article Listing Page
// ArticleListing.jsx: display list of articles
// ArticleSnippets.jsx: Display course titles and snippets of all articles from Article-Content.jsx
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
import ArticleListing from './pages/ArticleListing/ArticleListing.jsx'
import AddCourse from './components/AddCourse/AddCourse.jsx'
//import AddCourseButton from './components/AddCourseButton/AddCourseButton.jsx'
import DeleteCourse from './components/DeleteCourse/DeleteCourse.jsx'
//import DeleteCourseButton from './components/DeleteCourseButton/DeleteCourseButton.jsx'
import UpdateCourse from './components/UpdateCourse/UpdateCourse.jsx'
//import UpdateCourseButton from './components/UpdateCourseButton/UpdateCourseButton.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import LoginFormButton from './components/LoginFormButton/LoginFormButton.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FetchCourses>
          {' '}
          <NavBar />{' '}
          {/* <div className="buttons">
            <AddCourseButton /> <UpdateCourseButton />
            <DeleteCourseButton />
          </div> */}
          <LoginFormButton />
          <div id="page-body">
            <Routes>
              {' '}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticleListing />} />
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
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </FetchCourses>
      </div>
    </BrowserRouter>
  )
}

export default App
