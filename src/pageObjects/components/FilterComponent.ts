import { Locator } from '@playwright/test';
import { ListOptionComponent } from './ListOptionComponent';

export class FilterComponent {
  readonly locator: Locator;

  constructor(parentLocator: Locator, text: string) {
    this.locator = parentLocator.locator('.facet', { hasText: text });
  }

  get content() {
    return this.locator.locator('.facet__menu-content');
  }

  get input() {
    return this.content.locator('[name="facet-search"]');
  }

  get saveButton() {
    return this.content.locator('.button.button__primary');
  }

  getOption(text: string) {
    return new ListOptionComponent(this.content, text);
  }

  isOpened() {
    return this.content.isVisible();
  }

  isApplied() {
    return this.locator.locator('.arrow-icon.icon--color-success').isVisible();
  }

  async click() {
    return this.locator.click();
  }
}
