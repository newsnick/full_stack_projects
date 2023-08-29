// FetchCourses.jsx

import React, { createContext, useEffect, useState } from 'react'

export const FetchedCoursesContext = createContext()

export const FetchCourses = ({ children }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/courses.json', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setCourses(data)
        console.log(data)
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
