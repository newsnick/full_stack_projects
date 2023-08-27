// // FetchCourses.jsx
// import React, { createContext, useState, useEffect } from 'react'

// // Create the context
// export const FetchedCoursesContext = createContext()

// const FetchCourses = ({ children }) => {
//   const [courses, setCourses] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:8080/courses.json')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched courses:', data) // Add this line to see the fetched data
//         setCourses(data)
//       })
//       .catch((error) => console.error('Error fetching data:', error))
//   }, [])

//   return (
//     <FetchedCoursesContext.Provider value={courses}>
//       {children}
//     </FetchedCoursesContext.Provider>
//   )
// }

// export default FetchCourses
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const FetchedCoursesContext = createContext()

export const FetchCourses = ({ children }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/courses.json')
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
