// SelectedCourse.jsx

import React from 'react'
import TopicContent from '../../pages/TopicContent/TopicContent'

const SelectedCourse = ({ selectedCourse, topicIndex }) => {
  return (
    <div className="selected-course">
      {selectedCourse && topicIndex !== undefined ? (
        <TopicContent selectedCourse={selectedCourse} topicIndex={topicIndex} />
      ) : (
        <p>&#8592; Select Course.</p>
      )}
    </div>
  )
}

export default SelectedCourse
