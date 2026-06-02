import {type Page, type Locator} from '@playwright/test'
import {Book} from '../models/Book'

export class AmazonResultPage {
    readonly resultItems: Locator;

    constructor(private readonly page: Page) {
        this.resultItems = page.locator('[data-component-type="s-search-result"]');
    }

    async getBooks() {
        const books: Book[] = [];
        const count = await this.resultItems.count();

        for (let i = 0; i < count; i++) {
            const item = this.resultItems.nth(i);

            const title = await item.locator('h2 a span').first().innerText().catch(() => '');
            const author = await item.locator('a.a-size-base').first().innerText().catch(() => '');

            const whole = await item.locator('.a-price-whole').first().innerText().catch(() => '0');
            const fraction = await item.locator('.a-price-fraction').first().innerText().catch(() => '00');

            const price = "$" + whole + "." +  fraction;

            const isBestseller = await item.locator('BEST_SELLER').isVisible().catch(() => false);

            if(title.trim()) {
                books.push(new Book(title, author, price, isBestseller));
            }
        } 

        return books;
    }
}