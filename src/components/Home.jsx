import React from 'react';
import Posts from './Posts'
import './Home.css'

const Home = () => {
  return (
      <div className="body">
        <h1 className="title">Categorias</h1>
        <div className="container">
        <h1 className="title">Posts em destaque</h1>
        <Posts className="posts"/>
        </div>
      </div>

  );
}

export default Home;