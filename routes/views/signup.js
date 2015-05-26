var keystone = require('keystone'),
	Signup = keystone.list('Signup');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {
		
		var newSignup = new Signup.model();
		
	});
	
	res.sendStatus(200);
	
};
