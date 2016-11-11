var User = require('mongoose').model('User');
var Car = require('mongoose').model('Car');
var path = require("path");
var nodemailer = require("nodemailer");
var env = process.env.NODE_ENV || 'development';

exports.index = function(req, res){
	res.send('hello')
};
exports.home = function(req, res){
	res.send('hello')
}


exports.ping = function(req,res){
	if(!req.body.lat || !req.body.long){
		res.send('please send longitude and latitude');
	} else{
		var newCar = new Car({
	        id: req.body.id,
	        name: req.body.name,
	        lat: req.body.lat,
	        long: req.body.long
	      });
		newCar.save(function(err, result){
			res.send(result);
		});

	}
	

}


exports.allcars = function(req,res){
	Car.find({}, function(err, cars){
		res.send(cars);

	});
}

exports.now = function(req,res){
	var carId = req.params.carid;

	Car.find({"id": carId}).sort({ping_at: -1})
	   .exec(function(err, result) { 
	   	res.send(result);
	    });
}
