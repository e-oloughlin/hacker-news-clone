import { useEffect, useState } from 'react';
import type { ItemID, Item, Category } from '../models';
import { allStories, singleStory } from '../utils';

interface allStoriesResponse {
  loading: boolean;
  storyIDs: ItemID[];
}

export const useAllStories = (category: Category): allStoriesResponse => {
  const [loading, setLoading] = useState(false);
  const [storyIDs, setStoryIDs] = useState<ItemID[]>([]);

  useEffect(() => {
    let response;
    (async () => {
      setLoading(true);
      try {
        const request = await fetch(allStories(category));
        response = await request.json();
        setStoryIDs(response.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error(error);;
        setLoading(false);
      }
    })();
  }, [category]);

  return {
    loading,
    storyIDs,
  };
};

export const useStory = (id: ItemID): Item | null => {
  const [story, setStory] = useState<Item | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(singleStory(id));
        const response = await request.json();
        setStory(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return story;
};
