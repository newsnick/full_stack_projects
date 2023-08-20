// SelectedArticle.jsx
import React from 'react'
import DisplayArticle from '../../components/DisplayArticle/DisplayArticle'

const SelectedArticle = ({ selectedArticle }) => {
  return (
    <div className="selected-article">
      {selectedArticle ? (
        <DisplayArticle articleId={selectedArticle.articleId} />
      ) : (
        <p>&#8592; Select Article.</p>
      )}
    </div>
  )
}

export default SelectedArticle
