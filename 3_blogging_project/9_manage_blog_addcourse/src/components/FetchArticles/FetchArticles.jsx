// FetchArticles.jsx
import { useEffect } from 'react'

const FetchArticles = ({ setArticles }) => {
  useEffect(() => {
    fetch('http://localhost:8080/api/articles', {
      method: 'GET',
      headers: {
        Authorization: 'none',
      },
    })
      .then((response) => {
        console.log('Response status:', response.status)
        return response.json()
      })
      .then((data) => {
        console.log('Fetched data:', data)
        setArticles(data)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [setArticles])

  return null
}

export default FetchArticles
