var initialize = function(app){
	app.get('/ping', function(request, response) {
		response.send(JSON.stringify({message: "I am alive !"}))
	});
};

module.exports = {load : initialize};