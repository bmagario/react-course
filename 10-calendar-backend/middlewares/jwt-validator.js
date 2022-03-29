const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
	const token = req.header('x-token');
	if (!token) {
		return res.status(401).json({
			ok: false,
			msg: 'No token provided'
		});
	}

	try {
		const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);
		req.uid = uid;
		req.name = name;
	} catch (error) {
		console.log(error);
		return res.status(401).json({
			ok: false,
			msg: 'The token is not valid'
		});
	}

	next();
}

module.exports = {
	validateJWT
};