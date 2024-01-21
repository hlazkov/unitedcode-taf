import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';
import { FilterComponent } from '../components/FilterComponent';

export class FilterPageFragment extends BasePage {
  private locator: Locator;

  constructor(page: Page) {
    super(page);
    this.locator = this.page.locator('.facet-list');
  }

  get productTypeFilter() {
    return new FilterComponent(this.locator, 'Produktart');
  }

  get highlightsFilter() {
    return new FilterComponent(this.locator, 'Highlights');
  }

  getFilterByName(name: string) {
    return new FilterComponent(this.locator, name);
  }
}
