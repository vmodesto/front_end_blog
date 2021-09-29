import React from 'react';
import { Posts } from '../Posts';
import './styles/Home.css'

export function Home() {
  return (
      <div className="body">
        <div className="container">
          <h1 className="title">Posts em destaque</h1>
          <Posts className="posts"/>
        </div>
      </div>

  );
}