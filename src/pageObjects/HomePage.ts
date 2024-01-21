import { BasePage } from './BasePage';
import { Page } from '@playwright/test';
import { SwiperCarouselPageFragment } from './fragments/SwiperCarouselPageFragment';

export class HomePage extends BasePage {
  swiperCarousel: SwiperCarouselPageFragment;

  constructor(page: Page) {
    super(page);
    this.swiperCarousel = new SwiperCarouselPageFragment(page);
  }
}
