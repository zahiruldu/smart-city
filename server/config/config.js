var path = require('path');
var rootpath = path.normalize(__dirname + '/..');
 
module.exports = {
	development: {
		db: 'mongodb://127.0.0.1/hakathon',
		root: rootpath,
		app: {
			name: 'newscollection'
		}
	},

	production: {
		db: 'mongodb://afroza021:TithiTithi#021@ds023398.mlab.com:23398/passportauthentication',
		root: rootpath,
		app: {
			name: 'newscollection'
		}
	}
}
