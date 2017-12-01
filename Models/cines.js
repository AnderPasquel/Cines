var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function(){

});

var CineSchema = mongoose.Schema({
	name: String,
	raza: String,
	edad: String
});

var Perro = mongoose.model('Perro', PerroSchema);