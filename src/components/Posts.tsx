import React, { useEffect, useState } from 'react';
import Post from './Post';
import '../styles/Posts.css'
import api from '../services/api';

type IArticle = {
  id: number,
  name: string,
  authorAvatar: string,
  authorName: string,
  postDescription: string,
  postTitle: string,
  postImage: string
}


export function Posts() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
   api.get('api/articles').then(function (response){
     const data: IArticle[] = response.data.articles;
      setArticles(data);
    })
  }, []);
  
  return (
    <>
      {articles.map(article =>
        <div className="posts">
          <Post
            key={article.id}
            authorAvatar={article.authorAvatar}
            authorName={article.authorName}
            postDescription={article.postDescription}
            postTitle={article.postTitle}
            postImage={article.postImage}
            />
        </div>
      )}
      </>
   );
}