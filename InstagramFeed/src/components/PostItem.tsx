// src/components/PostItem.tsx
import React from 'react';
import '../styles/PostItem.css';

interface Props {
  username: string;
  avatar: string;
  imageUrl: string;
}

const PostItem: React.FC<Props> = ({ username, avatar, imageUrl }) => (
  <div className="post-item">
    <div className="post-header">
      <img src={avatar} alt={username} className="post-avatar" />
      <span className="post-username">{username}</span>
    </div>
    <img src={imageUrl} alt="post" className="post-image" />
  </div>
);

export default PostItem;
