var mongoose = require('mongoose');
var fs = require('fs');
var join = require('path').join;

module.exports = {
	init: function (config) {
		mongoose.connect(config.database.url);
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function (callback) {
			console.log('DB connected to ' + config.database.url);
		});

		fs.readdirSync(join(__dirname, '/models')).forEach(function (file) {
			if (file.indexOf('.js') > -1) {
				require(join(__dirname, '/models', file));
			}
		});
	}
};