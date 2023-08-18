import React, { useState, useEffect } from 'react'
import './CRUDOperations.css'

const CRUDOperations = () => {
  const [articles, setArticles] = useState([])
  const [creatingArticle, setCreatingArticle] = useState('')
  const [newArticleName, setNewArticleName] = useState('')
  const [newArticleTitle, setNewArticleTitle] = useState('')
  const [newArticleContent, setNewArticleContent] = useState('')
  const [newArticleUpvotes, setNewArticleUpvotes] = useState(null)
  const [newArticleComments, setNewArticleComments] = useState('')
}

useEffect(() => {
  fetch('http://localhost:8080/api/articles', {
    headers: {
      Authorization: 'none',
    },
  })
    .then((response) => response.json())
    .then((data) => setArticles(data))
    .catch((error) => console.error('Error fetching data:', error))
}, [])

const handleCreateArticle = () => {
  setCreatingArticle(true)
}

const handleSaveNewArticle = async () => {
  const newArticle = {
    name: newArticleName,
    title: newArticleTitle,
    content: newArticleContent,
    upvotes: parseInt(newArticleUpvotes),
    comments: newArticleComments,
  }
}
