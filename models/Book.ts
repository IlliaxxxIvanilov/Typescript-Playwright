export class Book {
    title: string;
    author: string;
    price: string;
    isBestseller: boolean;

    constructor(
        title: string,
        author: string,
        price: string,
        isBestseller: boolean
    ) {
            this.title = title;
            this.author = author;
            this.price = price;
            this.isBestseller = isBestseller;
    }

    equals(other: Book) : boolean {
        return (
            this.author == other.author && 
            this.title == other.title &&
            this.price == other.price &&
            this.isBestseller == other.isBestseller
        )
    }


    toString() : string {
        return (
            'Book {\n\ttitle: "${this.title}",\n\tauthor: "${this.author}",\n\tprice: "${this.price}",\n\tis Bestseller? ' + (this.isBestseller ? 'yes' : 'no')
        );
    }

}