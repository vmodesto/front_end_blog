import React from 'react';
import '../styles/Post.css'

interface PostProps {
  authorAvatar: string,
  authorName: string,
  postImage: string,
  postTitle: string,
  postDescription: string
}

const Post = (props: PostProps) => {
  return (
    <div className="post">
      <div className="author">
        <img className="avatar" src={props.authorAvatar}></img>
        <h2 className="user-name">{props.authorName}</h2>
      </div>
      <div className="post-introduction">
        <img className="post-image" src={props.postImage}/>
        <div className="post-title-and-description">
          <h3 className="post-title">{props.postTitle}</h3>
          <p className="post-description">
           {props.postDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;