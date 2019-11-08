import Dexie from "dexie";
import data from "./db.json";

class Store {
    constructor() {
        this.db = new Dexie("bookStore");
        this.db.version(1).stores({
            author: '++id,name,surename,created_at,updated_at',
            book: '++id,title,description,created_at,updated_at,published_at,publisher,stars,isRead,ISBN10'
        });

        this.insertMany();
    }

    async insertMany() {
        await this.db.author.bulkPut(data.authors);
        await this.db.book.bulkPut(data.books);
    }

    async getAuthors() {
        return await this.db.author.toArray();
    }

    async getBooks() {
        return await this.db.book.toArray();
    }
}

const StoreDB = new Store();

export default StoreDB;
