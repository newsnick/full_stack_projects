// CourseList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './CourseList.css'

const CourseList = ({ selectedCourse }) => {
  return (
    <nav id="sidebar" className="bg-dark">
      <div className="p-4">
        <h2>{selectedCourse.course_title}</h2>
        <ul className="list-unstyled components">
          {selectedCourse.topics.map((topic, topicIndex) => (
            <li key={topicIndex}>
              <Link
                className="list-items"
                to={`/courses/${selectedCourse._id}/topics/${topicIndex}`}
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default CourseList
