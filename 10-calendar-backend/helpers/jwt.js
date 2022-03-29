const jwt = require('jsonwebtoken');

const generateJWT = (id, name) => {
	const payload = {
		uid: id,
		name: name
	};

	return jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: '1h'
	});
}

module.exports = {
	generateJWT
}