var service = {
	create: function (user) {
		service.schema.push(user);
	},
	use: function(schema){
		service.schema = schema;
		return service;
	}
};

module.exports = service;