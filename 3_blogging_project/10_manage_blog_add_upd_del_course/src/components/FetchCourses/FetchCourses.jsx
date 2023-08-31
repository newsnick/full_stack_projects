// FetchCourses.jsx
import React, { createContext, useState, useEffect } from 'react'

export const FetchedCoursesContext = createContext()

export const FetchCourses = ({ children }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const storedCourses = localStorage.getItem('courses')
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses))
    } else {
      fetch(process.env.PUBLIC_URL + '/data/courses.json')
        .then((response) => response.json())
        .then((data) => {
          setCourses(data)
          localStorage.setItem('courses', JSON.stringify(data))
        })
        .catch((error) => console.log(error))
    }
  }, [])

  return (
    <FetchedCoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </FetchedCoursesContext.Provider>
  )
}

// import React, { createContext, useEffect, useState } from 'react'
// import coursesData from '../../courses.json'

// export const FetchedCoursesContext = createContext()

// export const FetchCourses = ({ children }) => {
//   const [courses, setCourses] = useState([])

//   useEffect(() => {
//     setCourses(coursesData)
//     console.log(coursesData)
//   }, [])

//   return (
//     <FetchedCoursesContext.Provider value={{ courses, setCourses }}>
//       {children}
//     </FetchedCoursesContext.Provider>
//   )
// }
