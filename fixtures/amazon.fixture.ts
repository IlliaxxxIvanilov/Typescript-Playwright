import {test as base} from '@playwright/test'
import { AmazonSearchPage } from '../pages/AmazonSearchPage'
import { AmazonResultPage } from '../pages/AmazonResultPage'
import { BookPage } from '../pages/BookPage'

type AmazonFixtures = {
    searchPage: AmazonSearchPage;
    resultPage: AmazonResultPage;
    bookPage: BookPage;
}

export const test = base.extend<AmazonFixtures>({
    searchPage: async ({page}, use) => {
        await use(new AmazonSearchPage(page));
    },
    resultPage: async ({page}, use) => {
        await use(new AmazonResultPage(page));
    },
    bookPage: async ({page}, use) => {
        await use(new BookPage(page));
    }
});

export {expect} from '@playwright/test';