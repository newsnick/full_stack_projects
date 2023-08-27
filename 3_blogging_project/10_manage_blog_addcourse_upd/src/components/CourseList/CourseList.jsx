// // CourseList.jsx
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './CourseList.css'

// const CourseList = ({ courses }) => {
//   return (
//     <nav id="sidebar" className="bg-dark">
//       <div className="p-4">
//         <h1 className="text-white">React</h1>

//         <ul className="list-unstyled components">
//           {courses.map((course, index) => (
//             <li key={index}>
//               <Link
//                 className="list-items"
//                 to={`/courses/${course.course_title}`}
//               >
//                 {course.course_title}
//               </Link>
//               <ul>
//                 {course.topics.map((topic, topicIndex) => (
//                   <li key={topicIndex}>
//                     <Link
//                       to={`/courses/${course.course_title}/topics/${topicIndex}`}
//                     >
//                       {topic.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default CourseList
import React from 'react'
import { Link } from 'react-router-dom'
import './CourseList.css'

const CourseList = ({ courses }) => {
  return (
    <nav id="sidebar" className="bg-dark">
      <div className="p-4">
        <h1 className="text-white">React</h1>

        <ul className="list-unstyled components">
          {courses.map((course, index) => (
            <li key={index}>
              <Link
                className="list-items"
                to={`/courses/${course.course_title}`}
              >
                {course.course_title}
              </Link>
              <ul>
                {course.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>
                    <Link
                      to={`/courses/${course.course_title}/topics/${topicIndex}`}
                    >
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default CourseList
