import { Locator, Page } from '@playwright/test';

export class SelectedFiltersListPageFragment {
  private locator: Locator;

  constructor(page: Page) {
    this.locator = page.locator('.selected-facets');
  }

  get clearAllFilters() {
    return this.locator.locator('.selected-facets__reset');
  }

  getFilterByText(name: string) {
    return this.locator.locator('.selected-facets__value', { hasText: name });
  }
}
