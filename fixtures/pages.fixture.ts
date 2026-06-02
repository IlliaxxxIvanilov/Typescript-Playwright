import { test as base } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import { ResultPage } from '../pages/ResultPage';


type GoogleFixtures = {
    searchPage: SearchPage;
    resultPage: ResultPage;
}


export const test = base.extend<GoogleFixtures>({
    searchPage: async ({ page }, use) => {
        const searchPage = new SearchPage(page);
        await use(searchPage);
    },

    resultPage: async ({ page }, use) => {
        const resultPage = new ResultPage(page);
        await use(resultPage);
    }
})

export { expect } from '@playwright/test';