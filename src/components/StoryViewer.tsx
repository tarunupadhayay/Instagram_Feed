import React, { useEffect, useRef } from "react";
import { Story } from "../hooks/useStories";
import '../styles/storyViewer.css';

interface Props {
  stories: Story[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const StoryViewer: React.FC<Props> = ({ stories, currentIndex, onClose, onNext, onPrev }) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(onNext, 5000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentIndex, onNext]);

  if (!stories[currentIndex]) return null;

  return (
    <div className="story-viewer">
    <div className="story-gradient-top"></div>
    <div className="story-header">
      <div className="story-user-info">
        <img src={stories[currentIndex].imageUrl} alt="avatar" className="story-user-avatar" />
        <span className="story-username">{stories[currentIndex].username}</span>
        <span className="story-time">{stories[currentIndex].time}</span>
      </div>
      <button className="story-close-btn" onClick={onClose}>×</button>
    </div>
    <div className="story-progress-bar">
      <div key={currentIndex} className="story-progress-fill"></div>
    </div>
    <img src={stories[currentIndex].story} alt="story" className="story-full" />
    <div className="story-controls">
  <button onClick={onPrev} className="prev-btn">❮</button>
  <button onClick={onNext} className="next-btn">❯</button>
</div>

  </div>  
  );
};

export default StoryViewer;
