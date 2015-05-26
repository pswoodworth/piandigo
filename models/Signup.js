var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Signup Model
 * =============
 */

var Signup = new keystone.List('Signup', {
	nocreate: true,
	noedit: true
});

Signup.add({
	email: { type: String, required: true },
	city: { type: String, required: true },
	time: { type: Date, default: Date.now }
});

Signup.defaultSort = '-time';
Signup.defaultColumns = 'email, city, time';
Signup.register();
