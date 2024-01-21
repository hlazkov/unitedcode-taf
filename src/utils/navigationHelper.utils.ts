import { BasePage } from '../pageObjects/BasePage';

export const waitForLoad = (page: BasePage, callback: () => Promise<void>) =>
  Promise.all([callback(), page.page.waitForLoadState()]);
