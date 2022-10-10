import { useState } from 'react';
import type { ItemID, Category } from '../models';
import { allStories } from '../utils';
import useRequest from './useRequest';

interface allStoriesResponse {
  loading: boolean;
  storyIDs: ItemID[] | undefined;
  pageNumber: number;
  incrementPageNumber: () => void;
  resetPageNumber: () => void;
}

export const useAllStories = (category: Category): allStoriesResponse => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading } = useRequest<ItemID[]>(allStories(category), [category, pageNumber]);

  return {
    loading,
    storyIDs: data ? data.slice(0, 10 * pageNumber) : [],
    pageNumber,
    incrementPageNumber: () => setPageNumber(pageNumber + 1),
    resetPageNumber: () => setPageNumber(1),
  };
};
