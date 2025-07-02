import { useEffect, useState } from "react";

export interface Story {
  id: number;
  imageUrl: string;
  story:string;
  username?: string;
  time?: string;
}

export function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/data/stories.json')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setLoading(false);
      });
  }, []);

  return { stories, loading };
}
