// // CourseSnippets.jsx
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './CourseSnippets.css'

// export const CourseSnippets = ({ courses }) => {
//   return (
//     <>
//       {courses.map((course) => (
//         <div key={course._id} className="course-snippet">
//           <h2 className="course-title">{course.course_title}</h2>
//           {course.topics.map((topic, index) => (
//             <Link
//               key={index}
//               className="courses-list-item"
//               to={`/courses/${course._id}/topics/${index}`}
//             >
//               <h3 className="course-title">{topic.title}</h3>
//               <p className="course-excerpt">
//                 {topic.content.substring(0, 150)}...
//               </p>
//             </Link>
//           ))}
//         </div>
//       ))}
//     </>
//   )
// }

// export default CourseSnippets
import { Link } from 'react-router-dom'
import './ArticleSnippets.css'

export const ArticleSnippets = ({ Articles }) => {
  return (
    <>
      {Articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`/articles/${article.articleId}`}
        >
          <h3>{article.title}</h3>
          <p className="article-excerpt">
            {article.content[0].substring(0, 150)}...
          </p>
        </Link>
      ))}
    </>
  )
}

export default ArticleSnippets
