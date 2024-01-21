// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { test as base } from '@playwright/test';
import { ParfumPage } from './pageObjects/ParfumPage';
import { HomePage } from './pageObjects/HomePage';

type Pages = {
  homePage: HomePage;
  parfumPage: ParfumPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  parfumPage: async ({ page }, use) => {
    await use(new ParfumPage(page));
  },
});
