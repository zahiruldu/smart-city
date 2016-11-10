var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalMongoose = require('passport-local-mongoose'),
	bcrypt = require('bcrypt-nodejs');

var User = new Schema({
	name: String,
	username: String,
	email: String,
	password: String,
	activate_id: String,
	country: String,
	is_active: { type: Boolean, default: false },
	created_date: { type: Date, default: Date.now },
	updated_date: { type: Date,default: Date.now }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);