// //CourseListingPage.jsx
import React, { useState } from 'react'
import CourseSnippets from '../CourseSnippets/CourseSnippets'
import FetchCourses from '../../components/FetchCourses/FetchCourses'

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]) // Create state for courses

  return (
    <>
      <h1>Articles</h1>
      <FetchCourses /> {/* Just use the context */}
      <CourseSnippets /> {/* Use the courses from context */}
    </>
  )
}

export default CourseListingPage
