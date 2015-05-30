var keystone = require('keystone'),
	Signup = keystone.list('Signup');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
		
	var newSignup = new Signup.model(req.body);
	newSignup.save(function(err){
		if (!err){
			res.sendStatus(200);
		}else{
			console.log(err);
		}
	});
		
};
