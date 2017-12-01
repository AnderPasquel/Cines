var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection wrror;'));
db.once('open', function(){

});

var PerroSchema = mongoose.Schema({
	name: String,
	raza: String,
	edad: String
});

var Perro = mongoose.model('Perro', PerroSchema);