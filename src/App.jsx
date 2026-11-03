import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Article from './components/Article'
import About from './components/About'
import blogData from './blog';

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
