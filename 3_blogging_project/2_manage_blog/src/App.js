import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NavBar from './pages/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3 id="title">Blogging App</h3>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
