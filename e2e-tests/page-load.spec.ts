import { test, expect } from '@playwright/test';
import { mockStories } from './mocks';
import PageModel from './PageModel';
import { allStories } from '../src/utils';

test('Hacker News Clone page loads successfully', async ({ page }) => {
  const test = new PageModel(page, mockStories);
  await test.goto('http://localhost:3000');
  await test.expectPageTitle(/Hacker News Clone/);
  await expect(test.page.locator('h3')).toHaveText('Hacker News');
});

test('Stories render & page links work', async ({ page }) => {
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

// This test could be improved by making further assertions on the DOM content
// after a top/new category switch. For now, assertions against network requests
// offer some coverage.
test('Toggling between top & new stories requests the correct endpoint', async ({ page }) => {
  const test = new PageModel(page, mockStories);
  await test.goto('http://localhost:3000');
  await test.waitForStories();

  // Click the top stories toggle and
  // expect the resulting request to go to the topstories endpoint
  await Promise.all([
    page.locator('text=Top stories').click(),
    page.waitForRequest((request) => {
      return request.url() === allStories('top')
    })
  ]);

  // Now, click the top stories toggle and
  // expect the next request to hit the the newstories endpoint
  await Promise.all([
    page.locator('text=New stories').click(),
    page.waitForRequest((request) => {
      return request.url() === allStories('new')
    })
  ]);
});
