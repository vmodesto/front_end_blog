import React from 'react';
import Post from './Post';
import '../styles/Posts.css'

export function Posts() {
  const response = [{
    authorAvatar: "https://image.shutterstock.com/image-photo/pleasant-smiling-young-indian-woman-600w-1906256635.jpg",
    authorName: "Joaquina Silva",
    postImage: "https://www.zup.com.br/wp-content/uploads/2021/03/5ce2fde702ef93c1e994d987_flutter.png",
    postTitle: "Desenvolvendo sites com react",
    postDescription: "Testestfsdfisdjfsidfjsdfidsfjdsjfdsifdjsifdsfiisdfjsdifjfisdfifdfdfdfdfdfddfdfdffdfdfdfdfd"
  },
  {
    authorAvatar: "https://image.shutterstock.com/image-photo/pleasant-smiling-young-indian-woman-600w-1906256635.jpg",
    authorName: "Joaquina Silva",
    postTitle: "Desenvolvendo sites com react",
    postImage: "https://www.zup.com.br/wp-content/uploads/2021/03/5ce2fde702ef93c1e994d987_flutter.png",
    postDescription: "Testestfsdfisdjfsidfjsdfidsfjdsjfdsifdjsifdsfiisdfjsdifjfisdfi"
  },
  {
    authorAvatar: "https://image.shutterstock.com/image-photo/pleasant-smiling-young-indian-woman-600w-1906256635.jpg",
    authorName: "Joaquina Silva",
    postTitle: "Desenvolvendo sites com react",
    postImage: "https://www.zup.com.br/wp-content/uploads/2021/03/5ce2fde702ef93c1e994d987_flutter.png",
    postDescription: "Testestfsdfisdjfsidfjsdfidsfjdsjfdsifdjsifdsfiisdfjsdifjfisdfi"
  },
  {
    authorAvatar: "https://image.shutterstock.com/image-photo/pleasant-smiling-young-indian-woman-600w-1906256635.jpg",
    authorName: "Joaquina Silva",
    postTitle: "Desenvolvendo sites com react",
    postImage: "https://www.zup.com.br/wp-content/uploads/2021/03/5ce2fde702ef93c1e994d987_flutter.png",
    postDescription: "Testestfsdfisdjfsidfjsdfidsfjdsjfdsifdjsifdsfiisdfjsdifjfisdfi"
  },
]

  return (
    <>
      {response.map(post =>
        <div className="posts">
          <Post
            authorAvatar={post.authorAvatar}
            authorName={post.authorName}
            postDescription={post.postDescription}
            postTitle={post.postTitle}
            postImage={post.postImage}
            />
        </div>
      )}
      </>
   );
}