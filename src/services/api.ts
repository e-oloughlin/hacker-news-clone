import { useEffect, useState } from "react";
import type { ItemID, Item } from '../models';
import { topStoriesEndpoint, storyEndpoint } from '../constants';

export const useTopStoryIDs = (limit: number): [boolean, ItemID[]] => {
  const [loading, setLoading] = useState(false);
  const [topStoryIDs, setTopStoryIDs] = useState<ItemID[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const request = await fetch(topStoriesEndpoint);
        const response = await request.json();
        setTopStoryIDs(response.slice(0, limit));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, [limit]);

  return [loading, topStoryIDs];
};

export const useStory = (id: ItemID): Item | null => {
  const [story, setStory] = useState<Item | null>(null);

  useEffect(() => {
    (async () => {

      try {
        const request = await fetch(storyEndpoint(id));
        const response = await request.json();
        setStory(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return story;
};
