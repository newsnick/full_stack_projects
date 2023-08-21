// FetchArticles.jsx
import React, { useState, useEffect } from 'react'
import { ArticleList } from '../../pages/ArticleList/ArticleList'
import './FetchArticles.css'

const FetchArticles = () => {
  const [articles, setArticles] = useState([])

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
  }, [])

  return <ArticleList articles={articles} />
}

export default FetchArticles
