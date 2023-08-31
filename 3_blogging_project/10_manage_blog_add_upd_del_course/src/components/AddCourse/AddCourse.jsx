// AddCourse.jsx

import React, { useState, useContext, useEffect } from 'react'
import Modal from 'react-modal'
import { FetchedCoursesContext } from '../FetchCourses/FetchCourses'

const AddCourse = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [newTopicData, setNewTopicData] = useState({
    title: '',
    content: '',
    courseId: null,
  })

  const { courses, setCourses } = useContext(FetchedCoursesContext)

  useEffect(() => {
    const storedCourses = localStorage.getItem('courses')
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses))
    }
  }, [setCourses])

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses)) // Save courses to localStorage
  }, [courses])

  const handleSave = () => {
    const updatedCourses = courses.map((course) => {
      if (course._id === newTopicData.courseId) {
        const updatedTopics = [
          ...course.topics,
          {
            title: newTopicData.title,
            content: newTopicData.content,
          },
        ]
        return {
          ...course,
          topics: updatedTopics,
        }
      }
      return course
    })

    setCourses(updatedCourses) // Update the courses state

    setModalIsOpen(false)
    setNewTopicData({
      title: '',
      content: '',
      courseId: null,
    })
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Add Topic</button>

      <Modal isOpen={modalIsOpen}>
        <select
          value={newTopicData.courseId || ''}
          onChange={(e) =>
            setNewTopicData({ ...newTopicData, courseId: e.target.value })
          }
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.course_title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          value={newTopicData.title}
          onChange={(e) =>
            setNewTopicData({ ...newTopicData, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Content"
          value={newTopicData.content}
          onChange={(e) =>
            setNewTopicData({ ...newTopicData, content: e.target.value })
          }
        />
        <button onClick={handleSave}>Save</button>
      </Modal>
    </div>
  )
}

export default AddCourse
