var initialize = function(app){
	app.get('/ping', function(request, response) {
		response.send(JSON.stringify({message: "I am alive !"}))
	});

	app.listen(app.get('port'), function() {
		console.log('Node app is running on port', app.get('port'));
	});
};

module.exports = {launch : initialize};