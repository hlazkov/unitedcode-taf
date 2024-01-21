import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class SwiperCarouselPageFragment {
  private locator: Locator;
  private page: Page;

  constructor(page: Page) {
    this.locator = page.locator('.douglas-swiper-carousel');
    this.page = page;
  }

  get parfumButton() {
    return this.locator.locator('[data-uid="FragrancesNavNode_DE"] .link');
  }

  async navigateTo(pageName: string) {
    switch (pageName) {
      case 'parfum':
        await this.parfumButton.click();
        break;
    }
    // This is needed to hide swiper dropdown
    await new BasePage(this.page).headerLink.hover();
  }
}
