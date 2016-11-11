var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose'),
	bcrypt = require('bcrypt-nodejs');

var Car = new Schema({
	name: String,
	id: String,
	lat: String,
	long: String,
	point: String,
	pint_at: { type: Date, default: Date.now },

});


module.exports = mongoose.model('Car', Car);