const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    event_organizer: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    img: { type: String, trim: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    attendees: [
        { type: Schema.Types.ObjectId, ref: 'users' }
    ]
}, {
    timestamps: true,
    collection: 'events'
});

const Event = mongoose.model('events', eventSchema, 'events');

module.exports = Event;