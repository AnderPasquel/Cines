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

router.route('/cines/:peliculaID').get(function (req, res) {
	console.log(req.params.peliculaID)
	Cine.findById(req.params.peliculaID, function (err, cines) {
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


module.exports = router; 