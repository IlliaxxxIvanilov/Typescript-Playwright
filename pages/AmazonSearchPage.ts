import {type Page, type Locator} from '@playwright/test'

export class AmazonSearchPage {
    readonly url: string;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly categoryDropdown: Locator;

    constructor(private readonly page: Page) {
        this.url = 'https://www.amazon.com';
        this.searchInput = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.categoryDropdown = page.locator('#searchDropdownBox');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async selectBookCategory() {
        await this.categoryDropdown.selectOption({value: 'search-alias=stripbooks-intl-ship'});
    }

    async typeSearch(query: string) {
        await this.searchInput.fill(query);
    }

    async submitSearch() {
        await this.searchButton.click();
    }

    async searchFor(query: string) {
        await this.selectBookCategory();
        await this.typeSearch(query);
        await this.submitSearch();
    }
}