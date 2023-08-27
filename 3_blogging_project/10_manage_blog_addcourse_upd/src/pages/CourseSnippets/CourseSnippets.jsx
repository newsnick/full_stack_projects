// CourseSnippets.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import './CourseSnippets.css'

export const CourseSnippets = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Link
          key={course.course_title}
          className="courses-list-item"
          to={`/courses/${course.course_title}`}
        >
          <h2 className="course-title">{course.course_title}</h2>
          <p className="course-excerpt">
            {course.topics.content[0].substring(0, 150)}...
          </p>
        </Link>
      ))}
    </>
  )
}

export default CourseSnippets
