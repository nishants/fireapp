var Promise = require("promise");
var Client  = require("../client");
var service = {
	create: function(item){
		return new Promise(function(resolve, reject){
			resolve({id: Client.get("items").push(item).key});
		});
	}
};

module.exports = service;