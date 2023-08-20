// FetchArticles.jsx
import React, { createContext, useState, useEffect } from 'react'

// Create the context
export const FetchedArticlesContext = createContext()

const FetchReactArticles = ({ children }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/articles', {
      method: 'GET',
      headers: {
        Authorization: 'none',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filter articles that have "react" in their articleId
        const filteredArticles = data.filter((article) =>
          article.articleId.includes('react')
        )
        setArticles(filteredArticles)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <FetchedArticlesContext.Provider value={articles}>
      {children}
    </FetchedArticlesContext.Provider>
  )
}

export default FetchReactArticles
