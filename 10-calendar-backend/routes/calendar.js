/** 
 * Calendar
 * host + /api/calendar
 */

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/jwt-validator');

const { getEvents, addEvent, editEvent, deleteEvent } = require('../controllers/calendar');

router.get('/', validateJWT, getEvents);
router.post(
	'/add',
	[
		check('title', 'Title is required').not().isEmpty(),
		check('start', 'Title is required').not().isEmpty().custom(	isDate ),
		validateFields,
		validateJWT
	],
	addEvent
);
router.put(
	'/:id/edit',
	[
		check('title', 'Title is required').not().isEmpty(),
		check('start', 'Title is required').not().isEmpty().custom(	isDate ),
		validateFields,
		validateJWT
	],
	editEvent
);
router.put(
	'/:id/delete',
	validateJWT,
	deleteEvent
);

module.exports = router;