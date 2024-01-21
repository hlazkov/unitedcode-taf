import { BasePage } from './BasePage';
import { Page } from '@playwright/test';
import { SwiperCarouselPageFragment } from './fragments/SwiperCarouselPageFragment';
import { FilterPageFragment } from './fragments/FilterPageFragment';
import { SelectedFiltersListPageFragment } from './fragments/SelectedFiltersPageFragment';

export class ParfumPage extends BasePage {
  filter: FilterPageFragment;
  selectedFiltersList: SelectedFiltersListPageFragment;
  swiperCarousel: SwiperCarouselPageFragment;

  constructor(page: Page) {
    super(page);
    this.url += 'c/parfum/01';
    this.filter = new FilterPageFragment(page);
    this.swiperCarousel = new SwiperCarouselPageFragment(page);
    this.selectedFiltersList = new SelectedFiltersListPageFragment(page);
  }

  pageTitleLabel = this.page.locator('.headline-bold');
}
