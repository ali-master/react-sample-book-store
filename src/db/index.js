import Dexie from "dexie";
import schema from "./schema";

class Store {
	constructor() {
        this.db = new Dexie("bookStore");
        this.db.version(1).stores({
            Author: '++id,name,surename,created_at,updated_at',
            Book: '++id,title,description,created_at,updated_at,published_at,publisher,stars,isRead,ISBN10'
        });
	}

    get getAuthors() {
        return this.db.Author;
    }

	get getBooks() {
        return this.db.Book;
    }
}

const StoreDB = new Store();
console.log(StoreDB.getAuthors)

export default StoreDB;
