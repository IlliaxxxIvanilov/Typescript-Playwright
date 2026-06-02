import { test, expect } from '../fixtures/pages.fixture';

const SEARCH_QUERY = 'TypeScript';

test.describe('Google search', () => {
  test('Looking for query', async ({
    page,
    searchPage,
    resultPage,
  }) => {
      await test.step("Open main page of Google", async () => {
        await searchPage.goto();
      });

      await test.step("Type query", async () => {
        await searchPage.typeSearch(SEARCH_QUERY);
      });

      await test.step("Looking for", async () => {
        await searchPage.submitSearch();
        
      });

      await test.step("Check query", async () => {
        await page.waitForTimeout(180_000);
        await resultPage.assert(SEARCH_QUERY);
      });
  }
)
})