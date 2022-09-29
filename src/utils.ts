import { Category } from "./models";

export const singleStory = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const allStories = (category: Category) => (
  `https://hacker-news.firebaseio.com/v0/${category}stories.json`
);
