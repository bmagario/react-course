/** 
 * User Auth Routes
 * host + /api/auth
 */

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const { register, login, renew } = require('../controllers/auth');
const { validateFields } = require('../middlewares/auth-validator');
const { validateJWT } = require('../middlewares/jwt-validator');

router.post(
	'/register',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Email is required').isEmail(),
		check('password', 'Password must be at least 6 characters').isLength({ min:6 }),
		validateFields
	],
	register
);
router.post(
	'/login',
	[
		check('email', 'Email is required').isEmail(),
		check('password', 'Password must be at least 6 characters').isLength({ min:6 }),
		validateFields
	],
	login
);
router.get(
	'/renew',
	validateJWT,
	renew
);

module.exports = router;