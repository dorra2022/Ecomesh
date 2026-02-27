const mongoose = require('mongoose');

const potSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    plantReference: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    sensors: [{
        type: String
    }],
    wateringSchedule: {
        frequency: { type: String, required: true },
        time: { type: String, required: true }
    },
    alarms: [{
        type: String
    }],
    remoteWateringCapability: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pot', potSchema);