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
  // Assertions can be made here now all stories have returned
});
