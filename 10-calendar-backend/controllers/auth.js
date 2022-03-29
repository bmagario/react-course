const bcrypt = require('bcrypt');
const { generateJWT } = require('../helpers/jwt');
const User = require('../models/User');

const register = async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({
				ok: false,
				msg: 'The email is already in use'
			});
		}

		user = new User(req.body);
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hashSync(password, salt);

		await user.save();

		const token = generateJWT(user.id, user.name);
	
		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
			token
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error on register user'
		});
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({
				ok: false,
				msg: 'The user or the password is incorrect'
			});
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if(validPassword) {
			const token = generateJWT(user.id, user.name);
			res.status(200).json({
				ok: true,
				uid: user.id,
				name: user.name,
				token
			});
		} else {
			return res.status(400).json({
				ok: false,
				msg: 'The user or the password is incorrect'
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error on login user'
		});
	}
};

const renew = (req, res) => {
	const { uid, name } = req;
	const token = generateJWT(uid, name);
	
	res.json({
		ok: true,
		msg: 'renew',
		uid,
		name,
		token
	})
};

module.exports = {
	register,
	login,
	renew
}