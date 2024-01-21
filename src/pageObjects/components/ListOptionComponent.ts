import { Locator } from '@playwright/test';

export class ListOptionComponent {
  readonly locator: Locator;

  constructor(parentLocator: Locator, text?: string) {
    this.locator = parentLocator.locator('.facet-option', { hasText: text });
  }

  async isChecked() {
    const checkboxClasses = await this.locator.locator('.facet-option__checkbox').getAttribute('class');
    return checkboxClasses!.indexOf('facet-option__checkbox--selected') >= 0;
  }

  click() {
    return this.locator.click();
  }
}
