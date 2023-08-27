//TopicContent.jsx

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FetchedCoursesContext } from '../../components/FetchCourses/FetchCourses' // Adjust the path

const TopicContent = () => {
  const { courseTitle, topicIndex } = useParams()
  const courses = useContext(FetchedCoursesContext)

  // Find the selected course based on the courseTitle parameter
  const selectedCourse = courses.find(
    (course) => course.course_title === courseTitle
  )

  // Check if the selected course and topicIndex are valid
  if (!selectedCourse || topicIndex >= selectedCourse.topics.length) {
    return <div>Topic not found.</div>
  }

  const selectedTopic = selectedCourse.topics[topicIndex]

  return (
    <div>
      <h2>{selectedTopic.title}</h2>
      <p>{selectedTopic.content}</p>
    </div>
  )
}

export default TopicContent
