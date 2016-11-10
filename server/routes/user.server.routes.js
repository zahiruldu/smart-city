var  path = require('path');
var users = require(__dirname + '/../controller/user.server.controller');
var mongoose = require("mongoose");
var User = mongoose.model('User');

module.exports = function(app,passport){
	app.route('/').get(users.index);
	app.route('/home').get(users.home);

}
