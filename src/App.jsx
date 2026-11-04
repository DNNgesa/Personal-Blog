import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Article from './components/Article'
import About from './components/About'
import blogData from './blog';

function App() {
  return (
    <div className="container my-5">
      <Header name={blogData.name} />
      <div className="row mt-4">
        <aside className="col-md-4 p-4 h-100">
          <About image={blogData.image} about={blogData.about} />
        </aside>
        <main className="col-md-8 ps-md-5">
          <ArticleList posts={blogData.posts} />
        </main>
      </div>
    </div>
  );
}

export default App;
