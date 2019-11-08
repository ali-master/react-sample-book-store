import Dexie from "dexie";
import data from "./db.json";

class Store {
	constructor() {
		this.db = new Dexie("bookStore");
		this.db.version(1).stores({
			author: "++id,name,surename,created_at,updated_at",
			book: "++id,title,description,created_at,updated_at,published_at,publisher,stars,isRead,ISBN10",
		});

		this.insertMany();
	}

	async insertMany() {
		await this.db.author.bulkPut(data.authors);
		await this.db.book.bulkPut(data.books);
	}

	//Authors
	async getAuthors() {
		return await this.db.author.toArray();
	}

	async addAuthor(data) {
		return await this.db.author.add({
			...data,
			created_at: new Date(),
		});
	}

	async deleteAuthor(id) {
		return await this.db.author.delete(id);
	}

	async getAuthor(authorId) {
		return await this.db.author.get({ id: authorId });
	}

	async updateAuthor(id, data) {
		return await this.db.author.update(id, { ...data, updated_at: new Date() });
	}

	//Books
	async getBooks() {
		return await this.db.book.toArray();
	}

	async addBook(data) {
		return await this.db.book.add({
			...data,
			created_at: new Date(),
		});
	}

	async deleteBook(id) {
		return await this.db.book.delete(id);
	}

	async getBook(bookId) {
		return await this.db.book.get({ id: bookId });
	}

	async updateBook(id, data) {
		return await this.db.book.update(id, { ...data, updated_at: new Date() });
	}
}

const StoreDB = new Store();

export default StoreDB;
