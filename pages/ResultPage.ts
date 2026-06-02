import { type Page, type Locator, expect } from "@playwright/test";

export class ResultPage {
    readonly resultItems: Locator;

    constructor(private readonly page: Page) {
        this.resultItems = page.locator('div#search .a[href] h3');
    }

    async getTitles() {
        const titles: string[] = [];
        const count = await this.resultItems.count();

        for (let i = 0; i < count; i++) {
                const text = await this.resultItems.nth(i).innerText();
                if (text.trim()) {
                    titles.push(text.trim());
                }
        }
        return titles;
    }

    async assert(keyword: string) {
        const titles = await this.getTitles();
        console.log("count of titles: ", titles.length);
        console.log("titles: ", titles);
        expect(titles.length, "Doesnt exist").toBeGreaterThan(0);

        for(const [index, title] of titles.entries()) {
            const contains = title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
            expect(contains, "#${index + 1} doesnt contain keyword").toBe(true);
        }
    }
}