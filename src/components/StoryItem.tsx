// src/components/StoryItem.tsx
import React from "react";
import { Story } from "../hooks/useStories";

interface Props {
  story: Story;
  onClick: () => void;
}

const StoryItem: React.FC<Props> = ({ story, onClick }) => (
  <div className="story-item" onClick={onClick}>
    <img src={story.imageUrl} alt={`Story ${story.id}`} />
  </div>
);

export default StoryItem;
