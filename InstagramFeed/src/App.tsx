// src/App.tsx
import React, { useState } from 'react';
import { useStories } from './hooks/useStories';
import Header from './components/Header';
import Stories from './components/Stories';
import StoryViewer from './components/StoryViewer';
import PostList from './components/PostList';
import './styles/app.css';

const App: React.FC = () => {
  const { stories, loading } = useStories();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClose = () => setCurrentIndex(null);
  const handleNext = () => currentIndex !== null && setCurrentIndex(currentIndex < stories.length - 1 ? currentIndex + 1 : null);
  const handlePrev = () => currentIndex !== null && setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app">
      <Header />
      <Stories stories={stories} onStorySelect={setCurrentIndex} />
      <PostList />
      {currentIndex !== null && (
        <StoryViewer
          stories={stories}
          currentIndex={currentIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
