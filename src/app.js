var initialize = function(app){
	app.listen(app.get('port'), function() {
		console.log('Node app is running on port', app.get('port'));
	});
};

module.exports = {launch : initialize};