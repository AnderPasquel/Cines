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

var cinemexurl = mongoose.model('url', cinemexSchema, 'url');

router.route('/cinemexURL').get(function (req, res) {
	cinemexurl.find({}, function (err, cinemexurl) {
		if (err) return console.error(err);
		res.json(cinemexurl);
		console.log(cinemexurl);
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

var imgSchema = mongoose.Schema({
	titulo: String
});

var imgURL = mongoose.model('imgURL', imgSchema, 'imgURL');

router.route('/imgURL').get(function (req, res) {
	imgURL.find({}, function (err, imgURL) {
		if (err) return console.error(err);
		res.json(imgURL);
		console.log(imgURL);
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

module.exports = router; 