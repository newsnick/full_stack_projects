//DeleteCourse.jsx
import React, { useState, useContext } from 'react'
import { FetchedCoursesContext } from '../FetchCourses/FetchCourses'

const DeleteCourse = () => {
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(-1)

  const { courses, setCourses } = useContext(FetchedCoursesContext)

  const handleDelete = () => {
    if (selectedCourseId && selectedTopicIndex !== -1) {
      const updatedCourses = courses.map((course) => {
        if (course._id === selectedCourseId) {
          const updatedTopics = course.topics.filter(
            (_, index) => index !== selectedTopicIndex
          )
          return {
            ...course,
            topics: updatedTopics,
          }
        }
        return course
      })

      setCourses(updatedCourses)

      // Update localStorage after modifying courses
      localStorage.setItem('courses', JSON.stringify(updatedCourses))

      setSelectedCourseId('')
      setSelectedTopicIndex(-1)
    }
  }

  return (
    <div>
      <h2>Delete Course Topic</h2>
      <select
        value={selectedCourseId}
        onChange={(e) => setSelectedCourseId(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>
            {course.course_title}
          </option>
        ))}
      </select>
      {selectedCourseId && (
        <div>
          <h3>Select Topic to Delete:</h3>
          <ul>
            {courses
              .find((course) => course._id === selectedCourseId)
              .topics.map((topic, index) => (
                <li key={index}>
                  {topic.title}
                  <button onClick={() => setSelectedTopicIndex(index)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          {selectedTopicIndex !== -1 && (
            <button onClick={handleDelete}>Delete Selected Topic</button>
          )}
        </div>
      )}
    </div>
  )
}

export default DeleteCourse
