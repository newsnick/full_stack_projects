import React, { useState, useContext } from 'react'
import { FetchedCoursesContext } from '../FetchCourses/FetchCourses'

const UpdateCourse = () => {
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(-1)
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedContent, setUpdatedContent] = useState('')

  const { courses, setCourses } = useContext(FetchedCoursesContext)

  const handleUpdate = () => {
    if (selectedCourseId && selectedTopicIndex !== -1) {
      const updatedCourses = courses.map((course) => {
        if (course._id === selectedCourseId) {
          const updatedTopics = course.topics.map((topic, index) => {
            if (index === selectedTopicIndex) {
              return {
                ...topic,
                title: updatedTitle || topic.title,
                content: updatedContent || topic.content,
              }
            }
            return topic
          })
          return {
            ...course,
            topics: updatedTopics,
          }
        }
        return course
      })

      setCourses(updatedCourses)
      setSelectedCourseId('')
      setSelectedTopicIndex(-1)
      setUpdatedTitle('')
      setUpdatedContent('')
      localStorage.setItem('courses', JSON.stringify(updatedCourses))
    }
  }

  return (
    <div>
      <h2>Update Course Topic</h2>
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
          <h3>Select Topic to Update:</h3>
          <ul>
            {courses
              .find((course) => course._id === selectedCourseId)
              .topics.map((topic, index) => (
                <li key={index}>
                  {topic.title}
                  <button onClick={() => setSelectedTopicIndex(index)}>
                    Update
                  </button>
                </li>
              ))}
          </ul>
          {selectedTopicIndex !== -1 && (
            <div>
              <input
                type="text"
                placeholder="New Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                placeholder="New Content"
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
              <button onClick={handleUpdate}>Update Topic</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default UpdateCourse
