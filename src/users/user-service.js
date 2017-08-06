var Promise = require("promise");
var Client  = require("../client");
var service = {
	create_new: function(user){
		return new Promise(function(resolve, reject){
			resolve({id: Client.get("users").push(user).key});
		});
	},
	find: function(id){
		return new Promise(function(resolve, reject){
			var ref = Client.get("users/:id");
			Client.get("users/:id".replace(":id", id)).once("value").then(function(data){
				resolve({user: data.val()});
			})
		});
	},
};

module.exports = service;