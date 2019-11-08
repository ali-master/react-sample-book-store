import YDN from "ydn.db";
import schema from "./schema";

class Store {
	constructor() {
		this.db = new YDN.db.Storage("bookStore", schema);
	}

	get getAuthors() {}

	get getBooks() {}
}

export default new Store();
