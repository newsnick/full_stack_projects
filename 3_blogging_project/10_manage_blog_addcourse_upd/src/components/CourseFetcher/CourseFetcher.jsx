// import React, { useState, useEffect } from 'react'

// const CourseFetcher = ({ onDataFetched }) => {
//   useEffect(() => {
//     fetch('http://localhost:8080/courses.json')
//       .then((response) => response.json())
//       .then((data) => onDataFetched(data))
//       .catch((error) => console.error('Error fetching data:', error))
//   }, [])

//   return null
// }

// export default CourseFetcher

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CourseFetcher = ({ onDataFetched }) => {
  useEffect(() => {
    axios
      .get('http://localhost:8080/courses.json')
      .then((response) => {
        onDataFetched(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return null
}

export default CourseFetcher
