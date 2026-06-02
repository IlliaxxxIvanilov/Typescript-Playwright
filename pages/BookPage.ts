import {Book} from '../models/Book'
import {type Page} from '@playwright/test'

export class BookPage {
    constructor(private readonly page: Page) {

    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async getBook() {
        const title = await this.page.locator('#productTitle').innerText().catch(() => '');
        const author = await this.page.locator('.author a').innerText().catch(() => '');

        const price = await this.page.locator('span.a-size-base.a-color-secondary').innerText().catch(() => '0');
    
        const isBestseller = await this.page.locator('#best-seller-rank').isVisible().catch(() => false);

        return new Book(title, author, price, isBestseller);
    }
}