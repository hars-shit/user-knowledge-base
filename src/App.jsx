import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import "./App.css"
import Category from './pages/Category'
import ArticlePage from './pages/Articles'
const App = () => {
  return (
    <div className='wrapper'>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/category/:slug" element={<Category />}/>
       <Route path="/category/:slug/:articleSlug" element={<ArticlePage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App