// FetchJSArticles.jsx
import React, { createContext, useState, useEffect } from 'react'

// create the context
export const FetchedJSArticlesContext = createContext()

export const FetchJSArticles = ({ children }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/articles', {
      method: 'GET',
      header: {
        Authorization: 'none',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filter articles that have "javascript" in their articleId
        const filteredArticles = data.filter((article) =>
          article.articleId.includes('javascript')
        )
        setArticles(filteredArticles)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <FetchedJSArticlesContext.Provider value={articles}>
      {children}
    </FetchedJSArticlesContext.Provider>
  )
}

export default FetchJSArticles
