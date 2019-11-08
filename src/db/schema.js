var schema = {
	version: 1,
	autoSchema: false, // must be false when version is defined
	stores: [
		{
			name: "author",
			keyPath: "id",
			autoIncrement: true,
			indexes: [
				{
					name: "name",
				},
				{
					name: "surename",
				},
				{
					name: "created_at",
				},
				{
					name: "updated_at",
				},
			],
		},
		{
			name: "book",
			keyPath: "id",
			autoIncrement: true,
			indexes: [
				{
					name: "title",
				},
				{
					name: "description",
				},
				{
					name: "created_at",
				},
				{
					name: "updated_at",
				},
				{
					name: "published_at",
				},
				{
					name: "publisher",
				},
				{
					name: "stars",
				},
				{
					name: "isRead",
				},
				{
					name: "ISBN10"
				}
			]
		}
	],
};

export default schema;
