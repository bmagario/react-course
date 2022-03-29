const { log } = require('npmlog');
const Event = require('../models/Event');

const getEvents = async (req, res) => {
	try {
		const events = await Event.find();

		res.status(201).json({
			ok: true,
			events
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error getting events'
		});
	}
};

const addEvent = async (req, res) => {
	try {
		const event = new Event(req.body);
		event.user = req.uid;
		await event.save();

		res.status(201).json({
			ok: true,
			event
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error on create event'
		});
	}
};

const editEvent = async (req, res) => {
	try {
		const eventId = req.params.id;
		const uid = req.uid;

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Event not found'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'User no authorized'
            });
        }

        const updatedEventData = {
            ...req.body,
            user: uid
        }

		const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedEventData, { new: true });

		res.status(201).json({
			ok: true,
			event: updatedEvent
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error editing event'
		});
	}
};

const deleteEvent = async (req, res) => {
	try {
		const eventId = req.params.id;
		const uid = req.uid;

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Event not found'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'User no authorized'
            });
        }

        const updatedEventData = {
            ...req.body,
            user: uid
        }

		await Event.findByIdAndDelete(eventId);

		res.status(201).json({
			ok: true
		})
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error deleting event'
		});
	}
};
module.exports = {
	getEvents,
	addEvent,
	editEvent,
	deleteEvent
}