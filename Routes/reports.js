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

var complejoSchema = mongoose.Schema({
	cine: String,
	complejo: String
});

var complejo = mongoose.model('Complejo', complejoSchema, 'Complejo');

router.route('/complejo').get(function (req, res) {
	complejo.find({}, function (err, complejo) {
		if (err) return console.error(err);
		res.json(complejo);
		console.log(complejo);
	})
})

var tituloSchema = mongoose.Schema({
	titulo: String
});

var titulos = mongoose.model('Peliculas', tituloSchema, 'Peliculas');

router.route('/peliculas').get(function (req, res) {
	titulos.find({}, function (err, titulos) {
		if (err) return console.error(err);
		res.json(titulos);
		console.log(titulos);
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

var Pelicula = mongoose.model('Pelicula', PeliculasSchema,'Pelicula');

router.route('/cines').get(function (req, res) {
	Cine.find({}, 'titulo', function (err, cines) {
		if (err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

router.route('/peliculas/:idMovie').get(function (req, res) {
	console.log(req.params.idMovie)
	Cine.find({ idMovieUnique: "5a25fcc98f964a33081cd10b" }, function (err, cines) {
		if (err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

var complejoSchema = mongoose.Schema({
	complejo: String
});

var complejos = mongoose.model('complejos', complejoSchema, 'complejos');

router.route('/complejos').get(function (req, res) {
	complejos.find({}, function (err, complejos) {
		if (err) return console.error(err);
		res.json(complejos);
		console.log(complejos);
	})
})

var cinemexURLSchema = mongoose.Schema({
	complejo: String
});

var cinemexURL = mongoose.model('cinemexURL', cinemexURLSchema, 'cinemexURL');

router.route('/cinemexURL').get(function (req, res) {
	cinemexURL.find({}, function (err, cinemexURL) {
		if (err) return console.error(err);
		res.json(cinemexURL);
		console.log(cinemexURL);
	})
})

var funcionesSchema = mongoose.Schema({
	funciones: String
});

var funciones = mongoose.model('funciones', funcionesSchema, 'funciones');

router.route('/funciones').get(function (req, res) {
	funciones.find({}, function (err, funciones) {
		if (err) return console.error(err);
		res.json(funciones);
		console.log(funciones);
	})
})

var cinepolisSchema = mongoose.Schema({
	funciones: String
});

var cinepolis = mongoose.model('Cinepolis', cinepolisSchema, 'Cinepolis');

router.route('/cinepolis').get(function (req, res) {
	cinepolis.find({}, function (err, cinepolis) {
		if (err) return console.error(err);
		res.json(cinepolis);
		console.log(cinepolis);
	})
})

router.route('/funciones/:idMovie').get(function (req, res) {
	console.log(req.params.idMovie);
	funciones.find({idMovieUnique: req.params.idMovie}, function (err, funciones) {
		if (err) return console.error(err);
		res.json(funciones);
		console.log(funciones);
	})
})



module.exports = router; 
