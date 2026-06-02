import { test, expect } from '../fixtures/amazon.fixture';

const SEARCH_QUERY = 'Java';
const HIRING_BOOK = 'https://www.amazon.com/Head-First-Java-Brain-Friendly-Guide/dp/1491910771/ref=sr_1_6?crid=AYUK7X6JSNVS&dib=eyJ2IjoiMSJ9.uhUHpcgB7dTyfGvsG2lRw6LZMVbqOwc5-L4bqlsCc0N4xRRyFU8UqREe7am0AbgR2p79Be15FC4gBbWg7mWfZRwt1XDjCn60sn60FtEKGsgCn14ZXCuc2-7fvEJE4XVUUh9GHOHAoFEY0lJsiQHFvzWIzw9Ti6ViVsufVDI_g94T1xPWEMVDASIGVnKx1k__GImvZH6Us16Szqe6UEhWbMHj-M397FlK0ygyhSWipq8.y9fIsNbZaAAKbrNM3olfr9g33xlojVJMi6i694eHupw&dib_tag=se&keywords=Java&qid=1780313790&s=books&sprefix=java%2Cstripbooks-intl-ship%2C229&sr=1-6'

test.describe('Amazon book search', () => {
  test('Looking for books', async ({
    page,
    searchPage,
    resultPage,
    bookPage
  }) => {

    await test.step("Open detail page of hiring book", async () => {
        await bookPage.goto(HIRING_BOOK);
      });

      const target = await test.step("Get book", async () => {
        return await bookPage.getBook();
      });

      await test.step("Open main page of Amazon", async () => {
        await searchPage.goto();
      });

      await test.step("Looking for", async () => {
        await searchPage.searchFor(SEARCH_QUERY);
        
      });

      const books = await test.step("Get books", async () => {
        return await resultPage.getBooks();
      });

      await test.step("Hiring", async () => {
        const found = books.find(book => book.equals(target));

        expect(found, 'Cant find').toBeDefined;
      });
  }
)
})