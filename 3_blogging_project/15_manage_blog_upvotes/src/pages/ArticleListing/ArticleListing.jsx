// //CourseListingPage.jsx
// import React, { useContext } from 'react'
// import CourseSnippets from '../CourseSnippets/CourseSnippets'
// import { FetchedCoursesContext } from '../../components/FetchCourses/FetchCourses'
// import './CourseListingPage.css'

// const CourseListingPage = () => {
//   const { courses } = useContext(FetchedCoursesContext)

//   return (
//     <div className="listing-box">
//       <h1>Topics</h1>

//       <CourseSnippets courses={courses} />
//     </div>
//   )
// }

// export default CourseListingPage

//CourseListingPage.jsx

import ArticleSnippets from '../ArticleSnippets/ArticleSnippets'
import { Articles } from '../Article-Content/Article-Content'
import './ArticleListing.css'

const ArticleListing = () => {
  return (
    <div className="listing-box">
      <h1>Articles</h1>

      <ArticleSnippets Articles={Articles} />
    </div>
  )
}

export default ArticleListing
