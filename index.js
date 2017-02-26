var express 		= require('express'),
		app 				= express(), expressLogging = require('express-logging'),
    logger 			= require('logops'),
		bodyParser 	= require('body-parser');


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