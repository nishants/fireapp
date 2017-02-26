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

var config = {
			apiKey						: process.env.CLIENT_KEY,
			authDomain				: CONFIG.firebase.authDomain,
			databaseURL				: CONFIG.firebase.databaseURL,
			storageBucket		 	: CONFIG.firebase.storageBucket,
			messagingSenderId	: CONFIG.firebase.messagingSenderId,
		},
		database = firebase.initializeApp(config).database().ref("client-storage"),
		usersDb = database.child("users");

usersDb.on("value", function(users){
	console.log("Changed : ");
	//console.log(JSON.stringify(users));
});

usersDb.push({
	"name": "User One",
	"Id":   "User Two",
});

