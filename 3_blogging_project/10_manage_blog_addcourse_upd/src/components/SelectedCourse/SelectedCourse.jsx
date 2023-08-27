// SelectedCourse.jsx
// import React from 'react'
// import DisplayCourse from '../../components/DisplayCourse/DisplayCourse'

// const SelectedCourse = ({ selectedCourse }) => {
//   return (
//     <div className="selected-course">
//       {selectedCourse ? (
//         <DisplayCourse course_title={selectedCourse.course_title} />
//       ) : (
//         <p>&#8592; Select Course.</p>
//       )}
//     </div>
//   )
// }

// export default SelectedCourse
import React from 'react'
import TopicContent from '../../pages/TopicContent/TopicContent' // Adjust the path

const SelectedCourse = ({ selectedCourse, topicIndex }) => {
  return (
    <div className="selected-course">
      {selectedCourse ? (
        <TopicContent selectedCourse={selectedCourse} topicIndex={topicIndex} />
      ) : (
        <p>&#8592; Select Course.</p>
      )}
    </div>
  )
}

export default SelectedCourse
