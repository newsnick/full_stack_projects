import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import NavBar from './pages/NavBar/NavBar.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
