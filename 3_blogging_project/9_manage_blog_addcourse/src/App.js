// added:
// ReactPage.jsx: Main React articles page with list and selected article display.
// ArticleList.jsx: Displays a list of article links.
// SelectedArticle.jsx: Displays selected article details or a selection prompt.
// DisplayArticle.jsx: Displays content of a selected article.
// FetchReactArticles.jsx: Provides a context for fetching and storing React-related articles.
// App.js
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { Articles } from './pages/Article-Content/Article-Content.jsx'
import FetchArticles from './components/FetchArticles/FetchArticles.jsx'
import FetchReactArticles from './components/FetchReactArticles/FetchReactArticles.jsx'
import './components/FetchReactArticles/FetchReactArticles.css'
import ReactPage from './pages/ReactPage/ReactPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

function App() {
  const [articles, setArticles] = useState([])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar articles={Articles} />
        <div id="page-body">
          <FetchArticles setArticles={setArticles} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/articles"
              element={<ArticlesListPage articles={articles} />}
            />
            <Route
              path="/articles/:articleId"
              element={<ArticlePage articles={articles} />}
            />
            {/* Conditionally render NotFoundPage based on whether other routes match */}
            {!window.location.pathname.startsWith('/react-articles/') && (
              <Route path="*" element={<NotFoundPage />} />
            )}
          </Routes>
        </div>
        <FetchReactArticles>
          <div className="custom-container">
            <Routes>
              <Route
                path="/react-articles/:articleId"
                element={<ReactPage />}
              />
            </Routes>
          </div>
        </FetchReactArticles>
      </div>
    </BrowserRouter>
  )
}

export default App
