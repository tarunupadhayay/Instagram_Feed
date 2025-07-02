// src/components/StoryList.tsx
import React from "react";
import { Story } from "../hooks/useStories";
import StoryItem from "./StoryItem";

interface Props {
  stories: Story[];
  onStorySelect: (index: number) => void;
}

const StoryList: React.FC<Props> = ({ stories, onStorySelect }) => (
  <div className="story-list">
    {stories.map((story, index) => (
      <StoryItem key={story.id} story={story} onClick={() => onStorySelect(index)} />
    ))}
  </div>
);

export default StoryList;
