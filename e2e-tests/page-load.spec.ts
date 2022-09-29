import { test, expect } from '@playwright/test';
import { mockStories } from './mocks';
import PageModel from './PageModel';

test('Hacker News Clone page loads successfully', async ({ page }) => {
  const test = new PageModel(page, mockStories);
  await test.goto('http://localhost:3000');
  await test.expectPageTitle(/Hacker News Clone/);
  await expect(test.page.locator('h3')).toHaveText('Hacker News');
});

test('Top stories render to the DOM', async ({ page }) => {
  const test = new PageModel(page, mockStories);
  await test.goto('http://localhost:3000');
  await test.waitForStories();

  const [first, second, third] = Object.keys(mockStories);

  // Test the text content of the first two titles against the expected mocks
  await expect(page.locator(`.story-title-${first}`)).toHaveText(mockStories[first].title);
  await expect(page.locator(`.story-title-${second}`)).toHaveText(mockStories[second].title);

  // Click the third page title and assert the page navigated to the expected URL
  await page.locator(`.story-title-${third}`).click();
  expect(page.url()).toEqual(mockStories[third].url);
});
