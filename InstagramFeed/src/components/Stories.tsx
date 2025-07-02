import React from "react";
import { Story } from "../hooks/useStories";
import '../styles/stories.css';
import user1 from "../assets/user1.png"

interface Props {
  stories: Story[];
  onStorySelect: (index: number) => void;
}

const Stories: React.FC<Props> = ({ stories, onStorySelect }) => (
  <div className="stories-container">
    {stories.map((story, idx) => (
      <div className="story-avatar" key={story.id} onClick={() => onStorySelect(idx)}>
        <img src={story.imageUrl} alt="Story" />
      </div>
    ))}
  </div>
);

export default Stories;
