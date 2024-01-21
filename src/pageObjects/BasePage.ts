import { Page } from '@playwright/test';

export class BasePage {
  url = process.env.BASE_URL;
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get headerLink() {
    return this.page.locator('.header-component__item .link.douglas-logo__link');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  waitForNavigation() {
    return this.page.waitForURL(this.url);
  }

  async acceptAllCookies() {
    const cookiesModal = this.page.locator('.modal-overlay__root');
    const acceptAllCookies = cookiesModal.locator('.button.button__primary');

    await cookiesModal.waitFor({ state: 'visible' });
    await acceptAllCookies.click();
    await cookiesModal.waitFor({ state: 'hidden' });
  }
}
