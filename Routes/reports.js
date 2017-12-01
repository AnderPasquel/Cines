var Report = require('./../Models/report');
var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://AnderP:12341234@ds117336.mlab.com:17336/cines_scraper', { useMongoClient: true });

var router = express.Router();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function () {

});

var cinemexSchema = mongoose.Schema({
	url: String
});

var cinemexurl = mongoose.model('cinemexURL', cinemexSchema, 'cinemexURL');

router.route('/cinemexURL').get(function (req, res) {
	cinemexurl.find({}, function (err, cinemexurl) {
		if (err) return console.error(err);
		readPeliculas
		res.json(cinemexurl);
		console.log(cinemexurl);
	})
})

var CineSchema = mongoose.Schema({
	cine: String
});

var Cine = mongoose.model('Cine', CineSchema);

router.route('/cines').get(function (req, res) {
	Cine.findOne({}, 'cine complejo', function (err, cines) {
		if (err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

var PeliculasSchema = mongoose.Schema({
	pelicula: String
});

var Pelicula = mongoose.model('Pelicula', PeliculasSchema);

router.route('/peliculas').get(function (req, res) {
	Cine.find({}, 'titulo', function (err, cines) {
		if (err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

router.route('/peliculas/:peliculaID').get(function (req, res) {
	console.log(req.params.peliculaID)
	Cine.findById(req.params.peliculaID, function (err, cines) {
		if (err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

/*

var PerroSchema = mongoose.Schema({
	name: String,
	raza: String,
	edad: String
});

var Perro = mongoose.model('Perro', PerroSchema);

router.route('/perros').get(function(req, res){
	console.log('si se metio');
	Perro.find(function(err, perros){
	if(err) return console.error(err);
	res.json(perros);
	console.log(perros);
})
})




router.route('/reports').get(function(req, res){

	var content;

			fs.readFile('./Routes/output.json', 'utf-8', function(err, data){

				content = data;

		 	console.log('File successfuly read!');


			res.json(content);

		});

});

router.route('/reports/:id').get(function(req, res){
	res.json({id: 0});
})*/



module.exports = router; 