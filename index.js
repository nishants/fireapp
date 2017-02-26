var express 		= require('express'),
		app 				= express(), expressLogging = require('express-logging'),
    logger 			= require('logops'),
		fs 					= require('fs'),
		bodyParser 	= require('body-parser'),
		firebase    = require('firebase'),

		CONFIG_PATH     = './config',
		CONFIG_FILE  		= 'CONFIG_PATH/config.json'.replace('CONFIG_PATH', CONFIG_PATH),
		CONSTANTS_PATH  = 'CONFIG_PATH/constants.json'.replace('CONFIG_PATH', CONFIG_PATH),
		CONFIG    		  = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')),
		CONSTANTS    		= JSON.parse(fs.readFileSync(CONSTANTS_PATH, 'utf8'));

app.use(expressLogging(logger));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-
app.set('port', (process.env.PORT || 5000));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Content-Type",'application/json');
  next();
});

require("./src/app").launch(app);
require("./src/routes").load(app);

var client  		= require("./src/client").load(firebase, CONFIG.storage, process.env.CLIENT_KEY),
		UserService = require("./src/services/user-service").use(client.get("users")),
		usersDb;


usersDb = client.get("users");

usersDb.on("value", function(users){
	console.log("User Modified");
});

UserService.create({
	"name": "User One",
	"Id":   "101",
});
