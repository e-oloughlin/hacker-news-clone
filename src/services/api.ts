import { useEffect, useState } from "react";
import type { ItemID } from '../models';
import { topStories } from '../constants';

export const useTopStoryIDs = (): [boolean, ItemID[]] => {
  const [loading, setLoading] = useState(false);
  const [topStoryIDs, setTopStoryIDs] = useState<ItemID[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const request = await fetch(topStories);
        const response = await request.json();
        setTopStoryIDs(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  return [loading, topStoryIDs];
};
