var UserService = require("./services/user-service");

var initialize = function(app){
	app.get('/ping', function(request, response) {
		response.send(JSON.stringify({message: "I am alive !"}))
	});

	app.post('/items', function(request, response) {
		var success = function (data) {
					response.send(JSON.stringify(data))
				},
				error   = function (data) {
					response.send(JSON.stringify(data))
				};
		UserService.create_new(request.body.data).then(success, error);
	});

	app.post('/users', function(request, response) {
		var success = function (data) {
					response.send(JSON.stringify(data))
				},
				error   = function (data) {
					response.send(JSON.stringify(data))
				};
		UserService.create_new(request.body.user).then(success, error);
	});
	app.get('/users/:id', function(request, response) {
		var success = function (data) {
					response.send(JSON.stringify(data))
				},
				error   = function (data) {
					response.send(JSON.stringify(data))
				};
		UserService.find(request.params.id).then(success, error);
	});
};

module.exports = {load : initialize};