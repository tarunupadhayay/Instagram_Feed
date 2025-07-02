// src/components/PostList.tsx
import React from 'react';
import PostItem from './PostItem';

const dummyPosts = [
    { "id": 1, "imageUrl": "../../public/user1.png" ,"username": "Priya", "story": "../../public/storyUser1.png", "time": "10m"  },
    { "id": 2, "imageUrl": "../../public/user2.png" ,"username": "Naman", "story": "../../public/storyUser2.png", "time": "10m"},
    { "id": 3, "imageUrl": "../../public/user3.png" ,"username": "Tony", "story": "../../public/storyUser3.png", "time": "10m"},
    { "id": 4, "imageUrl": "../../public/user4.png" ,"username": "Ananya", "story": "../../public/storyUser4.png", "time": "10m"},
    { "id": 5, "imageUrl": "../../public/user5.png" ,"username": "Rohit", "story": "../../public/storyUser5.png", "time": "10m"}
];

const PostList: React.FC = () => (
    <div className="post-list">
      {dummyPosts.map(post => (
        <PostItem 
          key={post.id} 
          username={post.username} 
          avatar={post.imageUrl} 
          imageUrl={post.story} 
        />
      ))}
    </div>
  );

export default PostList;
