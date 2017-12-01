var express = require('express');
var bodyParser = require('body-parser');
var mogoose = require('mongoose');
var reports = require('./Routes/reports');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/apu', reports);

var port  = process.env.PORT || 3000;

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept");
	next();
});
/*
var router = express.Router();

router.get("/", function(req, res){
	res.json({message: 'Hi everybody...!'})
});

app.use('/api', router);
*/

app.listen(port);
console.log('Server listenign in the port: ' +port);