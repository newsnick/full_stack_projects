// CourseTopicsPage.jsx
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FetchedCoursesContext } from '../../components/FetchCourses/FetchCourses'
import CourseList from '../../components/CourseList/CourseList'
import SelectedCourse from '../../components/SelectedCourse/SelectedCourse'
import './CourseTopicsPage.css'

const CourseTopicsPage = () => {
  const { courseId, topicIndex } = useParams()
  const courses = useContext(FetchedCoursesContext)

  const selectedCourse = courses.find((course) => course._id === courseId)

  if (!selectedCourse) {
    return <div>Course not found.</div>
  }

  return (
    <div className="topics-page-main">
      <div className="topics-list">
        <CourseList courses={courses} selectedCourse={selectedCourse} />
      </div>
      <div className="topic-content">
        <SelectedCourse
          selectedCourse={selectedCourse}
          topicIndex={topicIndex}
        />
      </div>
    </div>
  )
}

export default CourseTopicsPage
