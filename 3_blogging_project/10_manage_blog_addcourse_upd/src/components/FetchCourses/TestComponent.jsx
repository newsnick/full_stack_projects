import React, { useEffect } from 'react'
import coursesData from './courses.json'

const TestComponent = () => {
  useEffect(() => {
    console.log(coursesData)
  }, [])

  return <div>Testing</div>
}

export default TestComponent
