var User = require('mongoose').model('User');
var path = require("path");
var nodemailer = require("nodemailer");
var env = process.env.NODE_ENV || 'development';

exports.index = function(req, res){
	res.send('hello')
};
exports.home = function(req, res){
	res.send('hello')
}
