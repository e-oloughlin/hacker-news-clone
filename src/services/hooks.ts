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

interface SingleStoryResponse {
  loading: boolean;
  story: Item | null;
}

export const useStory = (id: ItemID): SingleStoryResponse => {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState<Item | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      try {
        const request = await fetch(singleStory(id), {
          signal: controller.signal
        });
        const response = await request.json();
        setStory(response);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        if (error.name === 'AbortError') return;
        console.error(error);
      }
    })();

    return () => controller.abort();
  }, [id]);

  return { loading, story };
};
