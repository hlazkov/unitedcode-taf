import { test } from '../src/fixture';
import { expect } from '@playwright/test';
import { waitForLoad } from '../src/utils/navigationHelper.utils';

test.describe('Check parfum filters', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
    await homePage.acceptAllCookies();
    await homePage.swiperCarousel.navigateTo('parfum');
  });

  [
    { highlights: 'Sale', Marke: 'Acorelle', Produktart: 'Eau de Parfum', 'Für Wen': 'Weiblich' },
    { highlights: 'NEU', Produktart: 'Eau de Toilette', 'Für Wen': 'Unisex' },
    { highlights: 'Limitiert', Marke: 'Yves Saint Laurent', Produktart: 'Duftset', 'Für Wen': 'Männlich' },
  ].forEach(testData =>
    test(`Filter parfum by ${JSON.stringify(testData)}`, async ({ parfumPage }) => {
      await expect.soft(parfumPage.pageTitleLabel).toBeVisible();

      for (const filterName of Object.keys(testData)) {
        const filter = parfumPage.filter.getFilterByName(filterName);
        await filter.click();
        await waitForLoad(parfumPage, () => filter.getOption(testData[filterName]).click());
        await filter.saveButton.click();
      }

      for (const filterValue of Object.values(testData)) {
        const appliedFilter = parfumPage.selectedFiltersList.getFilterByText(filterValue);
        await expect.soft(appliedFilter).toBeVisible();
      }
    }),
  );
});
