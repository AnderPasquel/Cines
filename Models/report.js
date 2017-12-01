var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	name: String, 
	description: String, 
	created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Report', reportSchema);