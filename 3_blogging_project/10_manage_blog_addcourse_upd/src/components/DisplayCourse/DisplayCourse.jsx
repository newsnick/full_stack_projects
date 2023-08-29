// // DisplayCourse.jsx
// import React, { useContext } from 'react'
// import { FetchedCoursesContext } from '../FetchCourses/FetchCourses'

// const DisplayCourse = ({ course_title }) => {
//   const courses = useContext(FetchedCoursesContext)

//   // Find the selected article
//   const selectedCourse = courses.find(
//     (course) => course.course_title === course_title
//   )

//   if (!selectedCourse) {
//     return <p>Course not found.</p>
//   }

//   return (
//     <div>
//       <h1>{selectedCourse.course_title}</h1>
//       <p>{selectedCourse.topics}</p>
//     </div>
//   )
// }

// export default DisplayCourse
