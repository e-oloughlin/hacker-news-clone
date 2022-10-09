import { Page, expect } from '@playwright/test';
import type { ElementHandle, Response } from '@playwright/test';
import { allStoriesRegex, singleStoryRegex, singleStoryUrl } from './utils';
import type { Item, ItemID } from '../src/models/index';

export default class PageModel {
  readonly page: Page;
  readonly mockStories: Item[];
  readonly mockStoryIds: ItemID[];

  constructor(page: Page, mockStories: Item[]) {
    this.page = page;
    this.mockStories = mockStories;
    this.mockStoryIds = mockStories.map(({ id }) => id);
    this.interceptTopStories();
    this.interceptSingleStories();
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async expectPageTitle(title: RegExp) {
    await expect(this.page).toHaveTitle(title);
  }

  /**
   * This method intercepts the request to the endpoint
   * responsible for fetching all top story IDs and
   * forcibly returns a mock list of IDs instead,
   * so the API never gets hit.
   */
  async interceptTopStories() {
    await this.page.route(allStoriesRegex, (route) => route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(this.mockStoryIds),
      headers: {
        mocked: 'true'
      }
    }));
  }

  /**
   * This method intercepts the request to the endpoint
   * responsible for fetching an individual story and
   * forcibly returns a mock object instead,
   * so the API never gets hit.
   */
  async interceptSingleStories() {
    await this.page.route(singleStoryRegex, (route, request) => {
      const match = request.url().match(singleStoryRegex);

      if (match) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, id] = match;
        const story = this.mockStories.find(story => story.id === Number(id));

        return route.fulfill({
          contentType: 'application/json',
          body: JSON.stringify(story),
          headers: {
            mocked: 'true'
          }
        })
      }

      route.continue();
    });
  }

  /**
   * This method returns an array of promises, all of which
   * are relevant page events for hacker news stories which
   * once resolved signify that it is safe to begin assertions on the DOM.
   */
  async waitForStories() {
    type PageEvents = Promise<Response> | Promise<ElementHandle<SVGElement | HTMLElement>>;

    const pageEvents = this.mockStoryIds.reduce((all: PageEvents[], id): PageEvents[] => {
      return [
        ...all,
        this.page.waitForResponse(singleStoryUrl(id)),
        this.page.waitForSelector(`[data-id="${id}"]`, { state: 'visible' }),
      ];
    }, []);

    return Promise.all(pageEvents);
  }
}
