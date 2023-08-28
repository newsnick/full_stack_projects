// FetchCourses.jsx
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const FetchedCoursesContext = createContext()

export const FetchCourses = ({ children }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get('../../courses.json')
      .then((response) => {
        setCourses(response.data)
      })
      .catch((error) => {
        console.error('Error fetching courses:', error)
      })
  }, [])

  return (
    <FetchedCoursesContext.Provider value={courses}>
      {children}
    </FetchedCoursesContext.Provider>
  )
}
