import { useEffect, useState } from 'react';
import type { ItemID, Item, Category } from '../models';
import { allStories, singleStory } from '../utils';

interface allStoriesResponse {
  loading: boolean;
  storyIDs: ItemID[];
  pageNumber: number;
  incrementPageNumber: () => void;
  resetPageNumber: () => void;
}

export const useAllStories = (category: Category): allStoriesResponse => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [storyIDs, setStoryIDs] = useState<ItemID[]>([]);

  useEffect(() => {
    let response;
    (async () => {
      setLoading(true);
      try {
        const request = await fetch(allStories(category));
        response = await request.json();
        setStoryIDs(response.slice(0, 10 * pageNumber));
        setLoading(false);
      } catch (error) {
        console.error(error);;
        setLoading(false);
      }
    })();
  }, [category, pageNumber]);

  return {
    loading,
    storyIDs,
    pageNumber,
    incrementPageNumber: () => setPageNumber(pageNumber + 1),
    resetPageNumber: () => setPageNumber(1),
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
