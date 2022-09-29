export const singleStoryRegex = /https:\/\/hacker-news\.firebaseio\.com\/v0\/item\/([0-9]+)\.json/;
export const singleStoryUrl = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const allStoriesRegex = /https:\/\/hacker-news\.firebaseio\.com\/v0\/(?:new|top)stories\.json/;
