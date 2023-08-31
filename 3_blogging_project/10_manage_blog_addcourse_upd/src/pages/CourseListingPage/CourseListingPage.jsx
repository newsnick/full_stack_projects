//CourseListingPage.jsx
import React, { useContext } from 'react'
import CourseSnippets from '../CourseSnippets/CourseSnippets'
import { FetchedCoursesContext } from '../../components/FetchCourses/FetchCourses'
import './CourseListingPage.css'

const CourseListingPage = () => {
  const { courses } = useContext(FetchedCoursesContext)

  return (
    <div className="listing-box">
      <h1>Topics</h1>

      <CourseSnippets courses={courses} />
    </div>
  )
}

export default CourseListingPage
