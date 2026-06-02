import {type Locator, type Page} from '@playwright/test'


export class SearchPage {
    readonly url: string = "https://www.google.com";

    readonly searchInput: Locator;

    constructor(private readonly page: Page) {
        this.searchInput = page.locator('textarea[name="q"]');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async typeSearch(query: string) {
        await this.searchInput.waitFor({state: "visible"});
        await this.searchInput.click();
        await this.searchInput.fill(query);
    }

    async submitSearch() {
        await this.searchInput.press("Enter");
    }

    async searchFor(query: string) {
        await this.typeSearch(query);
        await this.submitSearch();
    }
}