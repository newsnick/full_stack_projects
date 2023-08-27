// CourseTopicsPage.jsx

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FetchedCoursesContext } from '../../components/FetchCourses/FetchCourses'
import CourseList from '../../components/CourseList/CourseList'
import SelectedCourse from '../../components/SelectedCourse/SelectedCourse'
import './CourseTopicsPage.css'

const CourseTopicsPage = () => {
  const { course_title, topicIndex } = useParams() // Retrieve topicIndex from URL
  const courses = useContext(FetchedCoursesContext)

  // Find the selected course with matching course_title
  const selectedCourse = courses.find(
    (course) => course.course_title === course_title
  )

  return (
    <div className="topics-page-main">
      <CourseList courses={courses} />
      <SelectedCourse
        selectedCourse={selectedCourse}
        topicIndex={topicIndex}
      />{' '}
      {/* Pass topicIndex */}
    </div>
  )
}

export default CourseTopicsPage
