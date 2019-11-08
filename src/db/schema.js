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
	],
};

export default schema;
